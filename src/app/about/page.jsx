import React from "react";
import { Headland_One } from "next/font/google";

const headLand = Headland_One({ weight: ["400"], subsets: ["latin"] });

export const metadata = {
  title: "About ",
  description: "About page",
  keywords: ["about", "about page"],
};

const Page = () => {
  return (
    <div className={`${headLand.className} min-h-screen px-12 py-24`}>
      <h1>About Page</h1>
    </div>
  );
};

export default Page;
