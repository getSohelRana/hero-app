import React, { useState, useEffect } from "react";
import useApps from "../Hooks/useApps";
import AllApps from "../Components/AllApps";

const App = () => {
  const { apps, loading, error } = useApps();
  const [search, setSearch] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);

  const toSingleString = search.trim().toLocaleLowerCase();

  useEffect(() => {
    if (search.trim()) {
      setSearchLoading(true);
      const timer = setTimeout(() => setSearchLoading(false), 400); // small delay
      return () => clearTimeout(timer);
    }
  }, [search]);

  if (loading)
    return (
      <div className="flex justify-center items-center bg-white min-h-screen">
        <span className="w-16 h-16 loading loading-spinner text-success"></span>
      </div>
    );

  if (error || !apps?.length) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center">
        <h2 className="text-2xl font-bold text-gray-700 mb-3">
          No Apps Available
        </h2>
        <p className="text-gray-500">
          Sorry, there are no apps to display right now.
        </p>
      </div>
    );
  }

  const searchedApps = toSingleString
    ? apps.filter((app) =>
        app.title.toLocaleLowerCase().includes(toSingleString)
      )
    : apps;

  return (
    <div className="container mx-auto my-10 px-2">
      <div className="application-title text-center">
        <h1 className="text-[#001913] text-[25px] md:text-[40px] lg:text-[48px] font-bold">
          Trending Apps
        </h1>
        <p className="text-[#627382] mt-2">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="flex justify-between items-center mt-7">
        <div className="text-xl font-semibold">
          ({searchedApps.length}) App Founds
        </div>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            required
            placeholder="Search your app"
          />
        </label>
      </div>
      
    {/* ---Search Functionality--- */}

      {searchLoading ? (
        <div className="flex justify-center items-center h-[40vh]">
          <span className="w-12 h-12 loading loading-spinner text-success"></span>
        </div>
      ) : searchedApps.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-[50vh] text-center mt-10">
          <h2 className="text-3xl font-bold text-gray-700 mb-3">
            No Apps Found
          </h2>
          <p className="text-gray-500">No apps match your search “{search}”.</p>
          <button
            onClick={() => window.history.go()}
            className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white mt-5"
          >
            Show All Apps
          </button>
        </div>
      ) : (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 container mx-auto my-10 px-2">
          {searchedApps.map((app) => (
            <AllApps key={app.id} app={app} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
