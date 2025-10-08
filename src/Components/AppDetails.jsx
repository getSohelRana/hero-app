import React from 'react';
import { useParams } from 'react-router';
import useApps from '../Hooks/useApps';
import downloadIcon from '.././assets/icon-downloads.png'
import ratingIcon from '.././assets/icon-ratings.png'

const AppDetails = () => {
    const { id } = useParams();
    const { apps, loading } = useApps();

    if (loading) return <div className='flex justify-center items-center bg-white h-6/12 '>
        <span className="w-16 h-16 loading loading-spinner text-success"></span>
    </div>

    const appDetails = apps.find((app) => app.id === Number(id));

    

    

    const { title, image, downloads, ratingAvg, size } = appDetails || {};

    

    return (
        <div className='my-10 container mx-auto px-2 '>
            <div className="application-title text-center">
                <h1 className="text-[#001913] text-[25px] md:text-[40px] lg:text-[48px] font-bold">
                    Your Installed Apps
                </h1>
                <p className="text-[#627382] mt-2">
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>
            <div className="card card-side bg-base-100 shadow-sm items-center my-10">
                <figure className='p-3'>
                    <img className='h-[120px] p-3 rounded-3xl border-1 border-gray-100'
                        src={image}
                        alt={title} />
                </figure>
                <div className="card-body">

                    <div className="flex justify-between items-center ">
                        <div>
                            <h2 className="card-title">App Name: {title}</h2>
                            <div className='flex '>
                                <div className="flex items-center gap-2 w-auto h-auto   py-1 pr-5 font-semibold text-[#00D390]">
                                <img className="w-[18px] h-[18px] object-cover" src={downloadIcon} alt="" /> {downloads}
                            </div>
                            <div className="flex items-center gap-2 w-auto h-auto  py-1 pr-5  font-semibold text-[#FF8811]">
                                <img className="w-[18px] h-[18px] object-cover" src={ratingIcon} alt="" /> {ratingAvg}
                            </div>
                            <div className='flex items-center py-1'>
                                <p className='font-bold text-[#627382]'>{size} MB</p>
                            </div>
                            </div>
                        </div>
                        <div>
                            <button className="btn bg-[#00D390] text-white">Uninstall</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AppDetails;