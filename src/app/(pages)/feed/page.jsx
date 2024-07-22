import Footer from "@/components/Footer";
import Navbar from "../../../components/Navbar";
import React from "react";
import FeedClientSideComponent from "../../../components/Feed/FeedClientSideComponent";

function Feed() {
  return (
    <div>
      <Navbar />
      <FeedClientSideComponent />
    </div>
  );
}

export default Feed;
