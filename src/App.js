import * as React from "react";
import { Link } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";

import appStore from "./assets/app-store.png";
import mainImage from "./assets/landing-image.jpg";

function App() {
  return (
    <div>
      <div className="relative bg-white pt-40 pb-20 dark:bg-blue-900 lg:pt-44">
        <div className="relative m-auto px-6 xl:container md:px-12 lg:px-6">
          <h1 className="text-center text-4xl font-black text-blue-900 sm:mx-auto sm:w-10/12 sm:text-5xl md:w-2/3 md:text-6xl lg:w-auto lg:text-left xl:text-7xl">
            NorthVPN
            <br className="hidden lg:block" />
            <scan className="text-center text-5xl relative bg-gradient-to-b from-blue-700 to-teal-800 bg-clip-text text-transparent">
              Your Secure VPN + AdBlocker App
            </scan>
          </h1>

          <div className="lg:flex">
            <div className="relative mt-8 space-y-8 text-center sm:mx-auto sm:w-10/12 md:mt-16 md:w-2/3 lg:ml-0 lg:mr-auto lg:w-7/12 lg:text-left">
              <p className="text-gray-700 dark:text-gray-300 sm:text-lg lg:w-9/12">
                Our Virtual Private Network (VPN) is intended to give you one of
                the best state of the art, secure experience as you are doing
                your daily tasks. Privacy is a serious issue nowadays and it's
                advisable to keep all of your personal data connection secure
                and reliable.
              </p>
              <span className="block font-semibold text-gray-500 dark:text-gray-400">
                Connect quickly and efficiently to trusted server around the
                world
              </span>
              <div className="grid md:flex lg:justify-start">
                <div className="flex justify-center">
                  <span className="font-medium dark:text-white md:block"></span>
                </div>

                <div className="font-semibold dark:text-gray-300">
                  🌟
                  <span className="pl-2 ">
                    Start your FREE 3-days trial with high-speed browsing.
                  </span>
                  <a
                    href="https://apps.apple.com/us/app/vpn-secure-proxy-shield/id1459783875"
                    target="_blank"
                    rel="noreferrer"
                    className="flex space-x-4 mt-4"
                  >
                    <img
                      src={appStore}
                      alt="app-store-icon"
                      className="font-medium dark:text-white md:block h-20"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="-right-10 mt-12 md:mt-0 lg:absolute lg:w-7/12">
              <div className="relative w-full">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 m-auto h-full w-full rotate-45 scale-75 rounded-full bg-gradient-to-r 
                  from-red-500 to-orange-300 md:h-96 md:w-96 md:scale-110"
                />
                <img
                  src={mainImage}
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
