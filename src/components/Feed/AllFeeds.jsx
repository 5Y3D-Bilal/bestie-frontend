"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { FaComment, FaLocationDot, FaShareNodes } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { RxEnterFullScreen } from "react-icons/rx";
import { SiMicrosoftstore } from "react-icons/si";
import { SlPeople } from "react-icons/sl";
import {
  FacebookShareButton,
  WhatsappShareButton,
  EmailShareButton,
  WhatsappIcon,
  FacebookIcon,
  EmailIcon,
  TwitterShareButton,
  TelegramShareButton,
  RedditShareButton,
  TwitterIcon,
  TelegramIcon,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon,
  XIcon,
} from "react-share";

function AllFeeds() {
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
  const [openBannerImageUploader, setOpenBannerImageUploader] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const handleToggleBanner = (image) => {
    setOpenBannerImageUploader((prevState) => !prevState);
    setShowImage(image);
  };

  const [openShareSocials, setOpenShareSocials] = useState(false);
  const [sharingProductName, setSharingProductName] = useState("");
  const handleOpenShare = (productName) => {
    setOpenShareSocials((prevState) => !prevState);
    setSharingProductName(productName);
  };

  //   For Scaling the Image
  const elementRef = useRef(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleToggleFullScreen = () => {
    if (elementRef.current) {
      if (!isFullScreen) {
        if (elementRef.current.requestFullscreen) {
          elementRef.current.requestFullscreen();
        } else if (elementRef.current.mozRequestFullScreen) {
          elementRef.current.mozRequestFullScreen(); // Firefox
        } else if (elementRef.current.webkitRequestFullscreen) {
          elementRef.current.webkitRequestFullscreen(); // Chrome, Safari, and Opera
        } else if (elementRef.current.msRequestFullscreen) {
          elementRef.current.msRequestFullscreen(); // Internet Explorer/Edge
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen(); // Firefox
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen(); // Chrome, Safari, and Opera
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen(); // Internet Explorer/Edge
        }
      }
      setIsFullScreen(!isFullScreen);
    }
  };

  useEffect(() => {
    const handleFullScreenChange = () => {
      if (document.fullscreenElement) {
        setIsFullScreen(true);
      } else {
        setIsFullScreen(false);
      }
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
    };
  }, []);

  return (
    <>
      {modileProducts.map((item) => (
        <div key={item.id} className="border-gray-400 border-[0.5px] w-full p-5 mb-5 h-[760px] lg:w-full rounded-md">
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
      {openBannerImageUploader && (
        <div
          ref={elementRef}
          className="w-full h-screen top-0 absolute left-0 z-50  flex justify-center items-center overflow-y-hidden"
        >
          <div
            className="h-screen bg-black top-0 fixed w-full opacity-80 z-10 overflow-y-hidden"
            onClick={() => setOpenBannerImageUploader(false)}
          />
          <div className="flex justify-center items-center bg-white  fixed w-[60%] h-[550px] z-20  rounded-md overflow-y-hidden">
            <div className="relative w-full h-full overflow-y-hidden">
              <Image
                src={showImage}
                alt="imgToBeUpload"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="z-50 top-0 fixed right-0 text-white bg-gray-900 py-2 px-3 flex space-x-4">
            <RxEnterFullScreen
              size={24}
              className="cursor-pointer"
              onClick={handleToggleFullScreen}
            />
            <IoMdClose
              size={24}
              className="cursor-pointer"
              onClick={() => setOpenBannerImageUploader(false)}
            />
          </div>
        </div>
      )}
      {openShareSocials && (
        <div
          ref={elementRef}
          className="w-full h-screen top-0 absolute left-0 z-50  flex justify-center items-center overflow-y-hidden"
        >
          <div
            className="h-screen bg-black opacity-40 top-0 fixed w-full z-10 overflow-y-hidden"
            onClick={() => setOpenShareSocials(false)}
          />
          <div className="flex items-center bg-[#1b1b1b]  fixed w-[25%] h-[560px] z-20  rounded-md overflow-y-hidden">
            <div className="w-full h-full overflow-y-hidden flex flex-col items-center my-6 mx-3">
              <div className="text-white mt-7 mb-2 flex flex-col items-center w-full">
                <h6 className="font-bold">Share</h6>
                <p className="text-[12px]">{sharingProductName}</p>
                <hr className="w-full h-[0.2px] mt-7" />
              </div>
              <div className="flex flex-col justify-center items-center mt-7">
                <div className="text-white flex flex-col items-center hover:bg-gray-700 duration-500 cursor-pointer p-2 rounded-md">
                  <SlPeople size={22} />
                  <h6 className="text-[12px] mt-2">No contacts? No Problem</h6>
                  <h5 className="text-[12px] mt-1">Tap to start adding the most important people to you.</h5>
                </div>
                <div></div>
              </div>
              <hr className="w-full h-[0.2px] mt-10" />
              <div className="grid grid-cols-4 gap-5 mt-10">
                <FacebookShareButton
                  className=" flex flex-col items-center"
                  url={`https://bestie-frontend.vercel.app/item/${"ewajebh"}`}
                  quote={"Title or jo bhi aapko likhna ho"}
                  hashtag={"#portfolio..."}
                >
                  <FacebookIcon size={40} round={true} />
                  <span className="text-[13px] mt-1.5 text-white text-center ">
                    Facebook
                  </span>
                </FacebookShareButton>
                <WhatsappShareButton
                  className=" flex flex-col items-center"
                  url={`https://bestie-frontend.vercel.app/item/${"ewajebh"}`}
                  quote={"Title or jo bhi aapko likhna ho"}
                  hashtag={"#portfolio..."}
                >
                  <WhatsappIcon size={40} round={true} />
                  <span className="text-[13px] mt-1.5 text-white text-center ">
                    Whatsapp
                  </span>
                </WhatsappShareButton>
                <EmailShareButton
                  className=" flex flex-col items-center"
                  url={`https://bestie-frontend.vercel.app/item/${"ewajebh"}`}
                  quote={"Title or jo bhi aapko likhna ho"}
                  hashtag={"#portfolio..."}
                >
                  <EmailIcon size={40} round={true} />
                  <span className="text-[13px] mt-1.5 text-white text-center ">
                    Email
                  </span>
                </EmailShareButton>
                <TwitterShareButton
                  className=" flex flex-col items-center"
                  url={`https://bestie-frontend.vercel.app/item/${"ewajebh"}`}
                  quote={"Title or jo bhi aapko likhna ho"}
                  hashtag={"#portfolio..."}
                >
                  <XIcon size={40} round={true} />
                  <span className="text-[13px] mt-1.5 text-white text-center ">
                    X
                  </span>
                </TwitterShareButton>
                <TelegramShareButton
                  className=" flex flex-col items-center"
                  url={`https://bestie-frontend.vercel.app/item/${"ewajebh"}`}
                  quote={"Title or jo bhi aapko likhna ho"}
                  hashtag={"#portfolio..."}
                >
                  <TelegramIcon size={40} round={true} />{" "}
                  <span className="text-[13px] mt-1.5 text-white text-center ">
                    Telegram
                  </span>
                </TelegramShareButton>
                <RedditShareButton
                  className=" flex flex-col items-center"
                  url={`https://bestie-frontend.vercel.app/item/${"ewajebh"}`}
                  quote={"Title or jo bhi aapko likhna ho"}
                  hashtag={"#portfolio..."}
                >
                  <RedditIcon size={40} round={true} />{" "}
                  <span className="text-[13px] mt-1.5 text-white text-center ">
                    Reddit
                  </span>
                </RedditShareButton>
                <LinkedinShareButton
                  className=" flex flex-col items-center"
                  url={`https://bestie-frontend.vercel.app/item/${"ewajebh"}`}
                  quote={"Title or jo bhi aapko likhna ho"}
                  hashtag={"#portfolio..."}
                >
                  <LinkedinIcon size={40} round={true} />{" "}
                  <span className="text-[13px] mt-1.5 text-white text-center ">
                    LinkedIn
                  </span>
                </LinkedinShareButton>
              </div>
              <hr className="w-full h-[0.2px] mt-10" />
              <div className="mt-1 text-white w-full">
                <Link href={'ms-windows-store://home'} className="flex items-center justify-center space-x-2"><SiMicrosoftstore /> <h5 className="text-[14px] mt-1">Get apps in Store.</h5></Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AllFeeds;
