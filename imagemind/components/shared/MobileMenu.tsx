"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Sign } from "crypto";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/app/constants";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const MobileMenu = () => {
  const pathname = usePathname();
  return (
    <header className="shadow-md p-5 flex justify-between lg:hidden">
      <Link href="/">
        <h1 className="font-bold text-2xl pl-3">IMAGEMIND</h1>
      </Link>
      <nav className="flex gap-5 ">
        <SignedIn>
          <UserButton afterSignOutUrl="//" />
          <Sheet>
            <SheetTrigger>
              <Image
                alt="logo"
                src="/assets/icons/menu.svg"
                width={30}
                height={30}
              />
            </SheetTrigger>
            <SheetContent className="">
              <Link href="//">
                <h1 className="font-bold text-2xl pl-3">IMAGEMIND</h1>
              </Link>
              <ul>
                {navLinks.map((link) => {
                  const isActive = link.route === pathname;
                  return (
                    <li
                      key={link.route}
                      className={`hover:bg-purple-100 hover:shadow-inner bg-cover font-semibold mt-8 rounded-full p-3 ${
                        isActive ? "bg-purple-900 text-white" : "text-gray-700"
                      }`}
                    >
                      <Link
                        className=" flex gap-5 rounded-full"
                        href={link.route}
                      >
                        <Image
                          alt="logo"
                          src={link.icon}
                          width={24}
                          height={24}
                          className={`${isActive && "brightness-200"}`}
                        />
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </SheetContent>
          </Sheet>
        </SignedIn>
        <SignedOut>
          <Button asChild>
            <Link href="/sign-in">Sign In</Link>
          </Button>
        </SignedOut>
      </nav>
    </header>
  );
};

export default MobileMenu;
