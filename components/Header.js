import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div>
      <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
        {/* Left */}
        <div className=" cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
            layout="fill"
            className="object-contain"
          />
        </div>
        <div className=" cursor-pointer h-24 w-10 relative  lg:hidden">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/5/58/Instagram-Icon.png"
            layout="fill"
            className="object-contain"
          />
        </div>
        {/* Middle */}
        {/* Right */}
        <h1>Right Side</h1>
      </div>
    </div>
  );
}
