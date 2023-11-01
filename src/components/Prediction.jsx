import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

import Footer from "./Footer";

const Predictioin = () => {
  return (
    <div>
      <NavBar />
      <br />
      <br /> <br />
      <br />
      <div name="contact" className="  bg-sky-50 text-gray-950">
        <div className="flex flex-col  justify-center max-w-screen-lg mx-auto h-full">
          <div className="pb-8 text-justify">
            <h1 class="mb-4 py-10 text-4xl font-extrabold  text-gray-800 md:text-5xl lg:text-6xl dark:text-white  ">
            Find the Best Dog Breed for You! <br />
              
            </h1>

           
            <p className="py-6 mt-5 text-xl text-gray-900 text-justify dark:text-white font-medium">
            Answer a series of quick questions to help us find your best dog breed matches! We’ll ask about your preferences and needs for your new dog, and we’ll ask about your everyday lifestyle. The more questions you answer, the better matches we can make. <br /><br />
            Keep in mind that these matches are a great starting point, but we always encourage you to meet your favorite breeds in person, and talk with people who own or breed them to learn more!
</p>
          </div>
        </div>
      </div>
      
      <div name="contact" className="w-full  bg-sky-50 text-gray-950">
        <div className="flex flex-col justify-center max-w-screen-lg mx-auto h-full">
          <div className="pb-8 text-justify">
            

          <h3 class="mb-4  text-3xl font-bold text-gray-900 dark:text-white">Size</h3>
<ul class="text-2xl items-center w-full  font-semibold text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input  id="bordered-radio-1" type="radio" value="" name="bordered-radio" class=" w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="vue-checkbox-list" class= " text-xl w-full py-3 ml-2  font-semibold text-gray-900 dark:text-gray-300">Small</label>
        </div>
    </li> 
    <li class="w-full border-b  border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input  id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="react-checkbox-list" class="w-full py-3 ml-2 text-xl font-semibold text-gray-900 dark:text-gray-300">Medium</label>
        </div>
    </li>
    
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="angular-checkbox-list" class="w-full py-3 ml-2 text-xl font-semibold text-gray-900 dark:text-gray-300">Large</label>
        </div>
    </li>
    
    <li class="w-full dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input  id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="laravel-checkbox-list" class="text-xl w-full py-3 ml-2  font-semibold text-gray-900 dark:text-gray-300">No Preference</label>
        </div>
    </li>
</ul>
<br /><br />
<h3 class="mb-4  text-3xl font-bold text-gray-900 dark:text-white">Size</h3>
<ul class="text-2xl items-center w-full  font-semibold text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input  id="bordered-radio-1" type="radio" value="" name="bordered-radio" class=" w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="vue-checkbox-list" class= " text-xl w-full py-3 ml-2  font-semibold text-gray-900 dark:text-gray-300">Small</label>
        </div>
    </li> 
    <li class="w-full border-b  border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input  id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="react-checkbox-list" class="w-full py-3 ml-2 text-xl font-semibold text-gray-900 dark:text-gray-300">Medium</label>
        </div>
    </li>
    
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="angular-checkbox-list" class="w-full py-3 ml-2 text-xl font-semibold text-gray-900 dark:text-gray-300">Large</label>
        </div>
    </li>
    
    <li class="w-full dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input  id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="laravel-checkbox-list" class="text-xl w-full py-3 ml-2  font-semibold text-gray-900 dark:text-gray-300">No Preference</label>
        </div>
    </li>
</ul>
<br /><br />
<h3 class="mb-4  text-3xl font-bold text-gray-900 dark:text-white">Size</h3>
<ul class="text-2xl items-center w-full  font-semibold text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input  id="bordered-radio-1" type="radio" value="" name="bordered-radio" class=" w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="vue-checkbox-list" class= " text-xl w-full py-3 ml-2  font-semibold text-gray-900 dark:text-gray-300">Small</label>
        </div>
    </li> 
    <li class="w-full border-b  border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input  id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="react-checkbox-list" class="w-full py-3 ml-2 text-xl font-semibold text-gray-900 dark:text-gray-300">Medium</label>
        </div>
    </li>
    
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="angular-checkbox-list" class="w-full py-3 ml-2 text-xl font-semibold text-gray-900 dark:text-gray-300">Large</label>
        </div>
    </li>
    
    <li class="w-full dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input  id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="laravel-checkbox-list" class="text-xl w-full py-3 ml-2  font-semibold text-gray-900 dark:text-gray-300">No Preference</label>
        </div>
    </li>
</ul>
<br /><br />
<h3 class="mb-4  text-3xl font-bold text-gray-900 dark:text-white">Size</h3>
<ul class="text-2xl items-center w-full  font-semibold text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input  id="bordered-radio-1" type="radio" value="" name="bordered-radio" class=" w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="vue-checkbox-list" class= " text-xl w-full py-3 ml-2  font-semibold text-gray-900 dark:text-gray-300">Small</label>
        </div>
    </li> 
    <li class="w-full border-b  border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input  id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="react-checkbox-list" class="w-full py-3 ml-2 text-xl font-semibold text-gray-900 dark:text-gray-300">Medium</label>
        </div>
    </li>
    
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="angular-checkbox-list" class="w-full py-3 ml-2 text-xl font-semibold text-gray-900 dark:text-gray-300">Large</label>
        </div>
    </li>
    
    <li class="w-full dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input  id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="laravel-checkbox-list" class="text-xl w-full py-3 ml-2  font-semibold text-gray-900 dark:text-gray-300">No Preference</label>
        </div>
    </li>
</ul>


          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Predictioin;
