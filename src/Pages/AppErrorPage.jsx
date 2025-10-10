import React from 'react';
import { Link } from 'react-router';
import appErrowIcon from ".././assets/appErrow.png"
const AppErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <img src={appErrowIcon} alt="404" />
            <Link className='mt-10' to="/">
                <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white  p-3 m'>Go To Home Page</span>
            </Link>
        </div>
    );
};

export default AppErrorPage;