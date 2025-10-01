"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Services, experience } from "../../utils/db";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const comments = [
  {
    id: 1,
    comment:
      "You can do it in the same way you would leave a comment on any other blogger blog.",
    image: "/assets/images/female.jpg",
    name: "I_Like_Slug",
  },
  {
    id: 2,
    comment:
      "The key to successful social media marketing is consistency and authenticity",
    image: "/assets/bg-rm.png",
    name: "Low-Selection-2903",
  },
  {
    id: 3,
    comment:
      "Recently changed my blog from headless WP / Gatsby to Next and MDX. I love it.",
    image: "/assets/phone.png",
    name: "4ever_youngz",
  },
  {
    id: 4,
    comment:
      "Use Next.js, use markdown files and deploy to Vercel for free. Just add markdown files whenever you want to add a new post and redeploy.",
    image: "/assets/images/men2.jpg",
    name: "InfinityByZero",
  },
];
export default function About() {
  const [index, setIndex] = useState(1);
  return (
    <div className="w-[90%] mx-auto   pb-10  ">
      <div className="relative   w-full h-[300px]">
        <Image
          src={"/assets/images/team-1.jpg"}
          alt=""
          fill
          className="object-cover"
        />
        <div className="w-full h-full bg-black/70 absolute  flex items-center justify-center">
          <h1 className="text-white text-4xl font-extrabold">About Us</h1>
        </div>
      </div>
      <div className="text-center mt-10">
        <h1> About Us</h1>
        <div className="">
          <p className="w-[60%] mx-auto text-2xl text-justify">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            dignissimos nisi enim quasi asperiores saepe atque et fugit maiores
            vel vero doloremque provident, iure blanditiis voluptatibus omnis
            neque ab voluptatem!
          </p>
        </div>
      </div>

      {/* Sample image with some paragrapgh */}
      <div className="flex flex-col-reverse sm:flex-row gap-4  justify-between  mt-10 rounded-xl p-4">
        <div className="flex-1 ">
          <h1 className="text-justify text-4xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor,
            maxime.
          </h1>
          <h2 className="text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
            amet qui, necessitatibus, magnam odit accusantium natus enim
            cupiditate omnis a veniam id modi! Enim sequi officia quas ducimus
            explicabo sunt. Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Ipsam pariatur rerum sed sit fugiat minus molestiae
            accusantium laudantium doloribus explicabo, odit aperiam doloremque
            non quod sequi, aliquid dolor fuga id! Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Impedit ex tempora rem, enim fugiat
            dolore incidunt repellendus odio labore architecto dolorum nam
            repellat amet quaerat quidem atque, laboriosam debitis aliquam.
          </h2>
          <button className="px-4 rounded-md bg-sky-500 text-white py-2 mt-5">
            Read more
          </button>
        </div>
        <div className="flex-1 flex justify-end ">
          <Image
            src={"/assets/images/img_rectangle_11_1.png"}
            alt=""
            width={500}
            height={500}
          />
        </div>
      </div>
      {/* our service */}
      <div className="mt-10 text-center pb-3">
        <h2 className="text-sky-500">Our Service</h2>
        <p>Lorem ipsum dolor sit amet, consectetur</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1  gap-6 mt-10">
          {Services.map((item, index) => (
            <div
              key={item.id}
              className="w-full flex flex-col items-center rounded-2xl shadow-2xl dark:bg-white bg-black dark:text-black text-white hover:border-sky-600 hover:border-b-4 hover:border-x-2"
            >
              <div className="bg-slate-400 rounded-full w-10 h-10 flex items-center justify-center m-5">
                <item.icon className="text-[35px] text-black" />
              </div>
              <h2 className="text-justify w-[350px] text-4xl font-extrabold capitalize">
                {item.title}
              </h2>
              <p className="text-justify w-[350px]  font-extralight">
                {item.description}
              </p>

              <div className="bg-sky-300 rounded-full w-10 h-10 flex items-center justify-center m-5">
                <ArrowOutwardIcon className="text-[35px] text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Sample image with some paragrapgh */}
      <div className="flex flex-col sm:flex-row gap-4  justify-between dark:bg-white bg-black dark:text-black text-white mt-10 rounded-xl p-4">
        <div className="flex-1 flex justify-start ">
          <Image
            src={"/assets/images/img_rectangle_11_390x728.png"}
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div className="flex-1 ">
          <h1 className="text-justify text-4xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor,
            maxime.
          </h1>
          <h2 className="text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
            amet qui, necessitatibus, magnam odit accusantium natus enim
            cupiditate omnis a veniam id modi! Enim sequi officia quas ducimus
            explicabo sunt. Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Ipsam pariatur rerum sed sit fugiat minus molestiae
            accusantium laudantium doloribus explicabo, odit aperiam doloremque
            non quod sequi, aliquid dolor fuga id! Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Impedit ex tempora rem, enim fugiat
            dolore incidunt repellendus odio labore architecto dolorum nam
            repellat amet quaerat quidem atque, laboriosam debitis aliquam.
          </h2>
          <button className="px-4 rounded-md bg-sky-500 text-white py-2 mt-5">
            Read more
          </button>
        </div>
      </div>
      {/* our Expercience */}
      <div className="mt-10 text-center pb-3">
        <h2 className="text-sky-500">Why chooos Us</h2>
        <p>Where Experience Meets Compassions</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-5  mt-10">
          {experience.map((item, index) => (
            <div
              key={item.id}
              className="w-full flex items-center justify-between rounded-2xl shadow-2xl bg-black dark:bg-white text-white dark:text-black p-4"
            >
              <div className="flex-1  p-4 rounded-xl">
                <h2 className="text-2xl font-extrabold capitalize mb-2">
                  {item.title}
                </h2>
                <p className="font-extralight">{item.description}</p>
              </div>

              <div className="min-w-[60px] min-h-[60px] bg-white dark:bg-slate-200 shadow-md rounded-xl flex items-center justify-center ml-4">
                <item.icon className="text-[30px] text-red-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Testimonial */}
      <div className="relative   w-full h-[500px] rounded-2xl">
        <Image
          src={"/assets/images/team-2.jpg"}
          alt=""
          fill
          className="object-cover rounded-2xl "
        />
        <div className="w-full h-full bg-black/80 absolute  flex items-center flex-col gap-3 justify-center">
          <h1 className="text-white text-2xl font-extrabold">Testimonial</h1>
          <h2 className="text-4xl text-white">Feedback from Honest Optionaa</h2>
          <div className="md:w-auto w-[80%] mx-auto dark:bg-white bg-black p-8 dark:text-black text-white rounded-e-xl rounded-ss-xl flex  gap-3">
            <p className="border-r-4 border-r-blue-800 p-2 text-blue-600">
              <AutoAwesomeIcon />
            </p>
            <p className="text-lg font-light italic">
              "
              {comments.find((c) => c.id === index)?.comment ||
                comments[0].comment}
              "
            </p>
          </div>
          <div className="flex gap-3">
            {comments.map((item, i) => (
              <Image
                key={i}
                src={item.image}
                alt={`Quote author ${i + 1}`}
                width={40}
                height={40}
                className={`w-10 h-10 rounded-full cursor-pointer border-2 ${
                  index === item.id ? "border-blue-500" : "border-transparent"
                }`}
                onClick={() => setIndex(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Our team */}
      <div className="mt-10 text-center pb-3">
        <h2 className="text-sky-500">Our Team</h2>
        <p className="text-4xl">Our Dedicated Team </p>
        <div className="w-[60%] mx-auto grid sm:grid-cols-4 md:grid-cols-5 grid-cols-1 gap-5 mt-10">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="">
                <Image
                  key={i}
                  src={"/assets/images/men2.jpg"}
                  alt=""
                  width={400}
                  height={400}
                  className="w-40 h-40 rounded-sm"
                />
                <h2 className="text-2xl font-bold">Jonathon John</h2>
                <p className="text-gray-700">Professional</p>
                <span>
                  {" "}
                  <button className="bg-sky-500 rounded-md p-2 text-white">
                    more details{" "}
                  </button>{" "}
                  123 5
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
