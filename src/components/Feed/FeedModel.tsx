"use client";
import { StoreModel } from "../../Atoms/FeedAtom/feed";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import AllFeeds from "./AllFeeds";
import Followings from "./Followings";
import CurrentUserFeeds from './CurrentUserFeeds'

type StoreModelProps = {
  storesData: any;
};

const FeedModel: React.FC<StoreModelProps> = ({ storesData }) => {
  const FeedModel = useRecoilValue(StoreModel);
  return (
    <>
      <div className="w-full">
        {FeedModel.type === "allFeeds" ? (
          <AllFeeds />
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
