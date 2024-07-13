import React from "react";
import Image from "next/image";
import Link from "next/link";

function HomePageAllCategories() {
  const carProducts = [
    {
      id: 1,
      name: "Toyota Camry",
      price: "12,500,000",
      description: "A reliable and fuel-efficient sedan.",
      city: "Los Angeles",
      date: "2021",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThHiBxLLWYPZkqneG6dGYpINn4cpPvm8st5w&s",
    },
    {
      id: 2,
      name: "Honda Accord",
      price: "7,500,000",
      description: "A spacious and comfortable family car.",
      city: "San Francisco",
      date: "2022",
      image:
        "https://cache4.pakwheels.com/ad_pictures/9095/honda-accord-1-5l-vtec-turbo-2020-90955316.webp",
    },
    {
      id: 3,
      name: "Tesla Model 3",
      price: "33,500,000",
      description: "A stylish and high-performance electric car.",
      city: "New York",
      date: "2023",
      image:
        "https://cache4.pakwheels.com/ad_pictures/9788/tn_tesla-model-3-standard-range-plus-2021-97885495.webp",
    },
    {
      id: 4,
      name: "Audi A4",
      price: "16,200,000",
      description: "A stylish and technologically advanced sedan.",
      city: "Phoenix",
      date: "2024-07-03",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9hGC_bpmW0eqt5X6jCZ7cDmZ7Vw2WArXcwg&s",
    },
  ];

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
      date: "2021-10-28",
      city: "Lahore",

      image:
        "https://mobiletrade.pk/wp-content/uploads/2023/12/Pixel-6-Pro-2.jpg.webp",
      description:
        "Google Pixel 6 comes with a 6.4-inch display, Google Tensor processor, and advanced camera features.",
    },
  ];

  return (
    <div className="my-10 lg:max-w-6xl mx-5 lg:mx-auto">
      <div className="">
        <div className="flex justify-between mb-4">
          <h1 className="text-[20px] text-gray-900 font-extrabold mb-3">
            Vehicles
          </h1>
          <button className="py-1 px-3 bg-gray-200 rounded-full text-[#9748FF] duration-500 hover:border-[#9748FF] hover:border-[0.5px] font-medium">
            Show All
          </button>
        </div>
        <div className="">
          <div className="grid lg:grid-cols-4 gap-2 grid-cols-1 md:grid-cols-3">
            {carProducts.map((item) => (
              <div
                className="border-gray-400 border-[0.5px] w-full lg:w-[280px] rounded-md "
                key={item.id}
              >
                <Link href={`/item/${item.id}`}>
                  <div className="relative w-full h-[300px]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="w-full rounded-t-md "
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </Link>
                <div className="p-3">
                  <h1 className="text-gray-900 font-extrabold text-[25px]">
                    Rs {item.price}
                  </h1>
                  <h2 className="text-gray-800 mt-1">{item.name}</h2>
                  <div className="pb-3 pt-5 flex justify-between">
                    <h1 className="text-gray-800">{item.city}</h1>
                    <h2 className="text-gray-800">{item.date}</h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-7">
        <div className="flex justify-between mb-4">
          <h1 className="text-[20px] text-gray-900 font-extrabold mb-3">
            Mobiles
          </h1>
          <button className="py-1 px-3 bg-gray-200 rounded-full text-[#9748FF] duration-500 hover:border-[#9748FF] hover:border-[0.5px] font-medium">
            Show All
          </button>
        </div>
        <div className="">
          <div className="grid lg:grid-cols-4 gap-2 grid-cols-1 md:grid-cols-3">
            {modileProducts.map((item) => (
              <div
                className="border-gray-400 border-[0.5px] w-full lg:w-[280px] rounded-md "
                key={item.id}
              >
                <Link href={`/item/${item.id}`}>
                  <div className="relative w-full h-[300px]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="w-full rounded-t-md "
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </Link>
                <div className="p-3">
                  <h1 className="text-gray-900 font-extrabold text-[25px]">
                    Rs {item.price}
                  </h1>
                  <h2 className="text-gray-800 mt-1">{item.name}</h2>
                  <div className="pb-3 pt-5 flex justify-between">
                    <h1 className="text-gray-800">{item.city}</h1>
                    <h2 className="text-gray-800">{item.date}</h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageAllCategories;
