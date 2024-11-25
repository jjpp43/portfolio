"use client";
import { TypeAnimation } from "react-type-animation";
import MemeGenerator from "../components/memeGenerator";

export default function PlaygroundPage() {
  return (
    <div className="w-screen bg-background pt-32">
      <div className="flex flex-col p-8 sm:px-20 sm:p-10 md:px-24 md:p-12 lg:px-28 lg:p-14 xl:px-32 xl:p-16">
        <div className="flex flex-row items-center justify-start">
          <div className="text-foreground text-4xl font-semibold">
            {/* Animated text */}
            <div className="flex flex-row">
              <p>{"<"}</p>
              <TypeAnimation
                cursor={false}
                sequence={["Playground", 1000]}
                speed={1}
                style={{ display: "inline-block", whiteSpace: "nowrap" }}
                repeat={1}
                className=" text-customYellow"
              />
              <p>{">"}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="w-[1px] m-2 h-auto bg-gray-400"></div>
          <div className="flex flex-col p-16">
            <div className=" flex flex-row text-3xl font-semibold py-2">
              {"<"}
              <p className="text-customBlue">Meme Generator</p>
              {">"}
            </div>
            <MemeGenerator />
            <div className=" flex flex-row text-3xl font-semibold py-2">
              {"</"}
              <p className="text-customBlue">Meme Generator</p>
              {">"}
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start">
          <div className="text-foreground text-4xl font-semibold ">
            {/* Animated text */}
            <div className="flex flex-row">
              <p>{"</"}</p>
              <TypeAnimation
                cursor={false}
                sequence={["Playground", 1000]}
                speed={1}
                style={{ display: "inline-block", whiteSpace: "nowrap" }}
                repeat={1}
                className=" text-customYellow"
              />
              <p>{">"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
