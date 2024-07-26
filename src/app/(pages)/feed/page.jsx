import Footer from "@/components/Footer";
import Navbar from "../../../components/Navbar";
import React from "react";
import FeedClientSideComponent from "../../../components/Feed/FeedClientSideComponent";
import axios from "axios";

// SSR RENDERING FOR GETTING ALL STORES
const getAllStores = async () => {
  try {
    const res = await axios.get("https://besty-backend.vercel.app/api/stores", {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching stores:", error);
    throw error;
  }
};


async function Feed() {
  const storesData = await getAllStores();
  return (
    <div>
      <Navbar />
      <FeedClientSideComponent storesData={storesData} />
    </div>
  );
}

export default Feed;
