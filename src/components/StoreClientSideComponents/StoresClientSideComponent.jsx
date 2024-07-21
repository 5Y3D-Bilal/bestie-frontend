"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RxText } from "react-icons/rx";
import { VscVerifiedFilled } from "react-icons/vsc";

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

const getFollowedStores = async (followedStores) => {
  try {
    const res = await axios.post(
      "https://besty-backend.vercel.app/api/store/getfollowedstore",
      { storeIds: followedStores },
      { withCredentials: true }
    );
    return res.data;
  } catch (error) {
    console.error("Error fetching followed stores", error);
    return null;
  }
};

function StoreClientSideComponent({ storesData, verifiedStores }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [followedStoresData, setFollowedStoresData] = useState([]);
  const [visibleStores, setVisibleStores] = useState(4); // Add this state to control the number of visible stores

  useEffect(() => {
    const fetchCurrentUser = async () => {
      const user = await getCurrentUser();
      setCurrentUser(user);

      if (user && user.followedStores.length > 0) {
        const followedStores = await getFollowedStores(user.followedStores);
        setFollowedStoresData(followedStores);
      }
    };
    fetchCurrentUser();
  }, []);
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState(storesData);
  const sellerCity = [
    "Lahore",
    "Faisalabad",
    "Rawalpindi",
    "Gujranwala",
    "Multan",
    "Sialkot",
    "Sargodha",
    "Bahawalpur",
    "Sheikhupura",
    "Rahim Yar Khan",
    "Jhelum",
    "Gujrat",
    "Sahiwal",
    "Okara",
    "Kasur",
    "Chiniot",
    "Mianwali",
    "Hafizabad",
    "Khanewal",
    "Dera Ghazi Khan",
    "Mandi Bahauddin",
    "Attock",
    "Bhakkar",
    "Toba Tek Singh",
    "Layyah",
    "Vehari",
    "Chakwal",
    "Narowal",
    "Rajanpur",
    "Lodhran",
    "Pakpattan",
    "Muzaffargarh",
    "Khushab",
    "Jhang",
    "Nankana Sahib",
    "Muzaffarabad",
    "Mirpur",
    "Kotli",
    "Bhimber",
    "Rawalakot",
    "Bagh",
    "Neelum",
    "Hattian",
    "Poonch",
    "Sudhanoti",
    "Gilgit",
    "Skardu",
    "Hunza",
    "Nagar",
    "Ghanche",
    "Ghizer",
    "Diamer",
    "Astore",
    "Quetta",
    "Khuzdar",
    "Turbat",
    "Chaman",
    "Gwadar",
    "Sibi",
    "Jaffarabad",
    "Naseerabad",
    "Loralai",
    "Kharan",
    "Zhob",
    "Dera Bugti",
    "Ziarat",
    "Mastung",
    "Kalat",
    "Awaran",
    "Lasbela",
    "Kech",
    "Panjgur",
    "Pishin",
    "Qila Abdullah",
    "Qila Saifullah",
    "Kohlu",
    "Barkhan",
    "Washuk",
    "Harnai",
    "Sherani",
    "Peshawar",
    "Abbottabad",
    "Mardan",
    "Mingora",
    "Mansehra",
    "Kohat",
    "Dera Ismail Khan",
    "Swabi",
    "Bannu",
    "Charsadda",
    "Nowshera",
    "Swat",
    "Lakki Marwat",
    "Haripur",
    "Karak",
    "Malakand",
    "Dir",
    "Hangu",
    "Batagram",
    "Tank",
    "Buner",
    "Shangla",
    "Upper Dir",
    "Lower Dir",
    "Chitral",
    "Kohistan",
    "Torghar",
    "Orakzai",
    "Karachi",
    "Hyderabad",
    "Sukkur",
    "Larkana",
    "Nawabshah (Shaheed Benazirabad)",
    "Mirpur Khas",
    "Jacobabad",
    "Shikarpur",
    "Khairpur",
    "Thatta",
    "Dadu",
    "Badin",
    "Umerkot",
    "Ghotki",
    "Tando Adam",
    "Tando Muhammad Khan",
    "Kashmore",
    "Jamshoro",
    "Matiari",
    "Sanghar",
    "Naushahro Feroze",
    "Qambar Shahdadkot",
    "Tharparkar",
    "Sujawal",
  ];

  const Categories = ["Shop", "ShowRoom", "WholeSaler", "Distributor"];

  const [values, setValues] = useState({
    fillterCity: "",
    fillterCategories: "",
  });

  // Searching for stores
  const searchQueryFunction = (e) => {
    e.preventDefault();

    function searchByName(name) {
      return storesData.filter((product) =>
        product.storeDescription.toLowerCase().includes(name.toLowerCase())
      );
    }

    const results = searchByName(searchTerm);
    setResults(results);
  };

  // Filtering StoreData
  useEffect(() => {
    const filterStores = () => {
      let filtered = storesData;
      if (values.fillterCity) {
        if (values.fillterCity === "All Cities") {
          filtered = storesData;
        } else {
          filtered = filtered.filter(
            (store) => store.sellerCity === values.fillterCity
          );
        }
      }
      if (values.fillterCategories) {
        if (values.fillterCategories === "All Categories") {
          filtered = storesData;
        } else {
          filtered = filtered.filter(
            (store) => store.storeCategories === values.fillterCategories
          );
        }
        console.log(values.fillterCategories);
      }
      setResults(filtered);
    };
    filterStores();
  }, [values, storesData]);

  // Function to load more stores
  const loadMoreStores = () => {
    setVisibleStores((prev) => prev + 4);
  };

  return (
    <div className="max-w-6xl mx-auto mt-[7.5rem]">
      <div className="bg-white z-10 py-5 mb-2 space-x-3 flex px-10 justify-between sticky top-[110px] overflow-x-auto overflow-y-hidden ">
        {/* Cities Filter */}
        <div className="w-1/4">
          <form className="w-full mx-auto">
            <select
              id="default"
              onChange={(e) =>
                setValues({ ...values, fillterCity: e.target.value })
              }
              className="bg-white appearance-none border border-white text-gray-900 py-[0.6rem] px-3 text-sm rounded-md  block w-full p-2.5  dark:border-gray-300 dark:placeholder-gray-400  "
            >
              <option>All Cities</option>
              {sellerCity.map((i) => (
                <option value={i} key={i}>
                  {i}
                </option>
              ))}
            </select>
          </form>
        </div>
        {/* Cities Categories */}
        <div className="w-1/4">
          <form className="w-full mx-auto">
            <select
              id="default"
              onChange={(e) =>
                setValues({ ...values, fillterCategories: e.target.value })
              }
              className="bg-white border appearance-none border-white text-gray-900 py-[0.6rem] px-5 text-sm rounded-md  block w-full p-2.5  dark:border-gray-300"
            >
              <option>All Categories</option>
              {Categories.map((i) => (
                <option value={i} key={i}>
                  {i}
                </option>
              ))}
            </select>
          </form>
        </div>
        {/* Search for Stores */}
        <div className="w-1/2">
          <div className="flex items-center rounded-md bg-white py-2 px-3 border-[0.5px] border-gray-300">
            <RxText />
            <form
              action=""
              className="flex w-full"
              onSubmit={searchQueryFunction}
            >
              <input
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Enter Keywords here...."
                type="text"
                className="w-full bg-transparent outline-none px-2"
              />
              <button>Search</button>
            </form>
          </div>
        </div>
      </div>
      <div
        className="flex space-x-5
      "
      >
        {/* Followed Stores */}
        <div className="w-[22%] sticky top-[210px] overflow-x-auto overflow-y-hidden h-[100%] mb-10">
          <div className="border-[0.5px] border-gray-300 py-4 px-5 rounded-lg">
            <span className="text-[20px] text-gray-900 font-semibold">
              Followed Stores
            </span>
          </div>
          <div className="border-[0.5px] mt-4 border-gray-300 py-4 px-5 rounded-lg flex flex-col space-y-4">
            {followedStoresData.map((item) => (
              <div
                className="border-gray-300 py-3 px-2 justify-between rounded-lg flex items-center space-x-2 border-[0.5px]"
                key={item._id}
              >
                <div className="flex items-center space-x-2">
                  <Link href={`/profile/${item._id}`}>
                    <div className="relative w-[40px] h-[40px]">
                      <Image
                        src={item.storeLogo}
                        alt={item.storeName}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="w-full rounded-full"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </Link>
                  <h4 className="text-[12px] w-1/2 truncate">
                    {item.storeName}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* All Stores */}
        <div className="w-1/2 mb-10">
          <div className="grid lg:grid-cols-2 mb-5 gap-y-3">
            {results.slice(0, visibleStores).map((item) => (
              <div
                className="border-gray-400 border-[0.5px] w-full lg:w-[280px] rounded-md "
                key={item._id}
              >
                <Link href={`/profile/${item._id}`}>
                  <div className="relative w-full h-[240px]">
                    <Image
                      src={item.storeLogo}
                      alt={item.storeName}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="w-full rounded-t-md"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </Link>
                <div className="p-3">
                  <div>
                    <h2 className="text-gray-900 mt-1 text-[24px] font-semibold">
                      {item.storeName}
                    </h2>
                    <p className="truncate text-[18px] mt-3">
                      {item.storeDescription}
                    </p>
                  </div>
                  <div className="pb-2 pt-2 flex justify-between">
                    <h1 className="text-gray-800">{item.sellerCity}</h1>
                    <h2 className="text-gray-800">{item.storeCategories}</h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-center">
            <button
              onClick={loadMoreStores}
              className="w-32 h-12 bg-white cursor-pointer rounded-3xl border-2 border-[#9748FF] shadow-[inset_0px_-2px_0px_1px_#9748FF] group hover:bg-[#9748FF] transition duration-300 ease-in-out"
            >
              <span className="font-medium text-[#333] group-hover:text-white">
                Load More
              </span>
            </button>
          </div>
        </div>
        {/* Verified Stores */}
        <div className="w-[25%] sticky top-[210px] overflow-x-auto overflow-y-hidden h-[100%] mb-10">
          <div className="border-[0.5px] border-gray-300 py-4 px-5 rounded-lg">
            <span className="text-[20px] text-gray-900 font-semibold">
              Verified Stores
            </span>
          </div>
          <div className="border-[0.5px] mt-4 border-gray-300 py-4 px-5 rounded-lg flex flex-col space-y-4">
            {verifiedStores.map((item) => (
              <div
                className="border-gray-300 py-3 px-2 justify-between rounded-lg flex items-center space-x-2 border-[0.5px]"
                key={item._id}
              >
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-2">
                    <Link href={`/profile/${item._id}`}>
                      <div className="relative w-[40px] h-[40px]">
                        <Image
                          src={item.storeLogo}
                          alt={item.storeName}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="w-full rounded-full"
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    </Link>
                    <h4 className="text-[12px] w-[150px] truncate">
                      {item.storeName}
                    </h4>
                  </div>
                  <VscVerifiedFilled color="green" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoreClientSideComponent;
