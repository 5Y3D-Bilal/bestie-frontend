"use client";
import { StoreModel } from "../../Atoms/FeedAtom/feed";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import AllFeeds from "./AllFeeds";
import Followings from "./Followings";
import CurrentUserFeeds from './CurrentUserFeeds'

type StoreModelProps = {
  storesData: any;
  allProducts: any
  storeData: any
};

const FeedModel: React.FC<StoreModelProps> = ({ storesData , allProducts, storeData}) => {
  const FeedModel = useRecoilValue(StoreModel);
  return (
    <>
      <div className="w-full">
        {FeedModel.type === "allFeeds" ? (
          <AllFeeds allProducts={allProducts} storeData={storeData} />
        ) : FeedModel.type === "followings" ? (
          <Followings />
        ) : FeedModel.type === "currentUser" ? (
          <CurrentUserFeeds />
        ): ''}
      </div>
    </>
  );
};
export default FeedModel;
