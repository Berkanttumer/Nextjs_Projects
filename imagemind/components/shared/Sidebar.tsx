"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { navLinks } from "@/app/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { User } from "lucide-react";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="hidden p-5 w-72 h-screen bg-white shadow-md shadow-purple-200 lg:flex">
      <div className="flex flex-col">
        <Link href="/">
          <Image
            alt="logo"
            src="/assets/images/logo-text.svg"
            width={180}
            height={30}
          />
        </Link>
        <nav className="sidebar-navbar">
          <SignedIn>
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
                      className="sidebar-link flex gap-5 rounded-full"
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

              <li className="cursor-pointer p-4 ">
                <UserButton afterSignOutUrl="//" showName />
              </li>
            </ul>
          </SignedIn>
          <SignedOut>
            <Button asChild className="bg-purple-700 bg-cover ">
              <Link href="/sign-in">Sign in</Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
