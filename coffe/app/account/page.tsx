"use client";
import { auth, getAuth } from "@clerk/nextjs/server";
import next from "next";
import Image from "next/image";
import { Router } from "next/router";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { UserProfile } from "@clerk/clerk-react";
import { FaCoffee } from "react-icons/fa";
import OrderHistory from "../order/OrderHistory";

const AccountPage = () => {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/sign-up");
    }
  }, [user, router]);

  const CustomPage = () => {
    return (
      <div>
        <h1 className="text-xl font-bold text-center mb-5">
          Your coffe order history
        </h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    );
  };

  return (
    <section>
      <div className="container">
        <div className="mt-12 flex justify-center">
          {user ? (
            <UserProfile>
              <UserProfile.Page
                label="Order History"
                labelIcon={<FaCoffee />}
                url="custom-page"
              >
                <OrderHistory />
              </UserProfile.Page>
            </UserProfile>
          ) : (
            "You are not logged in"
          )}
        </div>
      </div>
    </section>
  );
};

export default AccountPage;
