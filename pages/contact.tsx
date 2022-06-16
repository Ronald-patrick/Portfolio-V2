import React from 'react'
import { NextPage } from "next";
import Head from "next/head";
const Contact : NextPage = () => {
  return (
    <div className="text-white font-pop h-full min-h-[100vh]">
      <Head>
        <title>Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="p-4 max-w-7xl mx-auto">
        <h1 className="text-center text-4xl font-bold mt-5">Contact</h1>
        <div className="text-txt text-center text-xl mt-5">
          Want to get in touch ?
          <div className="flex flex-col justify-center items-center mt-7 gap-5">
              <a target="__blank" href='https://www.linkedin.com/in/ronaldpatrick11/' className='text-2xl flex justify-center rounded-lg items-center w-60 h-20 border-2 bg-blue-600 text-white text-center'>LinkedIn</a>
              <a target="__blank" href='https://github.com/Ronald-patrick' className='text-2xl flex justify-center rounded-lg items-center w-60 h-20 border-2 bg-gray-800 text-white text-center'>Github</a>
              <a target="__blank" href='mailto: ronald.patrick1101@gmail.com' className='text-2xl flex justify-center rounded-lg items-center w-60 h-20 border-2 bg-red-600 text-white text-center'>Email</a>
          </div>
        </div>
      </div>

      </div>
  )
}

export default Contact