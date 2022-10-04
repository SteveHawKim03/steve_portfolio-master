import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import EYEternal from './../assets/EYEternal.PNG'

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

import { FreeMode } from "swiper";



const Projects = () => {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="flex flex-col relative h-screen text-center md:text-left 
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 
        text-2xl">Projects</h3>
        <Swiper
        slidesPerView={2}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
        >
            <SwiperSlide>
                <ProjectCard img={EYEternal} title="EYEternal" description="Application developed to help my younger brother with his Computer Vision Syndrome through three features:
                1. detects and calculates live eye blinking rate and alerts users if the user blink too less
                2. detects and calculates user's live distance from screen and alerts users if the user is too close to the screen
                3. provide virtual eye-exercise games"/>
            </SwiperSlide>
            <SwiperSlide>
                <ProjectCard img={EYEternal} title="EYEternal" description="Application developed to help my younger brother with his Computer Vision Syndrome through three features:
                1. detects and calculates live eye blinking rate and alerts users if the user blink too less
                2. detects and calculates user's live distance from screen and alerts users if the user is too close to the screen
                3. provide virtual eye-exercise games"/>
            </SwiperSlide>
            <SwiperSlide>
                <ProjectCard img={EYEternal} title="EYEternal" description="Application developed to help my younger brother with his Computer Vision Syndrome through three features:
                1. detects and calculates live eye blinking rate and alerts users if the user blink too less
                2. detects and calculates user's live distance from screen and alerts users if the user is too close to the screen
                3. provide virtual eye-exercise games"/>
            </SwiperSlide>
        </Swiper>
    </motion.div>
  )
}

export default Projects