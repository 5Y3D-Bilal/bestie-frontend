import Footer from "@/components/Footer";
import Navbar from "../../../components/Navbar";
import StoresClientSideComponent from "../../../components/StoreClientSideComponents/StoresClientSideComponent";
import React from "react";
import axios from "axios";

// SSR RENDERING FOR GETTING ALL STORES
const getAllStores = async () => {
  const res = await axios
    .get(`https://besty-backend.vercel.app/api/stores`)
    .then((res) => {
      return res.data;
    });
  return res;
};

// SSR RENDERING FOR GETTING ALL STORES
const getAllVerifiedStores = async () => {
  const res = await axios
    .get(`https://besty-backend.vercel.app/api/stores/verified`)
    .then((res) => {
      return res.data;
    });
  return res;
};

async function Stores() {
  const storesData = await getAllStores();
  const verifiedStores = await getAllVerifiedStores();
  return (
    <>
      <Navbar />
      <StoresClientSideComponent
        storesData={storesData}
        verifiedStores={verifiedStores}
      />
      <Footer />
    </>
  );
}

export default Stores;
