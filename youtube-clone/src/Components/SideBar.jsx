import React from "react";
import { useSelector } from "react-redux";
// import store from "../utils/store";

const SideBar = () => {
  const toggleMenu = useSelector((store) => store.app.isMenuOpen);

  /** Early return pattern */
  if (!toggleMenu) return null;
  return (
    <div className="">
      <div className=" px-3 py-2  border border-black w-56">
        <div className="flex items-center justify-start  gap-2">
          <img
            className="h-11 "
            src="https://imgs.search.brave.com/oiSD-iLBP_rlrktgVm1jm2s4cPLsVTAXD_D0kz4aiY0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzAyLzgxLzcz/LzM2MF9GXzYwMjgx/NzMyNl9JTUVlOFAw/NExNeTNhekdaTmxW/cTFxR0NKQ0FxY3Jp/ZC5qcGc"
            alt="home"
          />
          <h3 className="font-medium">Home</h3>
        </div>
        <div className="flex items-center justify-start  gap-2">
          <img
            className="h-11 "
            src="https://imgs.search.brave.com/R6I6NRudcHUZpsNVptnLfclzm1yusMHzwKi9n0Vij4k/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZWRpZ2l0YWxhZ2Vu/Y3kuY29tLmF1L3dw/LWNvbnRlbnQvdXBs/b2Fkcy9Zb3V0dWJl/LXNob3J0cy1pY29u/LXBuZy5wbmc"
            alt="shorts"
          />
          <h3 className="font-medium">Shorts</h3>
        </div>{" "}
        <div className="flex items-center justify-start  gap-2">
          <img
            className="h-11 "
            src="https://imgs.search.brave.com/QzvgtW9PzPnZekVBn8VgwMzC5aJ4DQ4EKyu-bg7A4ec/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdHls/ZXMucmVkZGl0bWVk/aWEuY29tL3Q1XzJx/aDQ0L3N0eWxlcy9j/b21tdW5pdHlJY29u/XzF2Y3RjMnltM3p0/NTEucG5n"
            alt="sub"
          />
          <h3 className="font-medium">Subscriptions</h3>
        </div>
        <div className=" px-3 py-2   w-56">
          <ul>
            <li className="font-bold">You</li>
            <li>Your channel</li>
            <li>History</li>
            <li>Your videos</li>
            <li>Watch later</li>
          </ul>
        </div>
        <div className=" px-3 py-2   w-56">
          <ul>
            <li className="font-bold">Subscription</li>
            <li>Ravi</li>
            <li>Ravi</li>
            <li>Ravi</li>
            <li>Ravi</li>
            <li>Ravi</li>
            <li>Ravi</li>
            <li>Ravi</li>
          </ul>
        </div>
        <div className=" px-3 py-2   w-56">
          <ul>
            <li className="font-bold">Explore</li>
            <li>Trending</li>
            <li>Shopping</li>
            <li>Music</li>
            <li>Films</li>
            <li>Live</li>
            <li>Gaming</li>
            <li>News</li>
            <li>Sport</li>
            <li>Learning</li>
            <li>Fashion & Beauty</li>
            <li>Podcasts</li>
          </ul>
        </div>
        <div className=" px-3 py-2   w-56">
          <ul>
            <li className="font-bold">More From Youtube</li>
            <li>YouTube Premium</li>
            <li>Youtube Studio</li>
            <li>Youtube Music</li>
            <li>Youtube Kids</li>
          </ul>
        </div>
        <div className=" px-3 py-2   w-56">
          <ul>
            <li>Settings</li>
            <li>Report History</li>
            <li>Help</li>
            <li>Send Feedback</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
