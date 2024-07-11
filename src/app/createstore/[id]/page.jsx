"use client"
import React from "react";
import Stepper from "../../../components/CreateStoreStepper/CreateStoreStepper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useParams } from "next/navigation";


function CreateStore() {
 const {id} = useParams()
 console.log(id)

  return (
    <>
      <div className="max-w-6xl mx-auto">
        <Navbar />
        <div className=" py-20">
          <Stepper userId={id} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CreateStore;
