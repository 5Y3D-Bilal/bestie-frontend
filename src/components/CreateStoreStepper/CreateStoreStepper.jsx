"use client";
import React, { useState } from "react";
import { TiTick } from "react-icons/ti";
import Loader from "../Loading/Loader";
import Image from "next/image";
import { LuUploadCloud } from "react-icons/lu";

const Stepper = () => {
  const steps = ["Store Details", "Your Details", "Complete"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  const renderContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="border-[0.5px] rounded-2xl border-gray-300 px-10 py-10 mx-4 lg:mx-0">
            <h1 className="text-[25px] font-bold text-center mb-3">
              Enter your store details here.
            </h1>
            <div className=" flex flex-col space-y-3">
              <input
                type="text"
                placeholder="Store Name"
                className="border-[0.5px] rounded-2xl border-gray-200 focus:outline-none py-4 px-5 focus-within:border-blue-400"
              />
              <form class="w-full mx-auto">
                <select
                  id="default"
                  class="bg-white border border-white text-gray-900 py-5 px-5 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-300 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Choose Store Type</option>
                  <option value="Individual">Individual</option>
                  <option value="Business">Business</option>
                </select>
              </form>
              <div className="border-[0.5px] border-gray-300 rounded-2xl">
                <input
                  type="file"
                  className="hidden"
                  id="upload"
                  accept=".png, .jpg , .gif"
                  onChange={handleFileChange}
                />
                {loading ? (
                  <div className="bg-white rounded-md">
                    <Loader />
                  </div>
                ) : pervViewImage && loading === false ? (
                  <div className="bg-white py-5 px-5 flex justify-center items-center rounded-md flex-col">
                    <Image
                      src={pervViewImage}
                      className="rounded-full w-[60px] h-[60px]"
                      width={50}
                      height={50}
                    />
                  </div>
                ) : (
                  <label
                    htmlFor="upload"
                    className="bg-white py-5 px-5 flex justify-center items-center rounded-md flex-col"
                  >
                    <LuUploadCloud color="black" size={25} />
                    <span className="text-black text-[13px]">
                      Upload your profile image.
                    </span>
                  </label>
                )}
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <h2>Your Details</h2>
            <p>Enter your personal details here.</p>
          </div>
        );
      case 3:
        return (
          <div>
            <h2>Complete</h2>
            <p>You have completed all steps!</p>
          </div>
        );
      default:
        return null;
    }
  };

  const [pervViewImage, setPervViewImage] = useState("");
  const [loading, setLoading] = useState(false);
  const handleFileChange = async (e) => {
    if (e.target.files && e.target.files[0]) {
      setLoading(true);
      const image = e.target.files[0];
      let downloadURL = "";
      const storageRef = ref(storage, `store/${image.name}`);
      await uploadBytes(storageRef, image);
      downloadURL = await getDownloadURL(storageRef);
      setValues((prev) => ({ ...prev, profileImage: downloadURL }));
      setPervViewImage(downloadURL);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex justify-between w-full">
        {steps.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            }`}
          >
            <div className="step">
              {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
            </div>
            <p className="text-black">{step}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 flex flex-col">
        <div className="step-content">{renderContent()}</div>

        <div className="mt-5 flex justify-end">
          {!complete && (
            <button
              className="btn w-28 h-12 bg-white cursor-pointer rounded-3xl border-2 border-[#9748FF] shadow-[inset_0px_-2px_0px_1px_#9748FF] group hover:bg-[#9748FF] transition duration-300 ease-in-out"
              onClick={() => {
                currentStep === steps.length
                  ? setComplete(true)
                  : setCurrentStep((prev) => prev + 1);
              }}
            >
              {currentStep === steps.length ? "Finish" : "Next"}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Stepper;
