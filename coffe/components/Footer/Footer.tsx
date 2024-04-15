import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";

const Footer = () => {
  return (
    <section className="mt-12  text-white ">
      <div className="bg-secondaryText bg-cover bg-no-repeat w-full h-full md:h-[300px] p-12 ">
        <div className="container ">
          <div className="footer-wrapper grid md:grid-cols-5 p-12 gap-12 md:gap-12 ">
            <div>
              <div className="flex flex-col gap-5">
                <h3 className="text-3xl font-bold font-pacifico">Coffe</h3>
                <p className="text-sm">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Iusto tempore ea, illo cumque corporis expedita nulla numquam
                </p>
              </div>
            </div>
            <div>
              <div>
                <h5>Important Links</h5>
              </div>
              <div>
                <ul>
                  <li>
                    <a href="#">Lorem1</a>
                  </li>
                  <li>
                    <a href="#">Lorem1</a>
                  </li>
                  <li>
                    <a href="#">Lorem1</a>
                  </li>
                  <li>
                    <a href="#">Lorem1</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div>
                <h5>Quick Links</h5>
              </div>
              <div>
                <ul>
                  <li>
                    <a href="#">Lorem1</a>
                  </li>
                  <li>
                    <a href="#">Lorem1</a>
                  </li>
                  <li>
                    <a href="#">Lorem1</a>
                  </li>
                  <li>
                    <a href="#">Lorem1</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div>
                <h5>Adress</h5>
              </div>
              <div>
                <ul>
                  <li>
                    <a href="#">Lorem1</a>
                  </li>
                  <li>
                    <a href="#">Lorem1</a>
                  </li>
                  <li>
                    <a href="#">Lorem1</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="social-links">
              <div className="flex gap-5">
                <FaLinkedin className="text-2xl hover:text-gray-500 hover:cursor-pointer" />
                <FaInstagram className="text-2xl hover:text-gray-500 hover:cursor-pointer" />
                <FaTwitter className="text-2xl hover:text-gray-500 hover:cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
