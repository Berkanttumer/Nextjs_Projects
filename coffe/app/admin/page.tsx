"use client";
import { useUser } from "@clerk/clerk-react";
import { set } from "mongoose";
import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";
import RootLayout from "../layout";
import { ClerkProvider } from "@clerk/nextjs";

export default function AdminPage() {
  return <div>admin page</div>;
}
