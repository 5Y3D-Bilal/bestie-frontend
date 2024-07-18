import React from "react";
import axios from "axios";
import UserClientSide from "../../../../components/User/UserClientSide";

// SSR RENDERING FOR GETTING LOGINED USER DATA
const getUser = async (id) => {
  try {
    const res = await axios.get(
      `http://localhost:4000/api/user/${id}`,
      {
        withCredentials: true,
      }
    );
    return res.data;
  } catch (error) {
    console.error("Error fetching stores:", error);
    throw error;
  }
};

async function page({ params }) {
  const userData = await getUser(params.id);

  return (
    <div>
      <UserClientSide userData={userData} />
    </div>
  );
}

export default page;
