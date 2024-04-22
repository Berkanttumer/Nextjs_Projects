"use client";
import { useTheme } from "next-themes";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo() {
  const { theme, setTheme } = useTheme();
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          What is the difference between Arabica and Robusta coffee beans?
        </AccordionTrigger>
        <AccordionContent>
          Arabica beans tend to have a sweeter, softer taste, with tones of
          sugar, fruit, and berries. Their acidity is higher, with that winey
          taste that characterizes coffee with excellent acidity. Robusta,
          however, has a stronger, harsher taste, with a grain-like overtone and
          peanutty aftertaste.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How should I store my coffee?</AccordionTrigger>
        <AccordionContent>
          Coffee should be stored in a cool, dry place. Avoid exposure to light,
          heat, and moisture. Its best to store coffee in an airtight container.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          What is the best way to brew coffee?
        </AccordionTrigger>
        <AccordionContent>
          The best way to brew coffee depends on your personal preference. Some
          people prefer the French press method, while others prefer using a
          coffee maker or espresso machine. Experiment with different methods to
          find the one that suits your taste..
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
          What is the best way to brew coffee?
        </AccordionTrigger>
        <AccordionContent>
          The best way to brew coffee depends on your personal preference. Some
          people prefer the French press method, while others prefer using a
          coffee maker or espresso machine. Experiment with different methods to
          find the one that suits your taste..
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>
          What is the best way to brew coffee?
        </AccordionTrigger>
        <AccordionContent>
          The best way to brew coffee depends on your personal preference. Some
          people prefer the French press method, while others prefer using a
          coffee maker or espresso machine. Experiment with different methods to
          find the one that suits your taste..
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
