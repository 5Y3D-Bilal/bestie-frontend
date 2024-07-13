"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { VscVerifiedFilled } from "react-icons/vsc";

function StoreClientSideComponent({ storesData, verifiedStores }) {
  return (
    <div className="max-w-6xl mx-auto mt-[7.5rem]">
      <div
        className="flex space-x-5
      "
      >
        <div className="w-[22%] sticky top-[120px] overflow-x-auto overflow-y-hidden h-[100%] mb-10">
          <div className="border-[0.5px] border-gray-300 py-4 px-5 rounded-lg">
            <span className="text-[20px] text-gray-900 font-semibold">
              Followed Stores
            </span>
          </div>
          <div className="border-[0.5px] mt-4 border-gray-300 py-4 px-5 rounded-lg flex flex-col space-y-4">
            {storesData.map((item) => (
              <>
                <div
                  className="border-gray-300 py-3 px-2 justify-between rounded-lg flex items-center space-x-2 border-[0.5px]"
                  key={item.id}
                >
                  <div className="flex items-center space-x-2">
                    <Link href={`/store/${item._id}`}>
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
              </>
            ))}
          </div>
        </div>
        <div className="grid lg:grid-cols-2 w-1/2 mb-10 gap-y-3">
          {storesData.map((item) => (
            <>
              <div
                className="border-gray-400 border-[0.5px] w-full lg:w-[280px] rounded-md "
                key={item.id}
              >
                <Link href={`/store/${item._id}`}>
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
            </>
          ))}
        </div>
        <div className="w-[25%] sticky top-[120px] overflow-x-auto overflow-y-hidden h-[100%] mb-10">
          <div className="border-[0.5px] border-gray-300 py-4 px-5 rounded-lg">
            <span className="text-[20px] text-gray-900 font-semibold">
              Verified Stores
            </span>
          </div>
          <div className="border-[0.5px] mt-4 border-gray-300 py-4 px-5 rounded-lg flex flex-col space-y-4">
            {verifiedStores.map((item) => (
              <>
                <div
                  className="border-gray-300 py-3 px-2 justify-between rounded-lg flex items-center space-x-2 border-[0.5px]"
                  key={item.id}
                >
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-2">
                      <Link href={`/store/${item._id}`}>
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
                    <VscVerifiedFilled />
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoreClientSideComponent;
