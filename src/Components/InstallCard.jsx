import React from 'react';
import downloadIcon from '.././assets/icon-downloads.png'
import ratingIcon from '.././assets/icon-ratings.png'
const InstallCard = ({app ,  handleUnstallApp}) => {
    const { title, image, downloads, ratingAvg, size, id } = app|| {};
    return (
        <div className='my-10 container mx-auto px-2 '>
         
            <div className="card card-side bg-base-100 shadow-sm items-center my-10 flex-col md:flex-row">
                <figure className='p-3'>
                    <img className='h-[120px] w-[120px] p-3 rounded-3xl border-1 border-gray-100'
                        src={image}
                        alt={title} />
                </figure>
                <div className="card-body">

                    <div className="flex-row md:flex justify-between items-center ">
                        <div >
                            <h2 className="card-title">App Name: {title}</h2>
                            <div className='flex  my-2 md:my-0'>
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
                            <button onClick={() => handleUnstallApp(id)} className="btn bg-[#00D390] text-white block mx-auto md:inline md:mx-none">Uninstall</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default InstallCard;