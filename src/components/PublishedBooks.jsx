import React from "react";
import { PublishedBook } from "../data/publishedbooksData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const PublishedBooks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">
          Published Books
        </h2>

        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {PublishedBook.map((book) => (
            <SwiperSlide key={book.id}>
              <div
                className="bg-gray-100
rounded-lg
overflow-hidden
shadow-lg
transition-all
duration-300
hover:-translate-y-2
hover:shadow-
"
              >
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-[350px] object-contain

  transition-transform
  duration-300
  hover:scale-105 pt-5"
                />
                <div className="p-4">
                  <h3 className="text-center font-medium">{book.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PublishedBooks;
