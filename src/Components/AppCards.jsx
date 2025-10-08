import React from "react";
import downloadIcon from '.././assets/icon-downloads.png'
import ratingIcon from '.././assets/icon-ratings.png'

const AppCards = ({ app }) => {
  //   console.log(app);
  const { title, image, downloads, ratingAvg } = app || {};
  return (
    <div className="card bg-white  shadow-sm">
      <div className="p-5">
         <figure className=" rounded-xl">
        <img className="h-[230px] w-full object-cover rounded-xl" src={image} alt={title} />
      </figure>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          App Name : {title}
        </h2>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 w-auto h-auto bg-[#F1F5E8] px-4 py-1 text-[18px] font-semibold text-[#00D390]">
            <img className="w-[21px] h-[21px] object-cover" src={downloadIcon} alt="" /> {downloads}
          </div>
          <div className="flex items-center gap-2 w-auto h-auto bg-[#FFF0E1] px-4 py-1 text-[18px] font-semibold text-[#FF8811]">
            <img className="w-[21px] h-[21px] object-cover" src={ratingIcon} alt="" /> {ratingAvg}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCards;
