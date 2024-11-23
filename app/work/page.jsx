"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";


const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description:
      "Lorem ipsum dolor sit.amet consectetur adipisicing eli Lorem ipsum dolor sit.amet consectetur adipisicing eli",

    stack: [
      {
        name: "Html 5 ",
      },
      {
        name: "Css 3",
      },
      {
        name: "javascript ",
      },
    
    
    ],
    image: "/assets/work/thumb1.png",
    live: "https://ajayportfolioapp.vercel.app/",
    github: "https://ajayportfolioapp.vercel.app/",
  },
  {
    num: "02",
    category: "frontend",
    title: "project 1",
    description:
      "Lorem ipsum dolor sit.amet consectetur adipisicing eli Lorem ipsum dolor sit.amet consectetur adipisicing eli",

    stack: [
      {
        name: "Html 5 ",
      },
      {
        name: "Css 3",
      },
      {
        name: "javascript ",
      },
    
    ],
    image: "/assets/work/thumb2.png",
    live: "https://ajayportfolioapp.vercel.app/",
    github: "https://ajayportfolioapp.vercel.app/",
  },
  {
    num: "03",
    category: "frontend",
    title: "project 1",
    description:
      "Lorem ipsum dolor sit.amet consectetur adipisicing eli Lorem ipsum dolor sit.amet consectetur adipisicing eli",

    stack: [
      {
        name: "Html 5 ",
      },
      {
        name: "Css 3",
      },
      {
        name: "javascript ",
      },
    
    ],
    image: "/assets/work/thumb3.png",
    live: "https://ajayportfolioapp.vercel.app/",
    github: "https://ajayportfolioapp.vercel.app/",
  },
  {
    num: "04",
    category: "frontend",
    title: "project 1",
    description:
      "Lorem ipsum dolor sit.amet consectetur adipisicing eli Lorem ipsum dolor sit.amet consectetur adipisicing eli",

    stack: [
      {
        name: "Html 5 ",
      },
      {
        name: "Css 3",
      },
      {
        name: "javascript ",
      },
     
    ],
    image: "/assets/work/thumb1.png",
    live: "https://ajayportfolioapp.vercel.app/",
    github: "https://ajayportfolioapp.vercel.app/",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleChangeSlide = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 md:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:gap-[30px]">
          <div className="w-full md:w-[50%] md:h-[460px] flex flex-col md:justify-between order-2 md:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extralight text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li className="text-xl text-accent" key={index}>
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border-t-2 border-white/20">
                <div className="flex items-center gap-4 mt-3">
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 md:order-none">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="md:h-[520px] mb-12"
              onSlideChange={handleChangeSlide}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/10 z-10"></div>

                    {/* Image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-cover"
                        alt={`Project ${index}`}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              {/* Slider Buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute bottom-[calc(50%_-_22px)] md:bottom-0 z-20 w-full justify-between md:w-max md:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[34px] h-[34px] flex justify-center items-center transition-all"
                iconStyles="text-xl text-black"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
