import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaGithub, FaLinkedin , FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" flex flex-col lg:flex-row justify-between lg:px-32 px-5 bg-white p-5">
      <div className=" flex gap-10">
        <a href="https://www.instagram.com/luigi.meneghini.dev/"  target='_blank' rel="noreferrer">
        <BsInstagram size={32} className=" hover:text-brightColor transition-all cursor-pointer" />
        </a>
      
        <a href="https://github.com/Luigi-Meneghini" target='_blank' rel="noreferrer" >
        <FaGithub size={32} className=" hover:text-brightColor transition-all cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/luigi-meneghini/" target='_blank' rel="noreferrer">
        <FaLinkedin size={32} className=" hover:text-brightColor transition-all cursor-pointer" />
        </a>
        <FaDiscord size={32} className=" hover:text-brightColor transition-all cursor-pointer" />
       
      </div>
      <div className=" flex flex-row items-center cursor-pointer mt-5 lg:mt-0">
        <h1 className=" text-3xl font-semibold">Luigi M.</h1>
      </div>
    </div>
  );
};

export default Footer;
