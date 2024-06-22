import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: ["400", "500", "700" , '900'], subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Next Meals",
    template: "%s | Next Meals",
  },
  description: "Super Powerful Next Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar></Navbar>
        {children}
        <div className="bg-teal-500 p-3">Footer</div>
      </body>
    </html>
  );
}
