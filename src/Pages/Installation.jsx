import React, { useEffect, useState } from "react";
import InstallCard from "../Components/InstallCard";

const Installation = () => {
  const [installation, setInstallation] = useState([]);
  const [sortDownload, setSortDownload] = useState("none");

  useEffect(() => {
    const saveList = JSON.parse(localStorage.getItem("install"));
    if (saveList) {
      setInstallation(saveList);
    }
  }, []);

   // sorted function
  const sortedItems = (() => {
    if(sortDownload === 'download-asc'){
     return [...installation].sort((a ,b) => (a.size - b.size));
    } else if(sortDownload === 'download-desc'){
      return [...installation].sort((a,b) => (b.size -a.size));
    } else{
      return installation
    }
  }) ()

  return (
    <div className="my-10 container mx-auto px-2 ">
      <div className="application-title text-center">
        <h1 className="text-[#001913] text-[25px] md:text-[40px] lg:text-[48px] font-bold">
          Your Installed Apps
        </h1>
        <p className="text-[#627382] mt-2">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex justify-between items-center my-5">
        <div className='text-xl font-semibold'>{sortedItems.length} App Found </div>
        <label className="form-control w-full max-w-sm">
          <select
            className="select select-bordered text-xl"
            value={sortDownload}
            onChange={(e) => setSortDownload(e.target.value)}
          >
            <option value="none">Sort By Download</option>
            <option value="download-asc">Low -&gt; high</option>
            <option value="download-desc">High -&gt; low</option>
          </select>
        </label>
      </div>
      <div>
        {sortedItems.map((app) => (
          <InstallCard key={app.id} app={app}></InstallCard>
        ))}
      </div>
    </div>
  );
};

export default Installation;
