import React from "react";
import PulseLoader from "react-spinners/PulseLoader";
import Image from "next/image";

function LoadingScreen() {
  return (
    <div className="bg-[#07081a] h-screen flex flex-col items-center justify-center text-center py-8">
      <div className="flex items-center space-x-2 mb-10">
        <Image
          src="https://i.imgur.com/BCqQUK1.png"
          width={80}
          height={70}
          alt=""
         
        />
        <h1 className="text-lg text-white font-bold">
          Entering the Galaxy of Winning Stars...
        </h1>
      </div>

      <PulseLoader color="white" size={20} />
    </div>
  );
}

export default LoadingScreen;
