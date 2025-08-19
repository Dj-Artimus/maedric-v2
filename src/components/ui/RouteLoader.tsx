/**
 * --------------------------------------------------------
 * ✏️ Author: DjArtimus
 * 📅 Created: 11-07-2025 - 14-07-2025
 *
 * 📌 Description:
 *   RouteLoaderClient is a Next.js client component that shows a loading progress bar on route changes using NProgress.
 * --------------------------------------------------------
 */

"use client";

import { usePathname } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useEffect, useRef } from "react";

/**
 * RouteLoaderClient
 *
 * Shows a loading progress bar on route changes using NProgress.
 *
 * @returns {null} This component does not render any visible output.
 *
 * @example
 * <RouteLoaderClient />
 */
export default function RouteLoaderClient() {
  const pathname = usePathname();
  const previousPath = useRef(pathname);

  useEffect(() => {
    if (previousPath.current !== pathname) {
      NProgress.start();

      const timer = setTimeout(() => {
        NProgress.done();
        previousPath.current = pathname;
      }, 500); // 👈 adjust time as you like

      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return null;
}
