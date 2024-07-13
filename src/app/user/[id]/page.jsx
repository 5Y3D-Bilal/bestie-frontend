import React from "react";
import axios from "axios";
import UserClientSide from "../../../components/User/UserClientSide";

export async function generateStaticParams() {
  try {
    const res = await axios.get("http://localhost:4000/api/user");
    const stores = res.data;

    return stores.map((store) => ({
      id: store._id.toString(),
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

// SSR RENDERING FOR GETTING LOGINED USER DATA
const getUser = async (id) => {
  const res = await axios
    .get(`http://localhost:4000/api/user/${id}`)
    .then((res) => {
      return res.data;
    });
  return res;
};

async function page({params}) {
  const userData = await getUser(params.id);

  return (
    <div>
      <UserClientSide userData={userData} />
    </div>
  );
}

export default page;
