import Image from "next/image";
import HomePageAllCategories from "../components/Categories/HomePageAllCategories";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <div className="w-full h-full">
        <Navbar />
        <HomePageAllCategories />
        <Footer />
      </div>
    </>
  );
}
