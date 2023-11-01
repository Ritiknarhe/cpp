import React from "react";

import NavBar from "./NavBar";
import { BsInstagram, BsTwitter } from "react-icons/bs";

import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  return (
    <div className="w-full h-screen flex items-start">
      <NavBar />
      <div className="relative w-1/2 h-full flex flex-col ">
        <img
          src='https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg?w=1380&t=st=1692522530~exp=1692523130~hmac=471fff061f077f2a85b6a39bb2535e71c08fd3366a3ac3753c7c12cecf112505'
          className=" mt-40  w-full h-full font-cover"
          alt="dog"
        />
      </div>
      <div className="w-1/2 h-full bg-white flex flex-col p-20 justify-between ">
        <div className="w-full flex flex-col max-w-[550px]">
          <div className="w-full flex flex-col mb-10">
            <h3 className="text-3xl font-semibold mb-2 mt-10  ">Sign Up</h3>
            
          </div>
          <div className="w-full flex flex-col">
            <span class="after:content-['*']  after:ml-0.5 after:text-red-500 block font-semibold text-slate-950">
              Email
            </span>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full text-black py-2 my-4 bg-transparent border-b border-black outline-none focus:outline-none peer after:content-['*'] after:ml-0.5 after:text-red-500 "
            />
            <p class="invisible peer-invalid:visible text-pink-600 text-sm">
              Please provide a valid email address.
            </p>
            <span class="after:content-['*'] after:ml-0.5 after:text-red-700 font-semibold block text-sm font-large text-slate-700">
              Password
            </span>

            <input
              type="password"
              placeholder="Password"
              className="w-full text-black py-2 my-4 bg-transparent border-b border-black outline-none focus:outline-none"
            />
            <span class="after:content-['*'] after:ml-0.5 after:text-red-700 font-semibold block text-sm font-large text-slate-700">
              Confirm Password
            </span>

            <input
              type="password"
              placeholder="Re-Enter Password"
              className="w-full text-black py-2 my-4 bg-transparent border-b border-black outline-none focus:outline-none"
            />
          </div>
          <div className="w-full flex items-center justify-between "></div>
        </div>

        <div className="full flex flex-col">
          <button className="full bg-cyan-400 rounded-md p-4 text-center flex items-center justify-center font-semibold text-black mt-2">
            Sign Up
          </button>
        </div>
        <div className="w-full flex items-center justify-center mt-3">
          <p className="text-sm font-normal text-black ">
            Have an account already? 
            
            <a href="/login"  >
            <span className="font-semibold underline inderline-off ml-1">
              Login

            </span>
            </a>
          </p>
        </div>
        <div className="w-full flex items-center justify-center relative py-2">
          <div className=" mt-2 w-full h-[1px] bg-gray-500 "></div>
          <p className="  mt-3 mb-1 text-lg  absolute text-black/80 bg-white  ">
            or
          </p>
        </div>
        <div className=" flex ,">
          <button className=" bg-white border  border-black rounded-md p-4  flex items-center  font-semibold text-black mt-2 ml-24 ">
            <span className="mr-2">
              <FcGoogle size={25} className="ml-1" />
            </span>
            Google
          </button>
          <button className=" bg-white border  border-black rounded-md p-4  flex items-center  font-semibold text-black mt-2 ml-2">
            <span className="mr-2">
              <BsTwitter size={25} className="ml-1" />
            </span>
            Twitter
          </button>
          <button className=" bg-white border  border-black rounded-md p-4  flex items-center  font-semibold text-black mt-2 ml-2">
            <span className="mr-2">
              <BsInstagram size={25} className="ml-1" />
            </span>
            Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
