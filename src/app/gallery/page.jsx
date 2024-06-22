import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen px-12 py-24 ">
      <h3 className="text-3xl mb-12">Gallery Page</h3>
      {/* <Image
        src="/Images/pexels-archie-binamira-913215.jpg"
        alt=""
        width={"1920"}
        height={"1080"}
      /> */}
      <div className="">
        {[1, 2, 3, 4]?.map((img) => (
          <Image
            key={img}
            src={`/Images/${img}.jpg`}
            alt=""
            width={1920}
            height={1080}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
