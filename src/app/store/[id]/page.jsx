import axios from "axios";
import React from "react";
import SingleStoreClientSideComponent from "../../../components/StoreClientSideComponents/SingleStoreClientSideComponent";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// SSR RENDERING FOR GETTING STORE DATA
const getStore = async (id) => {
  const res = await axios
    .get(`http://localhost:4000/api/store/${id}`)
    .then((res) => {
      return res.data;
    });
  return res;
};

async function fetchCurrentUser(cookie) {
  try {
    const res = await axios.get("http://localhost:4000/api/currentuser", {
      headers: {
        Cookie: cookie || "", // Pass the cookies to the server request
      },
      withCredentials: true,
    });
    return res.data?.currentUser;
  } catch (error) {
    console.error("Error fetching current user", error);
    return null;
  }
}

async function page({ params, req }) {
  const { id } = params;
  const getStoree = await getStore(id);
  const cookie = req ? req.headers.cookie : "";
  const currentUser = await fetchCurrentUser(cookie);
  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto mt-36 mb-10">
        <SingleStoreClientSideComponent
          storeData={getStoree}
          userData={currentUser}
        />
      </div>
      <Footer />
    </div>
  );
}

export default page;
