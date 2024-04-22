"use client";
import { useUser } from "@clerk/clerk-react";
import { set } from "mongoose";
import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Page() {
  const { user } = useUser();
  const [admin, setAdmin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (user && !user.publicMetadata.admin) {
      alert("You are not authorized to view this page");
      router.push("/");
    } else {
      setAdmin(true);
    }
  }, [user]);

  if (!admin) {
    return null;
  }

  return (
    <div>
      <h1>Admin Page</h1>
    </div>
  );
}
