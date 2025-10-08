import React from "react";
import { FaAppStore, FaGithub } from "react-icons/fa6";
import { Link } from "react-router";
import heroImg from '.././assets/hero.png'

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center my-15">
      <div className="banner-title text-center px-2">
        <div className=" text-[40px]  md:text-[50px] lg:text-[70px] font-bold text-[#001931]">
          <h1>We Build</h1>
          <h1>
            <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">Productive</span> Apps
          </h1>
        </div>
        <p className=" text-[14px] md:text-[18px] lg:tex-xl text-[#627382]">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br className="hidden lg:block" /> Our goal is to turn your
          ideas into digital experiences that truly make an impact.
        </p>
      </div>
      <div className="banner-action-btn md:flex gap-6 mt-8">
        <Link  to={'https://play.google.com/store'}> <span className="flex justify-center items-center gap-4 border-1 border-gray-400 bg-white p-2 text-xl rounded-md lg:font-semibold mb-3 md:mb-0"><FaGithub></FaGithub> Google Play</span></Link>
        <Link  to={'https://www.apple.com/app-store'}> <span className="flex justify-center items-center gap-4 border-1 border-gray-400 bg-white p-2 text-xl rounded-md lg:font-semibold"><FaAppStore></FaAppStore> App Store</span> </Link>
      </div>
      <div className="hero-img mt-10 px-2">
        <img src={heroImg} alt="hero" />
      </div>
      <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] w-full py-7">
        <h2 className="text-center  text-[22px] sm:text-[30px] lg:text-[40px] font-bold text-white">Trusted by Millions, Built for You</h2>
        <div className=" md:flex  justify-evenly items-center  pt-5">
            <div className="text-center text-white ">
                <p>Total Downloads</p>
                <h1 className="text-[25px] md:text-[40px] lg:text-[50px] font-bold">29.6M</h1>
                <p>21% more than last month</p>
            </div>
            <div className="text-center text-white my-4 md:my-0">
                <p>Total Reviews</p>
                <h1 className="text-[25px] md:text-[40px] lg:text-[50px] font-bold">906K</h1>
                <p>46% more than last month</p>
            </div>
            <div className="text-center text-white ">
                <p>Active Apps</p>
                <h1 className="text-[25px] md:text-[40px] lg:text-[50px] font-bold">132+</h1>
                <p>31 more will Launch</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
