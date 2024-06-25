import React from "react";
import { Headland_One } from "next/font/google";

const headLand = Headland_One({ weight: ["400"], subsets: ["latin"] });

export const metadata = {
  title: "About ",
  description: "About page",
  keywords: ["about", "about page"],
};

// const getTime = async () => {
//   const res = await fetch("http://localhost:3000/time",{next: {revalidate: 5}});
//   const data = await res.json();
//   return data.currentTime;
// };

const Page = async () => {
  // const currentTime = await getTime();
  return (
    <div className={`${headLand.className} min-h-screen px-12 py-24`}>
      <h1 className="text-3xl">About Page</h1>
      {/* <h3 className="text-3xl text-red-400 mt-12">Time: {currentTime} </h3> */}
    </div>
  );
};

export default Page;
