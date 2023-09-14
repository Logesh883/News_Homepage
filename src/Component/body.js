import React, { useEffect, useState } from "react";

import divPage from "./assets/images/image-web-3-desktop.jpg";
import divMob from "./assets/images/image-web-3-mobile.jpg";
function Body() {
  const [display, setDisplay] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setDisplay(window.innerWidth);
    });
  }, [display, window.innerWidth, setDisplay]);

  return (
    <>
      <div className="flex flex-col flex-wrap">
        <div className="bg-Offwhite mt-3   flex">
          {display < 400 ? (
            <img src={divMob} className="" />
          ) : (
            <img src={divPage} className="" />
          )}
        </div>
        <div className="flex  w-[880px] space-x-9 justify-between box-border max-sm:flex-col">
          <div className="pt-7 w-[380px] flex shrink-0">
            <p className="font-[700] text-[4.3rem]/[65px] box-border   ">
              The Bright Future of Web 3.0?
            </p>
          </div>
          <div className="flex flex-col tracking-wider w-[450px]  text-[16px] font-[400] text-left pt-9 pl-16 text-gray-400">
            <p>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people.But is it
              really fullfilling its promises
            </p>
            <div>
              <button className="border-2 bg-Softred mt-12 w-[180px] h-[50px] tracking-[4px]  text-white p-2 hover:bg-VeryDarkblue">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Body;
