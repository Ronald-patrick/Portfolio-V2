import type { NextPage } from "next";
import { useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import { ArrowSmDownIcon, DesktopComputerIcon } from "@heroicons/react/outline";

import { CubeIcon } from "@heroicons/react/solid";

import Typed from "typed.js";

const Home: NextPage = () => {
  const el: any = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["JavaScript", "M E R N", "NextJS", "Flutter", "Android"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 500,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 500,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  const scroll = () => {
    const section: any = document.getElementById("about");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-gradient-to-b from-[#141E30] to-secondary text-white font-pop h-full">
      <Head>
        <title>Ronald Patrick</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex flex-col md:flex-row justify-start md:justify-around p-4 max-w-7xl mx-auto items-center h-[85vh] relative">
        <img
          src="./self.png"
          alt=""
          className="w-[200px] md:w-[280px] object-contain cursor-pointer border-4 border-white rounded-full"
        />
        <div className="text-txt text-center">
          <h1 className="text-[30px] md:text-[45px] border-spacing-3 mt-10">
            Hi, I'm{" "}
            <span className="text-[30px] md:text-[60px] text-primary font-extrabold">
              Ronald Patrick{" "}
              <span className="right-1 invisible md:visible animate-bounce absolute rounded-full">
                👋
              </span>
            </span>
          </h1>

          <div className="text-xl md:text-3xl pt-7 flex justify-center items-center">
            {" "}
            Final Year CSE Undergrad{" "}
            <span className="md:text-5xl pl-4">
              <DesktopComputerIcon className="w-12 h-12" />
            </span>{" "}
          </div>
          <div className="text-xl md:text-3xl pt-7">
            Building Apps in <span ref={el}></span> ⚡
          </div>
        </div>

        <h1 className="absolute right-50 bottom-0 animate-bounce">
          <ArrowSmDownIcon
            onClick={scroll}
            className="text-white w-10 h-10 cursor-pointer"
          />
        </h1>
      </div>

      <div
        className="flex flex-col mt-10 justify-center p-4 max-w-7xl mx-auto items-center h-[100vh]"
        id="about"
      >
        <h1 className="text-2xl md:text-4xl text-primary nmb">Who am I ?</h1>
        <div className="border-t-2 w-20 h-2 mt-2 mb-10 border-primary"></div>

        <div className="text-md md:text-2xl mt-5 text-txt ">
          <li className="flex items-center">
            <CubeIcon className="hidden md:flex w-7 h-7 mr-5 " />
            Hello, I am Ronald Patrick, a CSE undergrad and Software developer.
            <br />
          </li>
          <br />
          <li className="flex items-center">
            <CubeIcon className="hidden md:flex w-7 h-7 mr-5 " />
            Final year computer science student @ Fr. Conceicao Rodrigues
            College of Engineering (Mumbai).
            <br />
          </li>
          <br />
          <li className="flex items-center">
            <CubeIcon className="hidden md:flex w-7 h-7 mr-5 " />
            I am deeply passionate about software development.
            <br />
          </li>
          <br />
          <li className="flex items-center">
            <CubeIcon className="hidden md:flex w-7 h-7 mr-5" />
            Love spending time learning and building web applications and trying
            out different tech stack. <br />
          </li>

          <br />
          <li className="flex items-center">
            <CubeIcon className="hidden md:flex w-7 h-7 mr-5" />
            My core interest lies mainly in System Design but not
            restricted to it. <br />
          </li>
          
          <br />
          <li className="flex items-center">
            <CubeIcon className="hidden md:flex w-7 h-7 mr-5" />
             I always love exploring and learning new technologies{" "}
          </li>
        </div>
      </div>
    </div>
  );
};

export default Home;
