"use client";

import dynamic from "next/dynamic";

// Lazy load components that are not critical for initial render
const Footer = dynamic(() => import("@/components/layouts/footer"), {
  ssr: false, // Footer can load after initial render
});

const LoaderProvider = dynamic(() => import("@/components/ui/loader"), {
  ssr: false,
});

const FloatingTextForm = dynamic(
  () => import("@/components/ui/floatingButton"),
  {
    ssr: false, // Floating button can load after initial render
  }
);

export { Footer, LoaderProvider, FloatingTextForm };
