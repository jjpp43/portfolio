"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Badge from "./components/badge";
import Link from "next/link";
import { useClickScroll } from "./components/scrollContext";
import { Divider } from "@nextui-org/react";
import { useState, useEffect, useRef } from "react";
// Import reactbits
import MagnetLines from "./components/reactbits/magnetLines";
import SplashCursor from "./components/reactbits/splashCursor";
import Threads from "../reactbits/Threads";
import SplitText from "../reactbits/SplitText";

export default function Home() {
  const [isContactVisible, setIsContactVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false); // Track if animation has run
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setTimeout(() => {
            setIsContactVisible(true);
            setHasAnimated(true); // Prevent animation from repeating
          }, 300); // Adjust delay in milliseconds
        }
      },
      { threshold: 0.5 } // Trigger when 10% of the element is visible
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [hasAnimated]);

  const { aboutRef, projectsRef, contactRef } = useClickScroll();
  const email = "junnapark@gmail.com";
  const subject = "[Project Request]";
  const mailtoLink = `mailto:${email}?subject${encodeURIComponent(subject)}`;

  return (
    <div className="w-screen bg-background pt-4">
      <div className="flex flex-col p-8 sm:px-20 sm:p-10 md:px-24 md:p-12 lg:px-28 lg:p-14 xl:px-32 xl:p-16">
        {/* Software Developer */}
        <div className="">
          <div className="flex flex-row justify-between ">
            <div className="font-normal text-foreground text-[9vw]">
              <TypeAnimation
                sequence={["Hard", 500, "Software", 1000]}
                speed={1}
                style={{ display: "inline-block" }}
              />
            </div>
            <MagnetLines />
          </div>
          <div className="flex flex-row justify-between">
            <MagnetLines />
            <div className="font-normal text-foreground text-[9vw]">
              Developer
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center py-20">
          {/* TextBox Area */}
          <div className="flex-wrap appear-reveal font-normal text-gray-400 text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed max-w-screen-sm">
            Hello, I'm{" "}
            <strong className="text-foreground font-grotesque text-xl md:text-2xl lg:text-3xl xl:text-4xl inline-block relative">
              {/* Invisible placeholder for reserving space */}
              <span
                aria-hidden="true"
                className="invisible block whitespace-nowrap"
              >
                Junna Park
              </span>

              {/* Animated text */}
              <TypeAnimation
                cursor={false}
                sequence={["Junna Park", 1000]}
                speed={1}
                style={{ display: "inline-block", whiteSpace: "nowrap" }}
                repeat={1}
              />
            </strong>
            , specializing in building modern, responsive websites. I love
            turning ideas into{" "}
            <strong className="text-foreground font-grotesque text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              <TypeAnimation
                cursor={false}
                sequence={["reality.", 1000]}
                speed={1}
                style={{ display: "inline-block" }}
              />
            </strong>
          </div>

          {/* Bouncing Arrow */}
          <div id="arrow" className="flex flex-col p-4 py-8 animate-bounce ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="15"
              viewBox="0 0 26 15"
              fill="white"
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
              fill="white"
            >
              <path
                d="M12.8768 14.2772C12.1755 14.2858 11.4995 14.0161 10.9968 13.5272L1.45675 3.98715C1.15222 3.65038 0.988758 3.20945 1.00016 2.75554C1.01157 2.30164 1.19697 1.86948 1.51802 1.54842C1.83908 1.22736 2.27125 1.04196 2.72515 1.03056C3.17905 1.01915 3.61998 1.18262 3.95675 1.48715L12.6968 10.2272C12.7201 10.2513 12.748 10.2706 12.779 10.2837C12.8099 10.2969 12.8431 10.3037 12.8768 10.3037C12.9104 10.3037 12.9436 10.2969 12.9745 10.2837C13.0055 10.2706 13.0334 10.2513 13.0568 10.2272L21.7968 1.45715C22.1335 1.15262 22.5745 0.989155 23.0284 1.00056C23.4823 1.01196 23.9144 1.19736 24.2355 1.51842C24.5565 1.83948 24.7419 2.27164 24.7533 2.72555C24.7648 3.17945 24.6013 3.62038 24.2968 3.95715L14.7568 13.5272C14.254 14.0161 13.578 14.2858 12.8768 14.2772Z"
                fill="white"
                stroke="white"
              />
            </svg>
          </div>
        </div>
        {/* Thread Animation */}
        {/* <div className="lg:mt-[-400px] md:mt-[-400px] mt-[-600px]">
          <div style={{ width: "100%", height: "800px", position: "relative" }}>
            <Threads
              amplitude={1}
              distance={0}
              enableMouseInteraction={false}
            />
          </div>
        </div> */}
        {/* About Section */}
        <div
          ref={aboutRef}
          className="flex flex-col justify-start items-center py-16 md:py-24 lg:py-28 xl:py-32 text-4xl font-semibold"
        >
          <div className="py-16">
            <SplitText
              text="About"
              className=""
              delay={150}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
              onLetterAnimationComplete={undefined}
            />
          </div>
          <div className="flex flex-row gap-4">
            <div className="flex flex-col items-end">
              <div className="grayscale hover:grayscale-0 transition-all duration-300 ease-in-out">
                <Image
                  className="rounded-lg appear-left-to-right "
                  alt=""
                  src="/profile.png"
                  width="300"
                  height="360"
                  priority
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
                <div className="p-1 text-sm font-normal text-foreground">
                  Ohio, USA
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div>
                {/* Skill Section */}
                <div className="p-4 pt-0 text-3xl">Skills</div>
                {/* First Row */}
                <div className="appear-right-to-left flex flex-row flex-wrap pb-2 gap-2 px-4 font-normal text-sm ">
                  <Badge icon="javascript" label="javascript" />
                  <Badge icon="nextjs" label="next.js" />
                </div>
                {/* Second Row */}
                <div className="appear-right-to-left flex flex-row flex-wrap pb-2 gap-2 px-4 font-normal text-sm ">
                  <Badge icon="react" label="react" />
                  <Badge icon="nodejs" label="node.js" />
                </div>
                {/* Third Row */}
                <div className="appear-right-to-left flex flex-row pb-2 gap-2 px-4 font-normal text-sm ">
                  <Badge icon="aws" label="AWS Solutions Architect" />
                </div>
                {/* Tool Section */}
                <div className="p-4 pt-8 text-3xl">Tools</div>
                {/* First Row */}
                <div className="appear-right-to-left flex flex-row flex-wrap pb-2 gap-2 px-4 font-normal text-sm ">
                  <Badge icon="figma" label="figma" />
                  <Badge icon="framer" label="framer" />
                </div>
                <div className="appear-right-to-left flex flex-row flex-wrap pb-2 gap-2 px-4 font-normal text-sm ">
                  <Badge icon="notion" label="notion" />
                  <Badge icon="slack" label="slack" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-16"></div>
        {/* Project Section */}
        <div
          ref={projectsRef}
          className=" flex flex-row justify-center py-16 text-4xl font-semibold"
        >
          <SplitText
            text="Projects"
            className=""
            delay={150}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
            onLetterAnimationComplete={undefined}
          />
        </div>

        <div
          id="card container"
          className="flex flex-col px-8 sm:px-16 md:px-24 lg:px-28 xl:px-32"
        >
          <div
            id="firstRow"
            className="flex flex-col lg:flex-row xl:flex-row justify-between gap-8 lg:gap-12 xl:gap-16"
          >
            {/* Project Card 1 */}
            <Link
              href="https://pathway-ten.vercel.app"
              className="h-full w-full appear-down-to-up"
            >
              <div className="card-wrapper-1 overflow-hidden bg-gray-800 rounded-lg relative w-full h-72 hover:scale-105 transition-transform ease-in-out duration-300">
                <div className="card-content absolute rounded-lg bg-background top-[1.5px] left-[1.5px] w-[calc(100%-3px)] h-[calc(100%-3px)] ">
                  <div className="flex flex-col justify-between rounded-lg h-[calc(100%-8px)] bg-custom-gradient m-1">
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
            {/* Project Card 2 */}
            <Link
              href="https://hackai-chatbot.vercel.app/"
              className="h-full w-full appear-down-to-up"
            >
              <div className="card-wrapper-2 overflow-hidden bg-gray-800 rounded-lg relative w-full h-72 hover:scale-105 transition-transform ease-in-out duration-300">
                <div className="card-content absolute rounded-lg bg-background top-[1.5px] left-[1.5px] w-[calc(100%-3px)] h-[calc(100%-3px)]">
                  <div className="flex flex-col justify-between rounded-lg h-[calc(100%-8px)] bg-custom-gradient m-1">
                    <div className="p-4">
                      <Image
                        src="/title2.png"
                        alt=""
                        width="200"
                        height="110"
                      />
                    </div>
                    <div>
                      <div className="flex flex-row">
                        <div className="p-2 px-4 font-semibold text-lg">
                          Mental Health AI Assistant
                        </div>
                        <Image alt="" src="/link.svg" width={24} height={24} />
                      </div>
                      <div className="p-4 pt-0 text-gray-400 text-sm">
                        Mental Health AI Assistant for AI Hackathon.
                        <br />
                        Google Gemini + Nextjs
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            {/* Project Card 3 */}
            <Link
              href="https://www.figma.com/design/1b3RBU32f1oHPeNA8xBiBI/Website-Design?node-id=0-1&t=J4xheU1tpxkTzcBF-1"
              className="h-full w-full appear-down-to-up"
            >
              <div className="card-wrapper-3 overflow-hidden bg-gray-800 rounded-lg relative w-full h-72 hover:scale-105 transition-transform ease-in-out duration-300">
                <div className="card-content absolute rounded-lg bg-background top-[1.5px] left-[1.5px] w-[calc(100%-3px)] h-[calc(100%-3px)]">
                  <div className="flex flex-col justify-between rounded-lg h-[calc(100%-8px)] bg-custom-gradient m-1">
                    <div className="p-4">
                      <Image
                        src="/title3.png"
                        alt=""
                        width="200"
                        height="110"
                      />
                    </div>
                    <div>
                      <div className="flex flex-row">
                        <div className="p-2 px-4 font-semibold text-lg">
                          Figma Designs
                        </div>
                        <Image alt="" src="/link.svg" width={24} height={24} />
                      </div>
                      <div className="p-4 pt-0 text-gray-400 text-sm">
                        A list of website design template made using figma.
                        Seamlessly convertable to Framer.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="py-16 "></div>
        {/* Contact Section */}
        <div className="flex flex-col justify-start items-center py-16 md:py-24 lg:py-28 xl:py-32 text-4xl font-semibold">
          <div className="py-16" ref={contactRef}>
            <SplitText
              text="Contact"
              className=""
              delay={150}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
              onLetterAnimationComplete={undefined}
            />
          </div>
          <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row gap-8 lg:gap-12 xl:gap-16">
            {/* First Element */}
            <a href={mailtoLink}>
              <div className=" relative flex flex-col w-60 pb-2 gap-2 group overflow-hidden">
                <Divider />
                <div
                  ref={elementRef}
                  className={`absolute inset-0 bg-gray-200 z-20 transform duration-500 ${
                    isContactVisible ? "-translate-y-full" : "translate-y-0"
                  }`}
                ></div>
                <div className="flex flex-row justify-between items-center group-hover:px-4 transition-all duration-300">
                  <div className="z-10 text-2xl font-medium transition-all duration-300 group-hover:text-black ">
                    Email
                  </div>
                  <svg
                    className="z-10 fill-foreground group-hover:fill-background transition-all duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 256 256"
                  >
                    <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path>
                  </svg>
                </div>
                <div className="z-10 text-base font-normal group-hover:px-4 text-gray-400 group-hover:text-black transition-all duration-300">
                  junnapark@gmail.com
                </div>
                <div className="absolute inset-[1px] bg-gray-200 transition-transform duration-500 ease-in-out transform -translate-y-full group-hover:translate-y-0"></div>
              </div>
            </a>
            {/* Second Element */}
            <a href="https://github.com/jjpp43">
              <div className=" relative flex flex-col w-60 pb-2 gap-2 group overflow-hidden">
                <Divider />
                <div
                  ref={elementRef}
                  className={`absolute inset-0 bg-gray-200 z-20 transform duration-500 ${
                    isContactVisible ? "-translate-y-full" : "translate-y-0"
                  }`}
                ></div>
                <div className="flex flex-row justify-between items-center group-hover:px-4 transition-all duration-300">
                  <div className="z-10 text-2xl font-medium transition-all duration-300 group-hover:text-black ">
                    Github
                  </div>
                  <svg
                    className="z-10 fill-foreground group-hover:fill-background transition-all duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 256 256"
                  >
                    <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path>
                  </svg>
                </div>
                <div className="z-10 text-base font-normal group-hover:px-4 text-gray-400 group-hover:text-black transition-all duration-300">
                  jjpp43
                </div>

                <div className="absolute inset-[1px] bg-gray-200 transition-transform duration-500 ease-in-out transform -translate-y-full group-hover:translate-y-0"></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
