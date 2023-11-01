import React from 'react'

import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill,BsInstagram,BsTwitter } from "react-icons/bs";

const SocialLinks = () => {
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed ">
        <ul >
            <li className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 font-bold border-black bg-violet-900" 
              
            }>
                <a href="https://instagram.com/" className="flex justify-between items-center w-full text-white"
              
              target="_blank"
              rel="noreferrer">
                    <>
                    Instagram <BsInstagram size ={30}/>
                </>
                </a>
            </li>
            <li className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 font-bold bg-cyan-200" 
              
            }>
                <a href="https://twitter.com/" className="flex justify-between items-center w-full text-gray-600"
              
              target="_blank"
              rel="noreferrer">
                    <>
                    Twitter <BsTwitter size ={30}/>
                </>
                </a>
            </li>
            <li className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 font-bold bg-cyan-200" 
              
            }>
                <a href="mailto:ritiknarhe.com" className="flex justify-between items-center w-full text-gray-600"
              
              target="_blank"
              rel="noreferrer">
                    <>
                    Mail <HiOutlineMail size ={30}/>
                </>
                </a>
            </li>
            <li className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 font-bold bg-cyan-200" 
              
            }>
                <a href="/dog.pdf" className="flex justify-between items-center w-full text-gray-600 : "
                  download={true}
              target="_blank"
              rel="noreferrer">
                    <>
                    Template <BsFillPersonLinesFill size ={30}/>
                </>
                </a>
            </li>
            
        </ul>
    </div>
  )
}

export default SocialLinks