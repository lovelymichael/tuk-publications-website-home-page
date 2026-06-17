import React, { useState } from "react";
import { booksData } from "../data/booksData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const BookSlider = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <div className="relative">
        {/* Previous Arrow */}
        <button className="custom-prev absolute left-[-20px] top-[160px] -translate-y-1/2 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md text-gray-400 hover:text-gray-700 text-2xl">
          ❮
        </button>

        {/* Next Arrow */}
        <button className="custom-next absolute right-[-20px] top-[160px] -translate-y-1/2 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md text-gray-400 hover:text-gray-700 text-2xl">
          ❯
        </button>

        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          modules={[Autoplay, Navigation]}
        >
          {booksData.map((card) => (
            <SwiperSlide key={card.id}>
              <div className="relative">
                {/* Card */}
                <div
                  className="
                    bg-white
                    rounded-xl
                    shadow-lg
                    overflow-hidden
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:shadow-2xl
                    cursor-pointer
                  "
                  style={{
                    borderTop: `20px solid ${card.color}`,
                  }}
                >
                  <div className="h-[250px] flex items-center justify-center px-6">
                    <h2
                      className="text-3xl font-bold text-center"
                      style={{ color: card.color }}
                    >
                      {card.title}
                    </h2>
                  </div>

                  {/* Triangle */}
                  <div
                    className="mx-auto w-0 h-0"
                    style={{
                      borderLeft: "12px solid transparent",
                      borderRight: "12px solid transparent",
                      borderBottom: `12px solid ${card.color}`,
                    }}
                  />

                  {/* Explore Button */}
                  <button
                    onClick={() => {
                      setActiveCard(
                        activeCard === card.id ? null : card.id
                      );
                      setActiveDropdown(null);
                    }}
                    className="w-full text-white font-bold py-3 text-xl"
                    style={{
                      backgroundColor: card.color,
                    }}
                  >
                    Explore →
                  </button>
                </div>

                {/* Dropdown */}
                {activeCard === card.id && (
                  <div
                    className="mt-4 border-4 rounded-2xl p-4 shadow-lg"
                    style={{
                      borderColor: card.color,
                      backgroundColor: `${card.color}20`,
                    }}
                  >
                    {card.items.map((item, index) => (
                      <div key={index} className="mb-2">
                        {item.subItems ? (
                          <>
                            <button
                              onClick={() =>
                                setActiveDropdown(
                                  activeDropdown === index
                                    ? null
                                    : index
                                )
                              }
                              className="w-full flex justify-between items-center px-4 py-3 font-semibold rounded-md text-white"
                              style={{
                                backgroundColor: card.color,
                              }}
                            >
                              {item.title}
                              <span>▼</span>
                            </button>

                            {activeDropdown === index && (
                              <div
                                className="p-3 rounded-md mt-1"
                                style={{
                                  backgroundColor: `${card.color}500`,
                                  border: `1px solid ${card.color}`,
                                }}
                              >
                                {item.subItems.map((subItem, i) => (
                                  <p
                                    key={i}
                                    className="py-2 border-b last:border-none"
                                  >
                                    {subItem}
                                  </p>
                                ))}
                              </div>
                            )}
                          </>
                        ) : (
                          <div
                            className="px-4 py-3 rounded-md font-semibold text-black"
                            style={{
                              backgroundColor: `${card.color}40`
                            }}
                          >
                            {item.title}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BookSlider;