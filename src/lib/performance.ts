// Performance optimization utilities
import React from "react";

/**
 * Creates a lazy-loaded component with proper loading fallback
 */
export function createLazyComponent<T extends React.ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  fallback?: React.ComponentType
) {
  return React.lazy(importFunc);
}

/**
 * Preloads a component for better performance
 */
export function preloadComponent(importFunc: () => Promise<any>) {
  if (typeof window !== "undefined") {
    importFunc();
  }
}

/**
 * Creates an intersection observer for lazy loading
 */
export function createIntersectionObserver(
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
) {
  if (typeof window === "undefined") return null;

  return new IntersectionObserver(callback, {
    rootMargin: "50px",
    threshold: 0.1,
    ...options,
  });
}

/**
 * Debounce function for performance optimization
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Throttle function for performance optimization
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Check if element is in viewport
 */
export function isInViewport(element: Element): boolean {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * Preload critical resources
 */
export function preloadCriticalResources() {
  if (typeof window === "undefined") return;

  // Preload critical fonts
  const fontPreloads = [
    "https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap",
    "https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&display=swap",
    "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap",
  ];

  fontPreloads.forEach((href) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "style";
    link.href = href;
    document.head.appendChild(link);
  });

  // Preload critical images
  const criticalImages = [
    "/Images/tulip-large-Blue-white-website-header (2).webp",
    "/Images/Banner-1.webp",
  ];

  criticalImages.forEach((src) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = src;
    document.head.appendChild(link);
  });
}

/**
 * Optimize images for different screen sizes with high quality
 */
export function getOptimizedImageProps(
  src: string,
  alt: string,
  width: number,
  height: number,
  options: {
    priority?: boolean;
    loading?: "lazy" | "eager";
    sizes?: string;
    className?: string;
    quality?: number;
    type?: "banner" | "content" | "logo" | "icon" | "social";
  } = {}
) {
  // Set quality based on image type
  const getQuality = () => {
    if (options.quality) return options.quality;
    switch (options.type) {
      case "banner":
        return 95; // Highest quality for banners
      case "logo":
        return 95; // Highest quality for logos
      case "icon":
        return 95; // High quality for icons
      case "social":
        return 95; // High quality for social icons
      case "content":
        return 90; // High quality for content images
      default:
        return 90; // Default high quality
    }
  };

  return {
    src,
    alt,
    width,
    height,
    priority: options.priority || false,
    loading: options.loading || "lazy",
    sizes:
      options.sizes ||
      "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
    className: options.className || "",
    quality: getQuality(),
    placeholder: "blur",
    blurDataURL:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==",
  };
}
