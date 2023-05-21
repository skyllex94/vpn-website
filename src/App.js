import * as React from "react";
import { Link } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <div className="relative bg-white pt-40 pb-20 dark:bg-gray-900 lg:pt-44">
        <div className="relative m-auto px-6 xl:container md:px-12 lg:px-6">
          <h1 className="text-center text-4xl font-black text-red-900 sm:mx-auto sm:w-10/12 sm:text-5xl md:w-2/3 md:text-6xl lg:w-auto lg:text-left xl:text-7xl">
            Our best-class secure VPN App
            <br className="hidden lg:block" />
            <span className="relative bg-gradient-to-b from-red-700 to-orange-500 bg-clip-text text-transparent dark:from-red-400 dark:to-red-300">
              Try our timeblock & categorization to-do list
            </span>
            .
          </h1>
          <div className="lg:flex">
            <div className="relative mt-8 space-y-8 text-center sm:mx-auto sm:w-10/12 md:mt-16 md:w-2/3 lg:ml-0 lg:mr-auto lg:w-7/12 lg:text-left">
              <p className="text-gray-700 dark:text-gray-300 sm:text-lg lg:w-9/12">
                The most effective way to get things done is <b>focusing</b> on
                single tasks, that's why time blocking works. When you pair this
                with putting category on what you want to focus and place your
                task inside, you will be able to further improve your efficiency
                and productivity. Separate your day in singular categories and
                tackle them at a set time frame <b>completely for free.</b>
              </p>
              <span className="block font-semibold text-gray-500 dark:text-gray-400">
                Your daily companion when you want to get sh*t done.
              </span>
              <div className="grid gap-2 md:flex md:justify-center md:space-x-6 lg:justify-start">
                <div className="flex justify-center space-x-3 ">
                  <button className="font-medium dark:text-white md:block">
                    Get started
                  </button>
                </div>

                <div className="flex justify-center space-x-4">
                  <button className="font-medium dark:text-white md:block border-2">
                    Create an Account
                  </button>
                </div>
              </div>

              <div className="font-semibold  dark:text-gray-300">
                🔥🌟
                <span className="pl-2">
                  Personalize your categories and containerize your talks
                </span>
              </div>
            </div>
            <div className="-right-10 mt-12 md:mt-0 lg:absolute lg:w-7/12">
              <div className="relative w-full">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 m-auto h-full w-full rotate-45 scale-75 rounded-full bg-gradient-to-r 
                  from-red-500 to-orange-300 blur-3xl md:h-96 md:w-96 md:scale-110"
                />
                <img
                  // src={landingImage}
                  className="relative mt-6 w-full"
                  alt="wath illustration"
                  loading="lazy"
                  width="320"
                  height="280"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
