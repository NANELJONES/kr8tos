"use client";
import React from "react";

import Link from "next/link";

// import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faInstagramSquare,
//   faFacebook,
// } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bg-[#121212] text-[white] w-full font-Montserrat text-white flex flex-col items-center mt-[5vw]  py-[4vw] 2xl:py-[50px]">
      <h1 className=" text-white text-[7vw] md:text-[3.5vw] xl:text-[3vw]  leading-[85%]   font-regular 2xl:text-[30px]">
        {" "}
        FOLLOW US ON OUR{" "}
      </h1>
      <h1 className=" text-white text-[6vw] md:text-[3.5vw] xl:text-[3vw]  leading-[85%]   font-regular 2xl:text-[30px]">
        {" "}
        SOCIALS
      </h1>

      <p className="text-center text-[3vw] leading-[5vw] md:leading-[2.5vw] md:w-[80%]   md:text-[1vw]   w-[100%]  md:text-center leading-[4vw] 2xl:text-[15px] 2xl:leading-[1em]  mt-[2em] ">
        Interact with us and follow us on all Social Media Platforms
      </p>
      <br />
      <div className=" w-full flex-wrap flex flex-col  md:flex-row items-center justify-around wrap gap-[2vw] 2xl:w-[80%] ">
        <Link
          href={"mailto:officiallykr8tos@gmail.com"}
          className="w-[50%] md:w-auto"
        >
          <span className="flex items-center flex-col md:flex-row  border-b-[0.5px] md:border-b-[0px]   md:border-l-[3px] gap-[10px] px-[1vw] py-[2vw] md:py-[0px] ">
            {/* <FontAwesomeIcon
              icon={faEnvelope}
              size="1x"
              className="border rounded-full p-[0.5em]"
            /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z"
              />
            </svg>
            <p className="text-[3vw] md:text-[1.5vw] lg:text-[1.1vw] 2xl:text-[18px] ">
              officiallykr8tos@gmail.com{" "}
            </p>
          </span>
        </Link>

        {/* <Link href="tel:+233556600427" className="w-[50%] md:w-auto">
          <span className="flex items-center flex-col md:flex-row   border-b-[0.5px] md:border-b-[0px]   md:border-l-[3px] gap-[10px] px-[1vw] py-[2vw] md:py-[0px]  ">
            <FontAwesomeIcon
              icon={faPhone}
              size="1x"
              className="border rounded-full p-[0.5em]"
            />
            <p className="text-[3vw] md:text-[1vw] 2xl:text-[18px]">
              +233556600427
            </p>
          </span>
        </Link> */}

        <Link
          href={"https://gh.linkedin.com/in/kr8tos-central-b9b07a299"}
          className="w-[50%] md:w-auto"
        >
          <span className="flex items-center flex-col md:flex-row   border-b-[0.5px] md:border-b-[0px]   md:border-l-[3px] gap-[10px] px-[1vw] py-[2vw] md:py-[0px]  ">
            {/* <FontAwesomeIcon
              icon={faFacebook}
              size="1x"
              className="border rounded-full p-[0.5em]"
            /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
              />
            </svg>
            <p className="text-[3vw] md:text-[1.5vw] lg:text-[1.1vw] 2xl:text-[18px] ">
              Kr8tos Central{" "}
            </p>
          </span>
        </Link>

        <Link
          className="w-[50%] md:w-auto"
          href={"https://www.instagram.com/kr8tos_official/?hl=en"}
        >
          <span className="flex items-center flex-col md:flex-row   border-b-[0.5px] md:border-b-[0px]   md:border-l-[3px] gap-[10px] px-[1vw] py-[2vw] md:py-[0px] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
              />
            </svg>
            {/* <FontAwesomeIcon
              icon={faInstagramSquare}
              size="1x"
              className="border rounded-full p-[0.5em]"
            /> */}
            <p className="text-[3vw] md:text-[1.5vw] lg:text-[1.1vw] 2xl:text-[18px] ">
              @kr8tos_official{" "}
            </p>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
