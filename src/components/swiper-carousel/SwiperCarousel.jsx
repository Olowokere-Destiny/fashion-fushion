"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "./styles.css";

import { Autoplay, Pagination } from "swiper/modules";
import { outfit } from "@/utils/fontExports";

export default function SwiperCarousel() {
  const swiperRef = useRef(null);

  return (
    <>
      <Swiper
        ref={swiperRef}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Autoplay, Pagination]}
        className={`swiper-container w-full overflow-hidden relative h-[32rem] md:h-[38rem] lg:h-[28rem] xlg:h-[35rem] ${outfit.className}`}
      >
        <SwiperSlide
          className="bgslide1 swiper-slide text-white justify-center md:justify-start px-24 bg-cover left-shift"
          data-swiper-autoplay="5000"
        >
          <div className="md:w-3/4 lg:w-1/2">
            <h1 className="uppercase text-sm font-bold mb-7 md:mb-10">
              premium collection
            </h1>
            <h1 className="uppercase font-[600] md:font-[800] md:text-5xl md:leading-tight lg:text-6xl tracking-wide">
              the heritage collection
            </h1>
            <div className="flex gap-4 mt-10">
              <button className="btn-effect text-sm tracking-wider">
                learn more
              </button>
              <button className="btn-effect text-sm tracking-wider">
                shop
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="swiper-slide dual-img dual-img1 flex-col justify-center"
          data-swiper-autoplay="5000"
        >
          <div className="md:w-1/2 text-center">
            <h1 className="uppercase text-sm font-bold mb-7 md:mb-9 text-white">
              meet the
            </h1>
            <h1 className="mb-8 text-white font-[600] md:font-[800] uppercase text-4xl md:text-5xl md:leading-tight lg:text-6xl">
              sage collection
            </h1>
            <button className="btn-effect text-sm tracking-wider">
              learn more
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="bgslide3 bg-left swiper-slide text-white justify-center md:justify-start px-24 bg-cover"
          data-swiper-autoplay="5000"
        >
          <div className="md:w-3/4 lg:w-1/2">
            <h1 className="uppercase text-sm font-bold mb-7 md:mb-10">
              collaboration
            </h1>
            <h1 className="uppercase text-4xl md:text-5xl md:leading-tight lg:text-6xl">
              <p className="md:hidden font-[600] tracking-wider md:tracking-wide">
                <span>native</span>
                <br />
                <span className="whitespace-nowrap">union x</span>
                <br />
                <span className="whitespace-nowrap"> tom dixon </span>
              </p>
              <div className="hidden md:block font-[800] tracking-wider md:tracking-wide">
                <span className="whitespace-nowrap">native union</span>
                <br />
                <span className="whitespace-nowrap">x tom dixon </span>
              </div>
            </h1>
            <div className="mt-10">
              <button className="btn-effect text-sm tracking-wider">
                learn more
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="swiper-slide dual-img dual-img2 flex-col justify-center"
          data-swiper-autoplay="5000"
        >
          <div className="md:w-1/2 text-center">
            <h1 className="uppercase text-sm font-bold mb-7 md:mb-9 text-white">
              shoes for the occasion
            </h1>
            <h1 className="mb-8 font-[600] md:font-[800] tracking-wider text-white uppercase text-4xl md:text-5xl md:leading-tight lg:text-6xl">
              new fusion sneakers
            </h1>
            <button className="btn-effect text-sm tracking-wider mx-auto">
              <span>shop sneakers</span>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="bgslide5 swiper-slide text-white justify-center md:justify-start px-24 bg-cover right-shift"
          data-swiper-autoplay="5000"
        >
          <div className="md:w-3/4 lg:w-1/2">
            <h1 className="uppercase text-sm font-bold mb-7 md:mb-10">
              new in
            </h1>
            <h1 className="uppercase text-4xl md:text-5xl md:leading-tight lg:text-6xl font-[600] md:font-[800] tracking-wider md:tracking-wide">
              <span className="whitespace-nowrap">the maison</span>
              <br />
              kitsuné collab
            </h1>
            <div className="mt-10">
              <button className="btn-effect text-sm tracking-wider">
                learn more
              </button>
            </div>
          </div>
        </SwiperSlide>
        <div className="swiper-pagination-bullet">
        </div>
      </Swiper>
    </>
  );
}
