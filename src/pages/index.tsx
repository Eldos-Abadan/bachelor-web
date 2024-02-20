import Image from "next/image";
import { Inter } from "next/font/google";
import { text } from "stream/consumers";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-screen h-[80vh] bg-white flex flex-row">
      <div className="w-3/5 h-full bg-primary"></div>
      <div className="w-2/5 h-full bg-black">X</div>
    </div>
  );
}