import React from "react";
import Banner from "../Components/Banner";
import useApps from "../Hooks/useApps";
import AppCards from "../Components/AppCards";
import { Link } from "react-router";


const Home = () => {
  const { apps, loading, error } = useApps();
  const hompageApps = apps.slice(0, 8);
  // console.log(hompageApps)
  return (
    <div>
      <Banner></Banner>
      <div className="text-center my-10">
        <h1 className="text-[#001913] text-[25px] md:text-[40px] lg:text-[48px] font-bold">
          Trending Apps
        </h1>
        <p className="text-[#627382] mt-2">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 container mx-auto my-10">
        {hompageApps.map((app) => (
          <AppCards key={app.id} app={app}></AppCards>
        ))}
      </div>
      <div className="container mx-auto flex justify-center items-center mb-10">
        <Link to="/app"> <a className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">Show All Apps </a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
