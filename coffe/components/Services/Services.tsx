import React from "react";
import ServicesList from "./ServicesList";
import ServicesItem from "./ServicesItem";

const Services = () => {
  return (
    <section className="py-10">
      <div className="container ">
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl text-center font-sriracha font-bold">
            Best Coffe For You
          </h1>
          <div className="flex justify-center mt-2">
            <div className="w-full bg-gradient-to-r opacity-50 from-primaryText to-secondaryText h-1 max-w-xl"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mt-20">
          {ServicesList.map((item) => (
            <ServicesItem
              aosDelay={item.aosDelay}
              description={item.description}
              id={item.id.toFixed()}
              img={item.img}
              name={item.name}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
