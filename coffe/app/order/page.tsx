"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "postcss";

const OrderPage = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [adress, setAdress] = useState("");
  const [selectedCoffee, setSelectedCoffee] = useState("");
  console.log(phone);

  return (
    <section className="mt-12 font-sriracha ">
      <div className="container ">
        <h1 className="text-3xl text-center font-bold">Order</h1>
        <form action="" className="w-[800px]">
          <div className="flex flex-col gap-5 mt-12">
            <div className="flex gap-3 flex-col">
              <label>E-Mail</label>
              <input
                type="email"
                className="rounded-xl px-3 py-1 w-[200px]"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex gap-3 flex-col">
              <label>Telephone :</label>
              <input
                type="tel"
                className="rounded-xl px-3 py-1 w-[200px]"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <label>Select your coffe :</label>
            <div>
              <RadioGroup onValueChange={(value) => setSelectedCoffee(value)}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Expresso" id="r1" />
                  <Label htmlFor="r1">Expresso</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Cappicuno" id="r2" />
                  <Label htmlFor="r2">Cappicuno</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Americano" id="r3" />
                  <Label htmlFor="r3">Americano</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Latte" id="r4" />
                  <Label htmlFor="r4">Latte</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="flex flex-col gap-2  w-1/2 md:w-full">
              <label>Adress :</label>
              <textarea
                rows={5}
                cols={50}
                className="p-6 bg-gray-300 text-black"
                onChange={(e) => setAdress(e.target.value)}
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-secondaryText px-6 py-2 rounded-full hover:opacity-75 transition w-1/2 md:w-full"
            >
              Order
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default OrderPage;
