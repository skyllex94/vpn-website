import * as React from "react";

import "./App.css";

import appStore from "./assets/app-store.png";
import mainImage from "./assets/landing-image.jpg";
import Footer from "./components/Footer";
import Features from "./components/Features";

function App() {
  return (
    <div>
      <div>
        <div className="bg-white pt-20 pb-20 lg:pt-20">
          <div className="m-auto px-6 xl:container md:px-12 lg:px-6">
            <h1 className="text-center font-black text-4xl text-black-900 sm:mx-auto sm:w-10/12 sm:text-5xl md:w-2/3 md:text-6xl lg:w-auto lg:text-left xl:text-7xl">
              NorthVPN
              <br className="hidden lg:block" />
              <scan className="text-center text-5xl relative bg-gradient-to-b from-teal-700 to-teal-800 bg-clip-text text-transparent">
                Your Secure VPN + AdBlocker App
              </scan>
            </h1>

            <div className="flex lg:flex">
              <div className="relative mt-8 space-y-8 text-center sm:mx-auto sm:w-10/12 md:mt-16 md:w-2/3 lg:ml-0 lg:mr-auto lg:w-7/12 lg:text-left">
                <p className="text-gray-700 dark:text-gray-300 sm:text-lg lg:w-9/12">
                  Our Virtual Private Network (VPN) is intended to give you one
                  of the best state of the art, secure experience as you are
                  doing your daily tasks. Privacy is a serious issue nowadays
                  and it's advisable to keep all of your personal data
                  connection secure and reliable.
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
              <div className="-right-10 mt-12 md:mt-0 lg:w-7/12">
                <div className="flex justify-center">
                  <img
                    src={mainImage}
                    className="landing-image mt-6 w-full"
                    alt="vpn display"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Features />
      <Footer />
    </div>
  );
}

export default App;
