import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { SidebarAuth } from "./SidebarAuth";
import { SidebarLinkHighlighter } from "./SidebarLinkHighlighter";

/**
 * Server-rendered sidebar so it appears with the first paint.
 * Only the auth block (UserButton / Login) and active-link highlighting run on the client.
 */
export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className="sidebar-logo">
          <Image
            src="/assets/images/shadecraft-logo.png"
            alt="logo"
            width={180}
            height={28}
            priority
          />
        </Link>

        <nav className="sidebar-nav">
          <ul className="sidebar-nav_elements">
            {navLinks.slice(0, 6).map((link) => (
              <li key={link.route} className="sidebar-nav_element group text-gray-700">
                <Link className="sidebar-link" href={link.route} data-route={link.route}>
                  <Image src={link.icon} alt="" width={24} height={24} />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="sidebar-nav_elements">
            {navLinks.slice(6).map((link) => (
              <li key={link.route} className="sidebar-nav_element group text-gray-700">
                <Link className="sidebar-link" href={link.route} data-route={link.route}>
                  <Image src={link.icon} alt="" width={24} height={24} />
                  {link.label}
                </Link>
              </li>
            ))}
            <SidebarAuth />
          </ul>
          <SidebarLinkHighlighter />
        </nav>
      </div>
    </aside>
  );
}
