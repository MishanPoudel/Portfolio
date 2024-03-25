import Image from "next/image";
import React from "react";

// const self1 = require("/public/self1.jpeg");
// const self2 = require("/public/self2.jpeg");
// const self3 = require("/public/self3.jpeg");

let self1 =
  "https://i.pinimg.com/736x/17/a9/af/17a9af82ac1dda57893544af6e1c2c6a.jpg";
let self2 =
  "https://i.pinimg.com/736x/92/4b/f5/924bf5338641f57f48183da4eccffdf3.jpg";
let self3 =
  "https://i.pinimg.com/736x/38/15/f6/3815f6bf5f1c669d85df1135d8db720a.jpg";

const RenderImage = () => {
  return (
    <>
      <div className="w-full flex justify-center font-extralight select-none">
        *supposed to be self pic but anime pic for now*
      </div>
      <div className="grid grid-cols-3 gap-4 py-4 select-none">
        <Image
          src={self2}
          width="3072"
          height="4096"
          alt="Self Photo 2"
          className="rounded-2xl"
        />
        <Image
          src={self1}
          width="3072"
          height="4096"
          alt="Self Photo 1"
          className="rounded-2xl"
        />
        <Image
          src={self3}
          width="3072"
          height="4096"
          alt="Self Photo 3"
          className="rounded-2xl"
        />
      </div>
    </>
  );
};

export default RenderImage;
