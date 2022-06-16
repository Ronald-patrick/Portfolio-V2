import React, { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import { NextPage } from "next";

const Projects: NextPage = () => {
  const [filter, setFilter] = useState("all");
  const sortData = (e: any) => {
    const query = e.target.id;
    if (query == filter) return;
    else {
      setFilter(query);
      console.log(query);
    }
  };
  return (
    <div className="bg-gradient-to-b from-[#141E30] to-secondary text-white font-pop h-full">
      <Head>
        <title>Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="p-4 max-w-7xl mx-auto h-[100vh]">
        <h1 className="text-center text-4xl font-bold mt-5">Projects</h1>
        <div className="text-txt text-center text-xl mt-5">
          Here are some side projects that I've recently worked on.
        </div>

        <div className="flex justify-center mt-7 gap-5">
          <button
            id="all"
            onClick={sortData}
            className={`btn ${filter === "all" ? "active" : ""}`}
          >
            All
          </button>
          <button
            id="web"
            onClick={sortData}
            className={`btn ${filter === "web" ? "active" : ""}`}
          >
            Web Dev
          </button>
          <button
            id="app"
            onClick={sortData}
            className={`btn ${filter === "app" ? "active" : ""}`}
          >
            App Dev
          </button>
        </div>
        <div className="flex flex-wrap gap-6 justify-center pt-10">
          <div className="w-[500px] h-[350px] border-2 border-gray-600 rounded-xl overflow-hidden">
            <div className="flex justify-center items-center h-20 bg-white text-secondary text-2xl font-bold">
              Project Name
            </div>

            <div className="flex justify-center items-center h-20 gap-3">
              <div className="border-2 border-primary px-4 py-1 rounded-full">
                ReactJS
              </div>
              <div className="border-2 border-primary px-4 py-1 rounded-full">
                NodeJS
              </div>
            </div>
            {/* Description */}
            <div className="p-4 text-txt h-40">
              Booksify is a online book store where you can buy your favorite
              books. It is built using MERN stack and Redux with payment gateway
              integrated. It has all the major features like Admin Dashboard,
              Shopping Cart, Order etc.
            </div>

            <div className="flex justify-center items-center gap-5">
              <button className="border-2 p-2 text-lg">Visit site</button>
              <button className="bg-white font-semibold text-secondary p-2 text-lg">
                View Code
              </button>
            </div>
          </div>
          <div className="w-[500px] h-[350px] border-2 border-gray-600"></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
