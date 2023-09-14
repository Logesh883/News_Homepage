import React from "react";

import img1 from "./assets/images/image-retro-pcs.jpg";
import img2 from "./assets/images/image-top-laptops.jpg";
import img3 from "./assets/images/image-gaming-growth.jpg";

export const Footer = () => {
  return (
    <>
      <div className="flex  justify-evenly gap-x-8 max-sm:flex-wrap">
        <div className="flex gap-x-7 flex-shrink-0  ">
          <img
            src={img1}
            alt="retro"
            className="w-[20%] h-[45%] flex flex-shrink-0"
          />
          <div>
            <h2 className="font-bold text-3xl text-gray-300 opacity-80">01</h2>
            <p className="font-bold text-[20px]">Reviving Retro Pcs</p>
            <p className="w-[230px] text-gray-400 tracking-wider">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>

        <div className="flex  gap-x-7">
          <img
            src={img2}
            alt="laptop"
            className="w-[20%] h-[45%] flex flex-shrink-0"
          />
          <div>
            <h2 className="font-bold text-3xl text-gray-300 opacity-80">02</h2>
            <p className="font-bold text-[20px]">Top 10 Laptops of 2022</p>
            <p className="w-[210px] text-gray-400 tracking-wider">
              Our best picks for various needs and budgets.
            </p>
          </div>
        </div>
        <div className="flex gap-x-7 -ml-6 ">
          <img src={img3} alt="retro" className="h-[45%]" />

          <div>
            <h2 className="font-bold text-3xl text-gray-300 opacity-80">03</h2>
            <p className="font-bold text-[20px]">The Growth of Gaming</p>
            <p className="w-[250px] text-gray-400 tracking-wider">
              How the pandemic has sparked fresh opportunities
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
