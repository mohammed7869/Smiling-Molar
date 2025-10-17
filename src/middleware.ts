import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hostname = request.headers.get("host") || "";

  // Redirect www to non-www for consistency
  if (hostname.startsWith("www.")) {
    const newUrl = new URL(request.url);
    newUrl.hostname = hostname.replace("www.", "");
    return NextResponse.redirect(newUrl, 301);
  }

  // Redirect other pages to new SEO-optimized routes
  const pageRedirects: { [key: string]: string } = {
    "/blog": "/dental-blog",
  };

  // Check if current path needs to be redirected for other pages
  for (const [oldPath, newPath] of Object.entries(pageRedirects)) {
    if (pathname === oldPath) {
      return NextResponse.redirect(new URL(newPath, request.url), 301);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
