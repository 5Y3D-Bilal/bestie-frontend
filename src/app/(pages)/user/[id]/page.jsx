import React from "react";
import axios from "axios";
import UserClientSide from "../../../../components/User/UserClientSide";


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
