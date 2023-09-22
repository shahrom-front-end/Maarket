// import React from 'react'
import { useGetTodosQuery } from "../../api/api";
// import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../App.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ImgMediaCard from "../../components/Card";
import { Link } from "react-router-dom";

const Home = () => {
  const { data = [] } = useGetTodosQuery("");

  return (
    <>
      <div className="w-[90%] m-auto">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://s3.eu-central-1.amazonaws.com/alifcore.storage/media/images/settings/41/banner-1687169590303.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://s3.eu-central-1.amazonaws.com/alifcore.storage/media/images/settings/41/banner-1691732503687.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://s3.eu-central-1.amazonaws.com/alifcore.storage/media/images/settings/41/banner-1692187511406.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <br />
      <br />
      <br />

      <section className="">
        <div className="grid grid-cols-5 justify-between gap-[30px]">
          {data.length > 0 &&
            data?.map((e: any, index:number , arr:boolean) => {
              return (
                <div key={e?.id} className="m-auto w-[85%] ">
                  <ImgMediaCard
                    e={e}
                    id={e.id}
                    img={e.img1}
                    price={e.Price}
                    name={e.Name}
                    volume={e.Volume}
                    standards={e.Standards}
                    Battery={e.Battery}
                  />
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
};

export default Home;
