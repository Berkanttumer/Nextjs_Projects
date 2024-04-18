import Image from "next/image";
import React from "react";
import ServicesCart from "./ServicesCart";
import ServicesList from "./ServicesList";

const ServicesPage = () => {
  return (
    <section>
      <div className="container">
        <div className="mt-12 font-sriracha">
          <h1 className="text-center font-bold text-4xl mb-12">Our Services</h1>
          <div className="services-carts gap-12  ">
            {ServicesList.map((item) => (
              <ServicesCart
                aosDelay={item.Delay}
                id={item.id.toString()}
                img={item.img}
                name={item.name}
                key={item.id}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
