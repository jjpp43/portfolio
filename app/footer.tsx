import { FaGithub } from "react-icons/fa";
import ShinyText from "../reactbits/ShinyText";

export default function Footer() {
  return (
    <div className="flex flex-col items-start py-16 px-8 sm:px-20 md:px-24 lg:px-28 xl:px-32 bg-background">
      <div className="flex flex-col"></div>
      {/* Github Icon */}
      {/* <a
        href="https://github.com/jjpp43" // Replace with your GitHub profile URL
        target="_blank" // Opens link in a new tab
        rel="noopener noreferrer"
      >
        <div className="flex pb-8 items-center justify-center transition-transform duration-200 ease-in hover:scale-110">
          <div className="relative h-11 w-11 rounded-full bg-conic-gradient animate-rotate"></div>
          <div className="absolute bg-black w-10 h-10 rounded-full"></div>
          <div className="absolute z-10 animate-none">
            <FaGithub
              style={{ width: "41px", height: "41px" }}
              className="rounded-full "
            />
          </div>
        </div>
      </a> */}
      {/* Copyright & Portfolio */}
      <div className="flex flex-row w-full justify-between">
        <div>&copy;Junna Park, All Rights Reserved.</div>
        <div className="text-gray-300">2025 Portfolio</div>
      </div>
    </div>
  );
}
