"use client";
import Banner from "@/components/Banner/Banner";
import BannerMobile from "@/components/Banner/BannerMobile";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Services from "@/components/Services/Services";
import Testimonials from "@/components/Testimonials/Testimonials";
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
    <div className="app">
      <Hero />
      <Services />
      <Banner />
      <BannerMobile />
      <Testimonials />
    </div>
  );
}
