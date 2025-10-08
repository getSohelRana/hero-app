import React from "react";
import { Link, NavLink } from "react-router";
import siteLogo from ".././assets/logo.png";
import { GitBranch } from "lucide-react";
import { FaGithub } from "react-icons/fa6";


const Navbar = () => {
    
    const links = <>
        <NavLink to='/' className='text-xl'>Home</NavLink>
        <NavLink to='/app' className='text-xl my-4 lg:my-0 lg:mx-4 focus:border-b-2 border-x-neutral-900'>App</NavLink>
        <NavLink to='/installation' className='text-xl'>Installation</NavLink>
    </>
  

   
  return (
    <div className='shadow-sm'>
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden -ml-4 -sm:ml-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
                {links}
            </ul>
          </div>
          <Link className="flex items-center gap-2" to="/">
            <img className="w-[50px]" src={siteLogo} alt="site logo" />
            <span className="font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent hover:from-[#9F62F2] hover:to-[#632EE3] transition-all duration-300">
              HERO.IO
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white"><FaGithub /> Contribute </a>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
