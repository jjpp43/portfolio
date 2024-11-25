import React, { useState, useEffect } from "react";
import Image from "next/image";

const MemeGenerator = () => {
  const memes = [
    "/meme1.png",
    "/meme2.png",
    "/meme3.png",
    "/meme4.png",
    "/meme5.png",
    "/meme6.png",
    "/meme7.png",
    "/meme8.png",
  ]; // Replace with your image paths

  const [currentMeme, setCurrentMeme] = useState<string | null>(null);
  const [finalMeme, setFinalMeme] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    if (!isGenerating) return;

    let interval: NodeJS.Timeout | null = null;
    let timeout: NodeJS.Timeout | null = null;

    // Start cycling memes
    interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * memes.length);
      setCurrentMeme(memes[randomIndex]);
    }, 100);

    // Stop cycling after 3 seconds
    timeout = setTimeout(() => {
      if (interval) clearInterval(interval); // Clear the interval
      const randomIndex = Math.floor(Math.random() * memes.length);
      setFinalMeme(memes[randomIndex]); // Set the final meme
      setIsGenerating(false); // Reset generation state
    }, 200);

    // Cleanup on component unmount or `isGenerating` change
    return () => {
      if (interval) clearInterval(interval);
      if (timeout) clearTimeout(timeout);
    };
  }, [isGenerating, memes]);

  const startGeneration = () => {
    if (isGenerating) return; // Prevent multiple clicks
    setCurrentMeme(null); // Reset current meme
    setFinalMeme(null); // Reset final meme
    setIsGenerating(true); // Start generating
  };

  return (
    <div className="flex flex-row">
      <div className="w-[1px] h-full bg-gray-400"></div>
      <div className="flex flex-col items-center justify-center h-full bg-background py-16 px-20">
        <div className="w-96 h-96 bg-background flex items-center justify-center">
          {finalMeme ? (
            <img
              src={finalMeme}
              alt="Final Meme"
              className="object-contain w-full h-full"
            />
          ) : currentMeme ? (
            <img
              src={currentMeme}
              alt="Random Meme"
              className="object-contain w-full h-full"
            />
          ) : (
            <Image
              alt="Initial Screen"
              src="/init.png"
              height={400}
              width={400}
            ></Image>
          )}
        </div>

        <button
          onClick={startGeneration}
          disabled={isGenerating}
          className={`mt-4 px-4 py-2 rounded bg-foreground text-background font-semibold ${
            isGenerating ? "opacity-60 cursor-not-allowed" : "hover:opacity-85"
          }`}
        >
          {isGenerating ? "Generating..." : "Generate Meme"}
        </button>
      </div>
    </div>
  );
};

export default MemeGenerator;
