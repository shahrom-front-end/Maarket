import React from "react";
import foto1 from "../home/gorod.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../App.css";
import { Pagination, Navigation } from "swiper/modules";
import { useParams } from "react-router-dom";
import { useGetTodosByIdQuery, useGetTodosQuery } from "../../api/api";
import { useDispatch } from "react-redux";
import { addProduct } from "../../reducers/Basket";

const Basket = () => {
  const { id } = useParams();
  const dispatch = useDispatch()

  const { data = [] } = useGetTodosByIdQuery(id);
  

  return (
    <>
      <section>
          <div>
            {data.map((e: any) => {
              console.log(e.img);
              
              return (
                <div key={e.id} className="flex justify-around">
                  <div className="w-[30%] h-[60vh] items-center">
                    <Swiper
                      spaceBetween={30}
                      centeredSlides={true}
                      //   autoplay={{
                      //     delay: 1500,
                      //     disableOnInteraction: false,
                      //   }}
                      pagination={{
                        clickable: true,
                      }}
                      loop={true}
                      // navigation={true}
                      modules={[Pagination, Navigation]}
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        <img src={`http://localhost:5173/${e.img1}`} alt="" />

                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={`http://localhost:5173/${e.img2}`} alt="" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={`http://localhost:5173/${e.img3}`} alt="" />
                      </SwiperSlide>
                    </Swiper>
                    
                  </div>

                  <div className="w-[30%] bg-[white] p-[20px] shadow-lg rounded-md">
                    <div>
                      <h1 className="text-[27px] font-bold">{e.Name} / {e.color}</h1>
                    </div>
                    <br />
                    <div>
                      <h1 className="text-[23px] font-bold">{e.Price}</h1>
                    </div>
                    <br />
                    <div>
                      <div className="flex gap-4">
                        <h1 className="text-[#6a6a6a] text-[17px]">Бренд</h1>
                        <h1 className="text-[16px] flex items-center text-[#F39F5A]">
                          {e.brand}
                        </h1>
                      </div>
                      <div className="flex gap-4">
                        <h1 className="text-[#5e5e5e] text-[18px]">
                          Объём встроенной памяти
                        </h1>
                        <h1 className="text-[18px] flex items-center text-[#F39F5A]">
                          {e.Volume}
                        </h1>
                      </div>
                      <div className="flex gap-4">
                        <h1 className="text-[#5e5e5e] text-[18px]">Model</h1>
                        <h1 className="text-[18px] flex items-center text-[#F39F5A]">
                          {e.Model}
                        </h1>
                      </div>
                      <div className="flex gap-4">
                        <h1 className="text-[#5e5e5e] text-[18px]">Тип дисплея</h1>
                        <h1 className="text-[18px] flex items-center text-[#F39F5A]">
                          {e.display}
                        </h1>
                      </div>
                      <div className="flex gap-4">
                        <h1 className="text-[#5e5e5e] text-[18px]">Diagonal</h1>
                        <h1 className="text-[18px] flex items-center text-[#F39F5A]">
                          {e.Diagonal}
                        </h1>
                      </div>
                      <div className="flex gap-4">
                        <h1 className="text-[#5e5e5e] text-[18px]">
                          Standards
                        </h1>
                        <h1 className="text-[18px] flex items-center text-[#F39F5A]">
                          {e.Standards}
                        </h1>
                      </div>
                      <div className="flex gap-4">
                        <h1 className="text-[#5e5e5e] text-[18px]">Release</h1>
                        <h1 className="text-[18px] flex items-center text-[#F39F5A]">
                          {e.Release}
                        </h1>
                      </div>
                      <div className="flex gap-4">
                        <h1 className="text-[#5e5e5e] text-[18px]">
                          Resolutionmain
                        </h1>
                        <h1 className="text-[18px] flex items-center text-[#F39F5A]">
                          {e.Resolutionmain}
                        </h1>
                      </div>
                      <div className="flex gap-4">
                        <h1 className="text-[#5e5e5e] text-[18px]">
                          ResolutionFront
                        </h1>
                        <h1 className="text-[18px] flex items-center text-[#F39F5A]">
                          {e.ResolutionFront}
                        </h1>
                      </div>
                      <div className="flex gap-4">
                        <h1 className="text-[#5e5e5e] text-[18px]">Battery</h1>
                        <h1 className="text-[18px] flex items-center text-[#F39F5A]">
                          {e.Battery}
                        </h1>
                      </div>
                      <div className="flex gap-4">
                        <h1 className="text-[#5e5e5e] text-[18px]">Capacity</h1>
                        <h1 className="text-[18px] flex items-center text-[#F39F5A]">
                          {e.Capacity}
                        </h1>
                      </div>
                      <div className="flex gap-4">
                        <h1 className="text-[#5e5e5e] text-[18px]">
                          Quickfunction
                        </h1>
                        <h1 className="text-[18px] flex items-center text-[#F39F5A]">
                          {e.Quickfunction}
                        </h1>
                      </div>
                    </div>
                    <br />
                    <br />
                    <div className="w-[90%] m-auto flex justify-center">
                      <button onClick={()=>dispatch(addProduct(e))} className="bg-[#ffda46] w-[300px]  p-[5px] rounded-lg text-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100">
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
      </section>
    </>
  );
};

export default Basket;
