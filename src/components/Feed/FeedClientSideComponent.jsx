"use client"
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

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

function FeedClientSideComponent() {
    const [currentUser, setCurrentUser] = useState(null);
    const [followedStoresData, setFollowedStoresData] = useState([]);
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
    return (
        <div className='mt-32'>
            <div className="max-w-6xl mx-auto">
                <div className='flex space-x-5'>

                {/* Followed Stores */}
                <div className='w-1/4 sticky top-[130px] overflow-x-auto overflow-y-hidden h-[100%]'>
                    <div className=" mb-4">
                        <div className="border-[0.5px] flex space-x-3 items-center border-gray-300 py-4 px-3 rounded-lg">
                            <div className="flex items-center space-x-3">
                                <button className='py-2 px-5 rounded-full border-[2px] hover:bg-[#6f00ff] border-[#6f00ff] bg-[#eddfff] hover:text-white duration-500 text-[#9748FF]'>All Feed</button>
                                <button className='py-2 px-5 rounded-full border-[2px] hover:bg-[#6f00ff] border-[#6f00ff] bg-[#eddfff] hover:text-white duration-500 text-[#9748FF]'>Following</button>
                            </div>
                        </div>
                    </div>
                    <div className=" mb-10">
                        <div className="border-[0.5px] border-b-[0px] flex space-x-3 items-center border-gray-300 py-4 px-5 rounded-t-lg">
                            <span className="text-[20px] text-gray-900 font-semibold">
                                Followed Feeds
                            </span>
                            <span className='py-1.5 text-[13px] text-white px-4 rounded-full bg-[#bc88ff]'>{followedStoresData.length}</span>
                        </div>
                        <div className="border-[0.5px] border-gray-300 flex flex-col justify-center space-y-3">
                            {followedStoresData.map((item) => (
                                <div
                                    className="border-t-[0.5px] py-2 justify-between rounded-lg flex items-center space-x-2"
                                    key={item._id}
                                >
                                    <Link href={`/profile/${item._id}`}>
                                        <div className="flex items-center space-x-2 mx-4 my-2">
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
                                            <h4 className="text-[12px] w-1/2 truncate">
                                                {item.storeName}
                                            </h4>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-1/2 mb-10">
                    <div className="grid lg:grid-cols-2 mb-5 gap-y-3">
                        {modileProducts.map((item) => (
                            <div
                                className="border-gray-400 border-[0.5px] w-full lg:w-[280px] rounded-md "
                                key={item._id}
                            >
                                <Link href={`/profile/${item._id}`}>
                                    <div className="relative w-full h-[240px]">
                                        <Image
                                            src={item.image}
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
                            className="w-32 h-12 bg-white cursor-pointer rounded-3xl border-2 border-[#9748FF] shadow-[inset_0px_-2px_0px_1px_#9748FF] group hover:bg-[#9748FF] transition duration-300 ease-in-out"
                        >
                            <span className="font-medium text-[#333] group-hover:text-white">
                                Load More
                            </span>
                        </button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default FeedClientSideComponent
