"use client";
import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "postcss";
import { useUser } from "@clerk/nextjs";

const OrderPage = () => {
  const { user } = useUser();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [adress, setAdress] = useState("");
  const [selectedCoffee, setSelectedCoffee] = useState("");
  console.log(email);
  useEffect(() => {
    if (user?.primaryEmailAddress) {
      setEmail(user.primaryEmailAddress.emailAddress);
    }
  }, [user]);
  return (
    <section className="mt-12 font-sriracha">
      <h1 className="text-3xl text-center font-bold mb-6">Order</h1>
      <div className="container flex justify-center">
        <div className="flex items-center justify-center border rounded-xl w-[600px] ">
          <form action="" className=" ">
            <div className="flex flex-col gap-5 mt-12">
              <div className="flex gap-3 flex-col">
                <label>E-Mail</label>
                <input
                  type="email"
                  className="rounded-xl px-3 py-1 w-[250px]"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="flex gap-3 flex-col">
                <label>Telephone :</label>
                <input
                  type="tel"
                  className="rounded-xl px-3 py-1 w-[250px]"
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
              <div className="flex flex-col gap-2   md:w-full">
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
                className="bg-secondaryText px-6 py-2 rounded-full hover:opacity-75 transition  md:w-full mb-6"
              >
                Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default OrderPage;
