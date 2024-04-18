import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";
import { GiFoodTruck } from "react-icons/gi";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";

const Banner = () => {
  const { theme, setTheme } = useTheme();
  return (
    <section>
      <div
        className={`font-sriracha ${theme === "dark" ? "bg-black" : "bg-img"}`}
      >
        <div className="container">
          <div className="py-12 grid-cols-1 md:grid-cols-2 gap-6 grid">
            <div data-aos="zoom-in">
              <Image
                src="/images/2.png"
                alt="logo"
                width={420}
                height={420}
                className="spin2 "
              />
            </div>
            <div>
              <div>
                <h3
                  className="text-4xl font-bold"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  Premium Coffe
                </h3>
                <h1
                  className="opacity-65 mt-5"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem similique officia, quaerat explicabo ea quae eum.
                  Quisquam nobis, quod facere minima veritatis aut quaerat velit
                  sed, praesentium libero iusto nam!
                </h1>
              </div>

              <div className="mt-8 grid grid-cols-2 ">
                <div className="flex flex-col gap-3">
                  <div
                    className="flex items-center"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <GrSecure className="text-3xl bg-red-300 h-12 w-12 rounded-full p-3" />
                    <span className="pl-5">Premium Coffe</span>
                  </div>
                  <div
                    className="flex items-center"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <IoFastFood className="text-3xl bg-green-300 h-12 w-12 rounded-full p-3" />
                    <span className="pl-5">Hot Coffe </span>
                  </div>
                  <div
                    className="flex items-center"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <GiFoodTruck className="text-3xl bg-blue-300 h-12 w-12 rounded-full p-3" />
                    <span className="pl-5">Cold Coffe</span>
                  </div>
                </div>
                <div
                  className="border-l-4 pl-6 border-primaryText"
                  data-aos="slide-left"
                >
                  <h1 className="text-2xl mb-2 font-bold">Tea Lover</h1>
                  <div>
                    <p className="opacity-65 text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Praesentium architecto amet eveniet qui obcaecati
                      distinctio explicabo laudantium assumenda sequi unde quas,
                      provident nemo quod! Debitis dolores ex dolor provident
                      obcaecati?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
