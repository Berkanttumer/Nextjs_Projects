"use client";
import React, { useEffect } from "react";
import { AccordionDemo } from "./AccordionDemo";
import { useTheme } from "next-themes";

const AboutPage = () => {
  const { theme, setTheme } = useTheme();

  return (
    <section>
      <div className="container font-sriracha">
        <div className="mt-12">About</div>
        <div className="">
          <h3 className="text-2xl font-bold text-center">FAQ</h3>

          <AccordionDemo />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
