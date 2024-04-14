import Image from "next/image";
import React from "react";

const BannerMobile = () => {
  return (
    <section>
      <div className="bg-[url('/images/bannerMobile2.jpg')] bg-cover w-full h-[320px] bg-center bg-no-repeat p-14  ">
        <div className="container">
          <div
            className="flex items-center justify-center mt-44 pr-6 mx-32"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Image
              src="/images/play_store.png"
              alt="logo"
              width={152}
              height={152}
            />
            <Image
              src="/images/app_store.png"
              alt="logo"
              width={152}
              height={152}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerMobile;
