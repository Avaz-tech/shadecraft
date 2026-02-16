"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "../ui/button";

/**
 * Client-only block: UserButton when signed in, Login when signed out.
 * Keeps Clerk out of the critical path for the rest of the sidebar.
 */
export function SidebarAuth() {
  return (
    <>
      <SignedIn>
        <li className="flex-center cursor-pointer gap-2 p-4">
          <UserButton afterSwitchSessionUrl="/" showName />
        </li>
      </SignedIn>
      <SignedOut>
        <li>
          <Button asChild className="button bg-purple-500 bg-cover">
            <Link href="/sign-in">Login</Link>
          </Button>
        </li>
      </SignedOut>
    </>
  );
}
