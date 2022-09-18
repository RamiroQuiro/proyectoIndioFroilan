import React from "react";
import Navbar from "./Navbar";

import "./headerStyle.css";
import BackgroundHeader from "./BackgroundHeader";
import H1 from "../../../component/H1";
import SidebarHeader from "../../../ComponenteTienda/SidebarHeader";

export default function Header() {
  return (
    <header className='w-full md:h-[110vh] h-screen text-gray-700 relative '>
      <BackgroundHeader />
      <Navbar />
      <div className='w-full z-10 md:absolute top-0 left-0 h-full'>
            <div className=' flex md:flex-row flex-col items-center pt-20 md:pt-0 md:w-10/12 mx-auto h-full justify-between  relative'>
          <div className="md:w-1/2 p-5 rounded-lg my-5 md:m-0  bg-white/30 backdrop-blur-sm ">
            <H1 className={""}>Tienda Online </H1>
            <p className="text-xl my-5 leading-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae neque eius voluptate aliquid culpa amet nesciunt nulla
              nostrum, rem mollitia vel possimus provident? Quae rem eaque
              tenetur aut cum officiis.
            </p>
          </div>
          <SidebarHeader />
        </div>
      </div>
    </header>
  );
}
