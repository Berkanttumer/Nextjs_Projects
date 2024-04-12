"use client";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
}
