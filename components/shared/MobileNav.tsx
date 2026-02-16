"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { navLinks } from "@/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { NavLinks } from "./NavLinks";

export default function MobileNav() {
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <header className="header">
      <Link href="/" className="flex items-center gap-2 md:p-2">
        <Image src="/assets/images/shadecraft-logo.png" alt="logo" width={180} height={28} priority />
      </Link>

      <nav className="flex gap-2">
        <SignedIn>
          <UserButton afterSwitchSessionUrl="/" />

          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger>
              <Image src="/assets/icons/menu.svg" alt="menu" width={32} height={32} className="cursor-pointer" />
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64" aria-describedby={undefined}>
              <SheetTitle>
                <Image src="/assets/images/shadecraft-logo.png" alt="logo" width={152} height={23} />
              </SheetTitle>
              <NavLinks
                links={navLinks}
                className="header-nav_elements"
                linkClassName="sidebar-link cursor-pointer"
                activeClassName="gradient-text"
                activeIconClassName="opacity-100"
                itemClassName="p-18 flex whitespace-nowrap text-dark-700"
                onLinkClick={() => setSheetOpen(false)}
              />
            </SheetContent>
          </Sheet>
        </SignedIn>

        <SignedOut>
          <Button asChild className="button bg-purple-500 bg-cover">
            <Link href="/sign-in">Login</Link>
          </Button>
        </SignedOut>
      </nav>
    </header>
  );
}
