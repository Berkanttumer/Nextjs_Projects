import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";

const Footer = () => {
  return (
    <footer className="text-white  ">
      <div className="bg-secondaryText bg-cover bg-no-repeat p-8">
        <div className="container ">
          <div className="footer-wrapper mt-6 grid md:grid-cols-2  p-3 gap-3 md:gap-6 ">
            <div>
              <div className="flex flex-col gap-5 max-w-[600px]">
                <h3 className="text-3xl font-bold font-pacifico">Coffe</h3>
                <p className="text-sm">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Iusto tempore ea, illo cumque corporis expedita nulla numquam
                </p>
              </div>
            </div>
            <div className="flex justify-between">
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
            </div>
            <div className="social-links mt-8">
              <div className="flex gap-5">
                <FaLinkedin className="text-2xl hover:text-gray-500 hover:cursor-pointer" />
                <FaInstagram className="text-2xl hover:text-gray-500 hover:cursor-pointer" />
                <FaTwitter className="text-2xl hover:text-gray-500 hover:cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
