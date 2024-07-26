"use client";
import axios from "axios";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { FaComment, FaLocationDot, FaShareNodes, FaStar } from "react-icons/fa6";
import { GrFormNextLink } from "react-icons/gr";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";

const getCurrentUser = async () => {
  const jwtToken = localStorage.getItem("token");
  try {
    const response = await axios.get("https://besty-backend.vercel.app/api/currentuser", {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });

    const currentUser = response.data;
    return currentUser;
  } catch (error) {
    console.error("Failed to fetch current user:", error);
    throw error;
  }
};

// SSR RENDERING FOR GETTING LOGINED USER DATA
const getUserStore = async (id) => {
  try {
    const res = await axios.get(`https://besty-backend.vercel.app/api/userStore/${id}`, {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching stores:", error);
    throw error;
  }
};

function CurrentUserFeeds() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [liked, setLiked] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [storeData, setStoreData] = useState(null);
  const modileProducts = [
    {
      id: 1,
      name: "Galaxy S21",
      model: "SM-G991B",
      price: 799.99,
      city: "Lahore",

      image:
        "https://www.cnet.com/a/img/resize/7f200ddcfc7e2e3b2e5fabdb62050058f6f00b25/hub/2021/01/14/6d35fb74-a413-4726-9668-e2fc754f44cb/samsung-galaxy-s21-06173.jpg?auto=webp&fit=crop&height=1200&width=1200",
      date: "2021-01-29",
      description:
        "The Galaxy S21 features a 6.2-inch display, triple rear cameras, and the Exynos 2100 processor.",
    },
    {
      name: "iPhone 13",
      id: 2,
      model: "A2633",
      price: 899.0,
      date: "2021-09-24",
      city: "Lahore",
      image:
        "https://static-01.daraz.pk/p/d897087a1022be8d2b368903f2470ad0.jpg_750x750.jpg_.webp",
      description:
        "iPhone 13 offers a new design, improved cameras, and the powerful A15 Bionic chip.",
    },
    {
      id: 3,
      name: "Pixel 6",
      model: "GA01341-US",
      price: 599.0,
      city: "Lahore",
      date: "2021-10-28",
      image:
        "https://mobiletrade.pk/wp-content/uploads/2023/12/Pixel-6-Pro-2.jpg.webp",
      description:
        "Google Pixel 6 comes with a 6.4-inch display, Google Tensor processor, and advanced camera features.",
    },
    {
      id: 4,
      name: "Pixel 6",
      model: "GA01341-US",
      price: 599.0,
      city: "Lahore",
      date: "2021-10-28",
      image:
        "https://mobiletrade.pk/wp-content/uploads/2023/12/Pixel-6-Pro-2.jpg.webp",
      description:
        "Google Pixel 6 comes with a 6.4-inch display, Google Tensor processor, and advanced camera features.",
    },
    {
      id: 5,
      name: "Pixel 6",
      model: "GA01341-US",
      price: 599.0,
      city: "Lahore",
      date: "2021-10-28",
      image:
        "https://mobiletrade.pk/wp-content/uploads/2023/12/Pixel-6-Pro-2.jpg.webp",
      description:
        "Google Pixel 6 comes with a 6.4-inch display, Google Tensor processor, and advanced camera features.",
    },
    {
      id: 6,
      name: "Pixel 6",
      model: "GA01341-US",
      price: 599.0,
      city: "Lahore",
      date: "2021-10-28",
      image:
        "https://mobiletrade.pk/wp-content/uploads/2023/12/Pixel-6-Pro-2.jpg.webp",
      description:
        "Google Pixel 6 comes with a 6.4-inch display, Google Tensor processor, and advanced camera features.",
    },
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState(modileProducts);
  useEffect(() => {
    const fetchCurrentUser = async () => {
      const user = await getCurrentUser();
      setCurrentUser(user);
      const getUserStoree = await getUserStore(user.id);
      setStoreData(getUserStoree);
      setIsFollowing(getUserStoree.map((i) => i?.followers.includes(user?.id)));
    };
    fetchCurrentUser();
  }, []);
  console.log(storeData);
  const joinData = moment(storeData?.map((i) => i.createdAt)).format(
    "MMMM YYYY"
  );

  const searchQueryFunction = (e) => {
    e.preventDefault();

    function searchByName(name) {
      return modileProducts.filter((product) =>
        product.name.toLowerCase().includes(name.toLowerCase())
      );
    }

    const results = searchByName(searchTerm);
    setResults(results);
  };

  const HandleSubmitFollow = async () => {
    setIsFollowing(true);
    try {
      const response = await axios.put(
        "https://besty-backend.vercel.app/api/store/follow",
        {
          id: currentUser.id,
          storeId: storeData._id,
        },
        { withCredentials: true }
      );

      router.refresh();
    } catch (error) {
      console.error("Error following store", error);
      setIsFollowing(false); // Revert the state if request fails
    }
  };

  const HandleSubmitUnFollow = async () => {
    setIsFollowing(false);
    try {
      const response = await axios.put(
        "https://besty-backend.vercel.app/api/store/unfollow",
        {
          id: currentUser.id,
          storeId: storeData._id,
        },
        { withCredentials: true }
      );

      router.refresh();
    } catch (error) {
      console.error("Error unfollowing store", error);
      setIsFollowing(true); // Revert the state if request fails
    }
  };

  const HandleSubmitLike = async () => {
    setLiked(true);
    try {
      const response = await axios.put(
        "https://besty-backend.vercel.app/api/store/like",
        {
          id: currentUser.id,
          storeId: storeData._id,
        },
        { withCredentials: true }
      );

      router.refresh();
    } catch (error) {
      console.error("Error following store", error);
      setLiked(false); // Revert the state if request fails
    }
  };

  const HandleSubmitUnLike = async () => {
    setLiked(false);
    try {
      const response = await axios.put(
        "https://besty-backend.vercel.app/api/store/unlike",
        {
          id: currentUser.id,
          storeId: storeData._id,
        },
        { withCredentials: true }
      );

      router.refresh();
    } catch (error) {
      console.error("Error following store", error);
      setLiked(true); // Revert the state if request fails
    }
  };

  return (
    <div>
      {storeData?.map((storeData) => (
        <div
          className="w-full md:border-[0.5px] lg:border-[0.5px] border-gray-300 rounded-t-lg"
          key={storeData._id}
        >
          {storeData.storeBanner ? (
            <div className="relative w-full h-[340px]">
              <Image
                src={storeData.storeBanner}
                alt="Store Banner"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="w-full lg:rounded-t-md"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          ) : (
            <div className="w-full h-[350px] bg-[#9748FF] rounded-t-lg"></div>
          )}
          <div className="">
            <div className="flex items-center justify-between m-5 lg:p-5">
              <div className="flex md:flex-row flex-col items-start space-x-3 lg:items-center ">
                <Image
                  src={storeData.storeLogo}
                  className="w-[100px] h-[100px] rounded-full"
                  alt="logo"
                  width={300}
                  height={300}
                />
                <div className="flex flex-col space-y-[0.5px]">
                  <h1 className="text-[24px] text-gray-800">
                    {storeData.storeName}
                  </h1>
                  <h5 className="text-[16px] text-gray-700">
                    Published Ads {storeData.publishedProducts.length}
                  </h5>
                  <h5 className="text-[12px] text-gray-700">
                    Member Since {joinData}
                  </h5>
                  <h6 className="text-[12px] text-gray-700">
                    {storeData.followers.length} Followers
                  </h6>
                  <div className="flex space-x-1 items-center text-[14px] text-gray-800">
                    <h6>Ratings & Reviews</h6>
                    <GrFormNextLink />
                  </div>
                </div>
              </div>
            </div>
            <div className="px-5 mb-5 lg:px-10 lg:flex-row flex-col items-start flex lg:items-center space-y-3 lg:space-y-0 w-full lg:space-x-12">
              <div className="flex w-full lg:w-1/2 justify-between items-center">
                <button
                  className={`flex 
                  bg-gray-100 text-gray-800
                   rounded-full space-x-1 py-1 px-3 text-[12px]  items-center`}
                >
                  <AiFillLike />
                  <span>{storeData.likes.length}</span>
                </button>
                <button className="flex bg-gray-100 rounded-full space-x-1 py-1 px-3 text-[12px] text-gray-800 items-center">
                  <FaShareNodes /> <span>Share</span>
                </button>
                <button className="flex bg-gray-100 rounded-full space-x-1 py-1 px-3 text-[12px] text-gray-800 items-center">
                  <FaStar /> <span>e</span>
                </button>
                <button className="flex bg-gray-100 rounded-full space-x-1 py-1 px-3 text-[12px] text-gray-800 items-center">
                  <HiBuildingOffice2 /> <span>{storeData.storeType}</span>
                </button>
              </div>
              <div className="w-full lg:w-1/2">
                <form
                  onSubmit={searchQueryFunction}
                  className="bg-white border-[0.5px] px-2 border-gray-200 rounded-full py-1 flex items-center"
                >
                  <IoSearchOutline size={20} />
                  <input
                    type="text"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="focus:outline-none mx-2 w-full"
                    placeholder="search in store"
                  />
                  <button className="bg-[#9748FF] text-white text-[14px] py-1 px-2 rounded-full">
                    search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="mt-5">
      {modileProducts.map((item) => (
        <div
          key={item.id}
          className="border-gray-400 border-[0.5px] w-full p-5 mb-5 h-[760px] lg:w-full rounded-md"
        >
          <div className="flex justify-between mb-5 items-center">
            <div className="flex items-center  space-x-2">
              <div className="flex items-center">
                <div className="border-white border-[6px] relative rounded-full w-[20px] h-[20px] lg:w-[50px] lg:h-[50px]">
                  <Image
                    src={item.image}
                    alt="UserProfileImage"
                    style={{ objectFit: "cover" }}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 10vw"
                    className="rounded-full"
                    priority
                  />
                </div>

                <div className="">
                  <h4 className="text-[17px]">{item.name}</h4>
                  <h6 className="text-[14px]">{item.date}</h6>
                </div>
              </div>
            </div>
            <BsThreeDots className="cursor-pointer" />
          </div>
          <div className=" " key={item._id}>
            <div className="relative w-full h-[440px]">
              <Image
                src={item.image}
                onClick={() => handleToggleBanner(item.image)}
                alt="Store Logo"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="w-full rounded-md cursor-pointer"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="mt-3">
              <div>
                <Link
                  href={"/"}
                  className="flex items-center bg-gray-100 rounded-md p-2 space-x-3"
                >
                  <div className=" relative rounded-full w-[20px] h-[20px] lg:w-[50px] lg:h-[50px]">
                    <Image
                      src={item.image}
                      alt="UserProfileImage"
                      style={{ objectFit: "cover" }}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 10vw"
                      className="rounded-md"
                      priority
                    />
                  </div>
                  <div className="text-[12px]">
                    <h6 className="font-bold">{item.name}</h6>
                    <h6 className="font-bold text-red-600">Rs {item.price}</h6>
                    <div className="flex items-center space-x-1">
                      <FaLocationDot /> <span>{item.city}</span>
                    </div>
                  </div>
                </Link>
                <p className="mt-1">{item.description}</p>
              </div>
              <div className="mt-10">
                <hr />
                <div className="flex justify-between items-center mt-2 text-gray-800 text-[14px]">
                  <div className="flex items-center space-x-1 cursor-pointer">
                    <AiFillLike /> <span>0 Likes</span>
                  </div>
                  <div className="flex items-center space-x-1 cursor-pointer">
                    <FaComment />
                    <span>Comments</span>
                  </div>
                  <div
                    onClick={() => handleOpenShare(item.name)}
                    className="flex items-center space-x-1 cursor-pointer"
                  >
                    <FaShareNodes />
                    <span>Share</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default CurrentUserFeeds;
