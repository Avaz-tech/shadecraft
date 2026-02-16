"use client";

import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinksProps = {
  links: typeof navLinks;
  className?: string;
  linkClassName?: string;
  activeClassName?: string;
  iconClassName?: string;
  /** Optional class for each <li>. If not set, uses sidebar-nav_element + active/text. */
  itemClassName?: string;
  /** When true (default), wrap items in <ul>. When false, render only <li> elements for use inside a parent ul. */
  wrapInUl?: boolean;
};

export function NavLinks({
  links,
  className = "",
  linkClassName = "sidebar-link",
  activeClassName = "bg-purple-500 text-white",
  iconClassName = "",
  itemClassName,
  wrapInUl = true,
}: NavLinksProps) {
  const pathname = usePathname();

  const items = links.map((link) => {
    const isActive = link.route === pathname;
    const liClass = itemClassName
      ? `${itemClassName} ${isActive ? activeClassName : ""}`.trim()
      : `sidebar-nav_element group ${isActive ? activeClassName : "text-gray-700"}`;
    return (
      <li key={link.route} className={liClass}>
        <Link className={linkClassName} href={link.route}>
          <Image
            src={link.icon}
            alt="navlink-icon"
            width={24}
            height={24}
            className={`${isActive ? "brightness-200" : ""} ${iconClassName}`.trim()}
          />
          {link.label}
        </Link>
      </li>
    );
  });

  if (wrapInUl) {
    return <ul className={className}>{items}</ul>;
  }
  return <>{items}</>;
}
