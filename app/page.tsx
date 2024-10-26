"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Badge from "./components/badge";
import Link from "next/link";
import { useScroll } from "./components/scrollContext";

export default function Home() {
  const { aboutRef, projectsRef } = useScroll();

  return (
    <div className="w-screen bg-black">
      <div className="flex flex-col p-8 sm:px-20 sm:p-10 md:px-24 md:p-12 lg:px-28 lg:p-14 xl:px-32 xl:p-16">
        <div className="flex flex-row justify-start">
          <div className="font-normal text-white text-[10vw]">
            <TypeAnimation
              sequence={["Hard", 500, "Software", 1000]}
              speed={10}
              style={{ display: "inline-block" }}
            />
          </div>
        </div>
        <div className="flex flex-row justify-end">
          <div className="font-normal text-white text-[10vw]">Developer</div>
        </div>
        <div className="flex flex-row justify-center py-20">
          {/* TextBox Area */}
          <div className="font-normal text-gray-400 text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed max-w-screen-sm">
            Hello, I'm <strong className="text-white">Junna Park,</strong>{" "}
            specializing in building modern, responsive websites. I love turning
            ideas into <strong className="text-white">reality.</strong>
          </div>
          {/* Bouncing Arrow */}
          <div
            id="arrow"
            className="flex flex-col p-4 py-8 animate-bounce hover:scale-120"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="15"
              viewBox="0 0 26 15"
              fill="none"
            >
              <path
                d="M12.8768 14.2772C12.1755 14.2858 11.4995 14.0161 10.9968 13.5272L1.45675 3.98715C1.15222 3.65038 0.988758 3.20945 1.00016 2.75554C1.01157 2.30164 1.19697 1.86948 1.51802 1.54842C1.83908 1.22736 2.27125 1.04196 2.72515 1.03056C3.17905 1.01915 3.61998 1.18262 3.95675 1.48715L12.6968 10.2272C12.7201 10.2513 12.748 10.2706 12.779 10.2837C12.8099 10.2969 12.8431 10.3037 12.8768 10.3037C12.9104 10.3037 12.9436 10.2969 12.9745 10.2837C13.0055 10.2706 13.0334 10.2513 13.0568 10.2272L21.7968 1.45715C22.1335 1.15262 22.5745 0.989155 23.0284 1.00056C23.4823 1.01196 23.9144 1.19736 24.2355 1.51842C24.5565 1.83948 24.7419 2.27164 24.7533 2.72555C24.7648 3.17945 24.6013 3.62038 24.2968 3.95715L14.7568 13.5272C14.254 14.0161 13.578 14.2858 12.8768 14.2772Z"
                fill="white"
                stroke="white"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="15"
              viewBox="0 0 26 15"
              fill="none"
            >
              <path
                d="M12.8768 14.2772C12.1755 14.2858 11.4995 14.0161 10.9968 13.5272L1.45675 3.98715C1.15222 3.65038 0.988758 3.20945 1.00016 2.75554C1.01157 2.30164 1.19697 1.86948 1.51802 1.54842C1.83908 1.22736 2.27125 1.04196 2.72515 1.03056C3.17905 1.01915 3.61998 1.18262 3.95675 1.48715L12.6968 10.2272C12.7201 10.2513 12.748 10.2706 12.779 10.2837C12.8099 10.2969 12.8431 10.3037 12.8768 10.3037C12.9104 10.3037 12.9436 10.2969 12.9745 10.2837C13.0055 10.2706 13.0334 10.2513 13.0568 10.2272L21.7968 1.45715C22.1335 1.15262 22.5745 0.989155 23.0284 1.00056C23.4823 1.01196 23.9144 1.19736 24.2355 1.51842C24.5565 1.83948 24.7419 2.27164 24.7533 2.72555C24.7648 3.17945 24.6013 3.62038 24.2968 3.95715L14.7568 13.5272C14.254 14.0161 13.578 14.2858 12.8768 14.2772Z"
                fill="white"
                stroke="white"
              />
            </svg>
          </div>
        </div>
        {/* About Section */}
        <div
          ref={aboutRef}
          className="flex flex-col justify-start items-center py-16 md:py-24 lg:py-28 xl:py-32 text-4xl font-semibold"
        >
          <div className="py-16">About</div>
          <div className="flex flex-row gap-4">
            <div className="flex flex-col items-end">
              <div className="grayscale hover:grayscale-0 transition-all duration-300 ease-in-out">
                <Image
                  className="rounded-lg"
                  alt=""
                  src="/profile.png"
                  width="300"
                  height="360"
                />
              </div>
              <div className="flex flex-row items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="white"
                  viewBox="0 0 256 256"
                >
                  <path d="M200,224H150.54A266.56,266.56,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25a88,88,0,0,0-176,0c0,31.4,14.51,64.68,42,96.25A266.56,266.56,0,0,0,105.46,224H56a8,8,0,0,0,0,16H200a8,8,0,0,0,0-16ZM56,104a72,72,0,0,1,144,0c0,57.23-55.47,105-72,118C111.47,209,56,161.23,56,104Zm112,0a40,40,0,1,0-40,40A40,40,0,0,0,168,104Zm-64,0a24,24,0,1,1,24,24A24,24,0,0,1,104,104Z"></path>
                </svg>
                <div className="p-1 text-sm font-normal text-white">
                  Currently based in Ohio, USA
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div>
                {/* Skill Section */}
                <div className="p-4 pt-0 text-3xl">Skills</div>
                {/* First Row */}
                <div className="flex flex-row flex-wrap pb-2 gap-2 px-4 font-normal text-sm ">
                  <Badge icon="javascript" label="javascript" />
                  <Badge icon="nextjs" label="next.js" />
                </div>
                {/* Second Row */}
                <div className="flex flex-row flex-wrap pb-2 gap-2 px-4 font-normal text-sm ">
                  <Badge icon="react" label="react" />
                  <Badge icon="nodejs" label="node.js" />
                </div>
                {/* Third Row */}
                <div className="flex flex-row pb-2 gap-2 px-4 font-normal text-sm ">
                  <Badge icon="aws" label="AWS Solutions Architect" />
                </div>
                {/* Tool Section */}
                <div className="p-4 pt-8 text-3xl">Tools</div>
                {/* First Row */}
                <div className="flex flex-row flex-wrap pb-2 gap-2 px-4 font-normal text-sm ">
                  <Badge icon="figma" label="figma" />
                  <Badge icon="notion" label="notion" />
                  <Badge icon="slack" label="slack" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={projectsRef}
          className="flex flex-row justify-center py-16 md:py-24 lg:py-28 xl:py-32 pt-64 text-4xl font-semibold"
        >
          Projects
        </div>
        {/* Project Card Area */}
        <div
          id="card container"
          className="flex flex-col px-16 md:px-24 lg:px-28 xl:px-32"
        >
          <div
            id="firstRow"
            className="flex flex-col lg:flex-row xl:flex-row justify-between gap-8 lg:gap-12 xl:gap-16"
          >
            <Link
              href="https://pathway-ten.vercel.app"
              className="h-full w-full"
            >
              <div className="card-wrapper-1 overflow-hidden bg-gray-800 rounded-lg relative w-full h-72 hover:scale-105 transition-transform ease-in-out duration-300">
                <div className="card-content absolute rounded-lg bg-custom-gradient top-[1.5px] left-[1.5px] w-[calc(100%-3px)] h-[calc(100%-3px)]">
                  <div className="flex flex-col justify-between rounded-lg h-full bg-custom-gradient">
                    <div className="p-4">
                      <Image src="/title.png" alt="" width="200" height="110" />
                    </div>
                    <div>
                      <div className="flex flex-row">
                        <div className="p-2 px-4 font-semibold text-lg">
                          Pathway US
                        </div>
                        <Image alt="" src="/link.svg" width={24} height={24} />
                      </div>
                      <div className="p-4 pt-0 text-gray-400 text-sm">
                        A comprehensive platform offering detailed information
                        and comparisons for universities.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/your-target-url" className="h-full w-full">
              <div className="card-wrapper-2 overflow-hidden bg-gray-800 rounded-lg relative w-full h-72 hover:scale-105 transition-transform ease-in-out duration-300">
                <div className="card-content absolute rounded-lg bg-transparent top-[1.5px] left-[1.5px] w-[calc(100%-3px)] h-[calc(100%-3px)]">
                  <div className="flex flex-col justify-between rounded-lg h-full bg-custom-gradient">
                    <div className="p-4">
                      <Image src="/title.png" alt="" width="200" height="110" />
                    </div>
                    <div>
                      <div className="flex flex-row">
                        <div className="p-2 px-4 font-semibold text-lg">
                          Pathway US
                        </div>
                        <Image alt="" src="/link.svg" width={24} height={24} />
                      </div>
                      <div className="p-4 pt-0 text-gray-400 text-sm">
                        A comprehensive platform offering detailed information
                        and comparisons for universities.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/your-target-url" className="h-full w-full">
              <div className="card-wrapper-3 overflow-hidden bg-gray-800 rounded-lg relative w-full h-72 hover:scale-105 transition-transform ease-in-out duration-300">
                <div className="card-content absolute rounded-lg bg-custom-gradient top-[1.5px] left-[1.5px] w-[calc(100%-3px)] h-[calc(100%-3px)]">
                  <div className="flex flex-col justify-between rounded-xl h-full bg-custom-gradient">
                    <div className="p-4">
                      <Image src="/title.png" alt="" width="200" height="110" />
                    </div>
                    <div>
                      <div className="flex flex-row">
                        <div className="p-2 px-4 font-semibold text-lg">
                          Pathway US
                        </div>
                        <Image alt="" src="/link.svg" width={24} height={24} />
                      </div>
                      <div className="p-4 pt-0 text-gray-400 text-sm">
                        A comprehensive platform offering detailed information
                        and comparisons for universities.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex flex-row "></div>
        </div>
      </div>
    </div>
  );
}
