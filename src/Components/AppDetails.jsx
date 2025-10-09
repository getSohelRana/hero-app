import React, { useEffect, useState } from "react";

import { useParams } from "react-router";
import useApps from "../Hooks/useApps";
import downloadIcon from ".././assets/icon-downloads.png";
import ratingIcon from ".././assets/icon-ratings.png";
import reviewsIcon from ".././assets/icon-review.png";
import { toast, ToastContainer } from "react-toastify";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();
  const [isInstall, setIsInstall] = useState(false);
  const appDetails = apps.find((app) => app.id === Number(id));
  const {
    title,
    image,
    downloads,
    ratingAvg,
    size,
    companyName,
    reviews,
    ratings,
    description,
  } = appDetails || {};

  const chartsData = ratings;
  console.log(chartsData);
  // check install apps
  useEffect(() => {
    if (appDetails) {
      const installedList = JSON.parse(localStorage.getItem("install")) || [];
      const alreadyInstalled = installedList.some(
        (a) => a.id === appDetails.id
      );
      setIsInstall(alreadyInstalled);
    }
  }, [id, appDetails]);

  if (loading)
    return (
      <div className="flex justify-center items-center bg-white min-h-screen ">
        <span className="w-16 h-16 loading loading-spinner text-success"></span>
      </div>
    );

  // add install functionlity

  const handleAddToInstall = () => {
    const existingList = JSON.parse(localStorage.getItem("install")) || [];
    let updatedList = [];

    if (existingList) {
      const isDuplicate = existingList.some((a) => a.id === appDetails.id);
      if (isDuplicate) return toast.warning("Already installed this app!");
      updatedList = [...existingList, appDetails];
    } else {
      updatedList.push(appDetails);
    }
    localStorage.setItem("install", JSON.stringify(updatedList));

    setIsInstall(true);
    toast.success("App installed successfully!");
  };

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
      <div className="card card-side bg-base-100 shadow-sm  my-10 flex-col md:flex-row">
        <figure className="p-3 flex-1">
          <img
            className="h-[300px] p-3 rounded-3xl border-1 border-gray-100 shadow-sm"
            src={image}
            alt={title}
          />
        </figure>
        <div className="card-body flex-2">
          <div>
            <h2 className="text-xl md:text-[35px] font-bold">
              App Name: {title}
            </h2>
            <p className="border-b-2 border-gray-200 pt-2 pb-3 text-xl text-[#627382]">
              Developed By :{" "}
              <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                {companyName}
              </span>
            </p>
            <div className="flex gap-5 md:gap-10 mt-5 ">
              <div className="py-1">
                <img
                  className="w-[35px] h-[35px] object-cover"
                  src={downloadIcon}
                  alt=""
                />{" "}
                <p className="my-2">Downloads</p>
                <span className="text-xl md:text-3xl font-semibold">
                  {downloads}
                </span>
              </div>
              <div className="py-1">
                <img
                  className="w-[35px] h-[35px] object-cover"
                  src={ratingIcon}
                  alt=""
                />
                <p className="my-2">Average Ratings</p>
                <span className="text-xl md:text-3xl font-semibold">
                  {ratingAvg}
                </span>
              </div>
              <div className="py-1">
                <img
                  className="w-[35px] h-[35px] object-cover"
                  src={reviewsIcon}
                  alt=""
                />
                <p className="my-2">Total Reviews</p>
                <span className="text-xl md:text-3xl font-semibold">
                  {reviews}
                </span>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <button
              disabled={isInstall}
              onClick={handleAddToInstall}
              className="bg-[#00D390] text-white text-xl px-3 py-2 rounded cursor-pointer"
            >
              {isInstall === true ? "Installed" : "Install"} ({size}) MB
            </button>
          </div>
        </div>
      </div>

      {/* charts area */}
      <h1 className="text-[#001913] text-[20px] md:text-[30px] lg:text-[40px] font-bold">
        Reviews
      </h1>
      <div className="my-10 border-2 border-l-0 border-r-0 border-gray-200 p-3 h-100">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            layout="vertical"
            width={500}
            height={400}
            data={chartsData}
            margin={{ top: 20, right: 40, bottom: 20, left: 50 }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="count" type="number" />
            <YAxis dataKey="name" type="category" scale="band" />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="count"
              barSize={25}
              fill="#FF8811"
              name="Total Reviews"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      <div>
        <h1 className="text-[#001913] text-[20px] md:text-[30px] lg:text-[40px] font-bold">
          App Description
        </h1>
        <p className="text-[#627382] mt-6 text-justify">{description}</p>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AppDetails;
