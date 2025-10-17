"use client";

// Google Analytics component for gtag.js tracking
export function GoogleAnalytics() {
  return (
    <>
      {/* Google tag (gtag.js) */}
      {/* eslint-disable-next-line @next/next/next-script-for-ga */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-XFF93LSEMX"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XFF93LSEMX');
          `,
        }}
      />
    </>
  );
}
