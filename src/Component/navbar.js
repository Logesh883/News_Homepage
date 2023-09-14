import React, { useState, useEffect } from "react";
import logo from "./assets/images/logo.svg";

function Nav() {
  const [display, setDisplay] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setDisplay(window.innerWidth);
    });
  }, [display, window.innerWidth, setDisplay]);
  return (
    <>
      <div className="bg-Offwhite  text-slate-500  mt-8   box-border p-4 flex justify-between  sm:flex max-md:flex  max-sm:justify-between ">
        <div className="flex items-center flex-shrink-0">
          <div className="flex -ml-5 ">
            <img src={logo} alt="logo" className="h-[90%] w-[70px] " />
          </div>
        </div>

        <div>
          {display < 900 ? (
            <div>
              <img />
            </div>
          ) : (
            <div className="flex  flex-wrap sm:inline-block -mr-4  ">
              <a href="#" className="mr-16 hover:text-Softred">
                Home
              </a>
              <a href="#" className="mr-16 hover:text-Softred">
                New
              </a>
              <a href="#" className="mr-16 hover:text-Softred">
                Popular
              </a>
              <a href="#" className="mr-16 hover:text-Softred">
                Trending
              </a>
              <a href="#" className="hover:text-Softred">
                Categories
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Nav;
