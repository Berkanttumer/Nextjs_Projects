import React from "react";
import { CiClock2 } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { IoMdMail } from "react-icons/io";

const ContactPage = () => {
  return (
    <section className="mt-12 font-sriracha">
      <div className="container">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
        <div className="flex justify-between">
          <div>
            <div className="flex">
              <div>
                <ImLocation className="text-3xl opacity-50 text-orange-600" />
              </div>
              <div className="pl-4">
                <h3 className="font-bold text-2xl">Address Info</h3>
                <p className="pt-4 ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  <br />
                  sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex">
              <div>
                <FaRegClock className="text-3xl opacity-50 text-orange-600" />
              </div>
              <div className="pl-4">
                <h3 className="font-bold text-2xl">Opening Hours</h3>
                <p className="pt-4">Monday-Friday: 10am - 6pm</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex">
              <div>
                <IoMdMail className="text-3xl opacity-50 text-orange-600" />
              </div>
              <div className="pl-4">
                <h3 className="font-bold text-2xl">Contact Info</h3>
                <p className="pt-4">
                  +123 456 7890 <br />
                  info@support.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex gap-5 justify-between">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385396.3210483094!2d28.68253373686614!3d41.00537021828283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1709661161881!5m2!1str!2str"
              width="600"
              height="400"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="w-full">
            <form className="flex flex-col gap-5">
              <div>
                <input
                  type="text"
                  placeholder="Your name"
                  className="py-3 px-6 rounded-xl text-xl w-2/3"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Your name"
                  className="py-3 px-6 rounded-xl text-xl w-2/3"
                />
              </div>
              <div>
                <textarea
                  rows={5}
                  className="py-3 px-6 rounded-xl text-xl w-2/3"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button className="bg-secondaryText w-2/3 py-3 px-6 rounded-full hover:opacity-70 transition-all">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
