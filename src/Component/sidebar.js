import React from "react";
import "../index.css";
function side() {
  return (
    <>
      <div className="bg-VeryDarkblue text-Grayishblue w-[27.5rem] p-8 flex flex-col h-[600px]">
        <div className="">
          <h1 className="text-Softorange text-6xl font-[700] my-7">New</h1>
          <p className=" my-10">
            <span className="font-bold text-2xl/10 ">
              Hydrogen Vs Electric Cars
            </span>
            <br />
            <span className="text-sm opacity-70">
              Will hydrogen-Fueled cars ever catch up to EVs?
            </span>
          </p>
        </div>
        <hr className="opacity-20 " />
        <div>
          <p className="my-7">
            <span className="font-bold text-2xl/10 ">
              The Downsides of AI Artistry
            </span>
            <span className="text-sm opacity-70">
              <br />
              What are the possible adverse effects of on-demand AI image
              generation
            </span>
          </p>
        </div>
        <hr className="opacity-20 " />
        <div>
          <p className="my-7">
            <span className="font-bold text-2xl/10 ">
              Is VC Funding Drying Up?
            </span>
            <br />
            <span className="text-sm opacity-70">
              Private funding by VC firms is down 50% YOY.We take a look at what
              that means.
            </span>
          </p>
        </div>
        <hr className="opacity-20 " />
      </div>
    </>
  );
}

export default side;
