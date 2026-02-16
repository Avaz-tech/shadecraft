"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Adds active styling to the sidebar link that matches the current path.
 * Runs after hydration so the initial HTML can show all links without waiting for JS.
 */
export function SidebarLinkHighlighter() {
  const pathname = usePathname();

  useEffect(() => {
    const links = document.querySelectorAll<HTMLAnchorElement>(".sidebar-nav a[data-route]");
    links.forEach((link) => {
      const isActive = link.getAttribute("data-route") === pathname;
      const li = link.closest("li");
      const img = link.querySelector("img");
      if (li) {
        if (isActive) {
          li.classList.add("bg-purple-500", "text-white");
          img?.classList.add("brightness-200");
        } else {
          li.classList.remove("bg-purple-500", "text-white");
          img?.classList.remove("brightness-200");
        }
      }
    });
  }, [pathname]);

  return null;
}
