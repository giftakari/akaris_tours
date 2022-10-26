import Navbar from "./Navbar";
import heroImage from "../assets/images/hero-image.jpg";
import {
  AiOutlineCalendar as CalenderIcon,
  AiOutlineUsergroupAdd as PeopleIcon,
} from "react-icons/ai";
import { GoChevronDown as DownArrowIcon } from "react-icons/go";
import { AiOutlineHome as HomeIcon } from "react-icons/ai";

export default function Hero() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat bg-gray-400"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="container mx-auto flex flex-col gap-10 py-10">
        <Navbar />
        <h1 className="text-4xl font-semibold text-white max-w-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, et.
        </h1>
        <div className="flex gap-2 items-center">
          <span className="bg-red-400 text-white rounded-full aspect-square w-8 grid place-content-center">
            ▶
          </span>
          <span className="font-bold">Play Video</span>
        </div>
        <div className="w-full px-12 py-5 bg-[rgba(255,255,255,0.3)] rounded-lg flex gap-2">
          <div className="flex justify-around bg-white rounded-lg w-full">
            <div className="p-4 w-full flex items-center gap-2">
              <HomeIcon className="text-red-400" size="24px" />
              <div>
                <div className=" text-gray-500 font-extralight">
                  Accommodation
                </div>
                <div className="font-semibold text-xs">
                  6730 Luna Land North
                </div>
              </div>
              <DownArrowIcon className="text-red-400" size="24px" />
            </div>
            <div className="p-4 w-full border-l flex items-center gap-2">
              <CalenderIcon className="text-red-400" size="32px" />
              <div>
                <div className=" text-gray-500 font-extralight">Check-in</div>
                <div className="font-semibold text-xs">01.12.2022</div>
              </div>
            </div>
            <div className="p-4 w-full border-l flex items-center gap-2">
              <CalenderIcon className="text-red-400" size="32px" />
              <div>
                <div className=" text-gray-500 font-extralight">Check-out</div>
                <div className="font-semibold text-xs">14.12.2022</div>
              </div>
            </div>
            <div className="p-4 w-full border-l flex items-center gap-2">
              <PeopleIcon className="text-red-400" size="32px" />
              <div>
                <div className=" text-gray-500 font-extralight">Guests</div>
                <div className="font-semibold text-xs">4 adults</div>
              </div>
              <DownArrowIcon className="text-red-400" size="24px" />
            </div>
          </div>
          <button className="bg-red-400 px-10 rounded-lg text-white">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
