import React from "react";
import { FcSearch, FcHome } from "react-icons/fc";
import { FaPlus } from "react-icons/fa";
import { IoLibraryOutline } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import Signup from "./Signup";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="w-1/4 fixed left-0 top-0 sidebar">
      <div className="nav secondary_bg rounded-lg p-6">
        <div className="flex items-center gap-4">
          <FcHome className="font-bold text-xl" />
          <span>Home</span>
        </div>

        <div className="flex mt-4 items-center gap-4">
          <FcSearch className="font-bold text-xl" />
          <span>Search</span>
        </div>
      </div>

      <div className="mt-2 secondary_bg rounded-lg px-2 py-2">
        <div className="flex px-4 justify-between mb-4 items-center gap-4">
          <div className="flex gap-2 items-center">
            <IoLibraryOutline className="font-bold text-xl" />
            <span>Your library</span>
          </div>

          <button className="hover:bg-black/25 rounded-[50%] p-2">
            <FaPlus className="font-bold text-xl" />
          </button>
        </div>

        <div className="your_library">
          <div className="leading-8 mt-2 tertiary_bg rounded-lg py-6 px-4">
            <p className="font-bold">Create your first playlist</p>
            <p className="font-semibold">It's easy, we'll help you</p>
            <button className="rounded-full text-black mt-4 px-4 py-0 bg-white font-semibold">
              Create playlist
            </button>
          </div>

          <div className="leading-8 mt-4 tertiary_bg rounded-lg py-6 px-4">
            <p className="font-bold">Let's find some podcasts to follow</p>
            <p className="font-semibold">
              We'll keep you updated on new episodes
            </p>
            <button className="rounded-full text-black mt-4 px-4 py-0 bg-white font-semibold">
              Browse Podcast
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4 px-4 flex gap-4 flex-wrap">
        <a className="text-xs mx-4 text-gray-300" href="#">
          Legai
        </a>
        <a className="text-xs mx-4 text-gray-300" href="#">
          Privacy Center
        </a>
        <a className="text-xs mx-4 text-gray-300" href="#">
          Privacy Policy
        </a>
        <a className="text-xs mx-4 text-gray-300" href="#">
          Cookies
        </a>
        <a className="text-xs mx-4 text-gray-300" href="#">
          About Ads
        </a>
        <a className="text-xs mx-4 text-gray-300" href="#">
          Accessibility
        </a>
      </div>
      <button className="mx-4 mt-12 text-sm border rounded-full flex gap-2 px-3 py-1 items-center text-white">
        <TbWorld />
        <span className="text-white font-bold">English</span>
      </button>
      {/* <Signup /> */}
    </div>
  );
};

export default Sidebar;
