"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Menu } from "./Menus";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import OrderButton from "../Button/OrderButton";
import { FaCoffee } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { ModeToggle } from "../DarkMode";
import { UserButton, useUser } from "@clerk/nextjs";

const Navbar = () => {
  const { user } = useUser();
  return (
    <div className="bg-secondaryText shadow-lg text-lightText">
      <div className="container py-3">
        <div className="navbar-links flex items-center justify-between">
          <div
            className="font-pacifico text-3xl flex gap-3 items-center font-bold"
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="200"
          >
            <Image src="/favicon.ico" alt="logo" width={50} height={50} />
            <Link href="/">Coffe</Link>
          </div>
          <div className="mobile-menu lg:hidden">
            <Sheet>
              <SheetTrigger>
                <Image
                  src="/images/burger-menu.svg"
                  alt="logo"
                  height={30}
                  width={30}
                ></Image>
              </SheetTrigger>
              <SheetContent className="w-72 bg-brandDark border-none ">
                <SheetHeader>
                  <SheetDescription className="text-white">
                    <ul className="flex gap-12 text-2xl flex-col p-12 ">
                      {Menu.map((item) => {
                        return (
                          <li key={item.id}>
                            <Link href={item.link}>{item.title}</Link>
                          </li>
                        );
                      })}
                      <li>
                        <Link
                          href="/account"
                          className="flex justify-center sm:hidden gap-3 items-center"
                        >
                          <CgProfile className="text-2xl" />
                          Account
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/order"
                          className="flex justify-center sm:hidden gap-3 items-center"
                        >
                          <FaCoffee />
                          Order
                        </Link>
                      </li>
                    </ul>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
          <div
            className="menu-list hidden lg:flex"
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="300"
          >
            <ul className="flex gap-8 text-xl">
              {Menu.map((item) => {
                return (
                  <li key={item.id}>
                    <Link href={item.link}>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="400"
            className="flex justify-center items-center gap-5"
          >
            <div>
              <ModeToggle />
            </div>
            <Link
              href="/account"
              className="hidden sm:flex items-center justify-center gap-2 hover:opacity-55 "
            >
              {user ? (
                <div className="userbutton flex items-center">
                  <UserButton userProfileUrl="/account" showName />
                </div>
              ) : (
                <CgProfile className="text-2xl" />
              )}
            </Link>

            <Link href="/order" className="hidden sm:block">
              <OrderButton
                icon={FaCoffee}
                label="Order"
                onclick={() => {}}
              ></OrderButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
