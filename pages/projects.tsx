import React, { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import { NextPage } from "next";
import { data } from "../components/data"
import { BadgeCheckIcon } from "@heroicons/react/solid";

type userdata = {
  type: string,
  title: string,
  desc: string,
  tags: string[],
  links: {
      web: string | null,
      gh: string | null
  }
}[];

const Projects: NextPage = () => {

  const [filterq, setFilter] = useState<string>("all");

  const [userdata, setData] = useState<userdata>(data);

  useEffect(() => {

  }, [filterq])
  
  const sortData = (e: any) => {
    const query:string = e.target.id;
    if (query == filterq) return;
    else {
      setFilter(query);
      console.log(query);
    }
    if(query == "all")
    setData(data);
    else
    setData(data.filter((fl)=>{
      return fl.type === query;
    }))

  };
  return (
    <div className="text-white font-pop h-full min-h-[100vh]">
      <Head>
        <title>Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="p-4 max-w-7xl mx-auto">
        <h1 className="text-center text-4xl font-bold mt-5 flex justify-center items-center">Projects <BadgeCheckIcon className="w-7 ml-3 h-7 text-primary"/> </h1>
        <div className="text-txt text-center text-xl mt-5">
          Here are some projects that I've recently worked on.
        </div>

        <div className="flex justify-center mt-7 gap-5">
          <button
            id="all"
            onClick={sortData}
            className={`btn ${filterq === "all" && "active" }`}
          >
            All
          </button>
          <button
            id="web"
            onClick={sortData}
            className={`btn ${filterq === "web" && "active"}`}
          >
            Web Dev
          </button>
          <button
            id="app"
            onClick={sortData}
            className={`btn ${filterq === "app" && "active"}`}
          >
            App Dev
          </button>
        </div>
        <div className="flex flex-wrap gap-6 justify-center pt-10">

          {/* Start Card */}

          {
            userdata.map((proj)=>(
              <div className="w-[500px] h-[500px] md:h-[400px]  border-2 border-gray-600 rounded-xl overflow-hidden">
              <div className="text-center flex justify-center items-center h-20 bg-white text-secondary text-2xl font-bold">
                {proj.title}
              </div>
  
              <div className="flex flex-wrap justify-center items-center mt-4 h-20 gap-3">
                {proj.tags.map((tag)=>{
                  return (<div className="border-2 border-primary px-4 py-1 rounded-full">
                  {tag}
                </div>)
                })}
              </div>
              {/* Description */}
              <div className="p-4 text-txt h-60 md:h-40 whitespace-pre-line">
                {proj.desc}
              </div>
  
              <div className="flex justify-center items-center gap-5">
                {((proj.links.web!= null)) && <a target="__blank" href={proj.links.web} className="border-2 p-2 text-lg">Visit site</a> }
                {proj.links.gh!= null && <a target="__blank" href={proj.links.gh} className="bg-white font-semibold text-secondary p-2 text-lg">
                  View Code
                </a>}
              </div>
            </div>
            ))
          }


        
        {/* End card */}

        </div>
      </div>
    </div>
  );
};

export default Projects;
