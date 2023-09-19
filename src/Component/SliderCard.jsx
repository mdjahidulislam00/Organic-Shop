import "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SliderCard = ({ imgData }) => {
  return (
    <div className="w-full">
      <div className="container mx-auto mt-3 rounded-lg ">
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 20000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[ Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
                  {
            imgData.map((product)=>( 
            <SwiperSlide key={product.id}>
              <div className=" mx-auto rounded-lg overflow-hidden shadow-lg bg-white relative">
              <img src={product.img} alt={product.name} className="w-full object-fit h-[450px]" />
              <div className="absolute top-0 bottom-0 left-0 right-0 w-full  p-4">
                <div className="decription text-center mt-48">
                <p className="font-bold text-5xl pb-5 text-purple-500">{product.name}</p>
                <p className="text-red-700 pb-5 text-3xl font-bold mt-2">${product.price}</p>
                <p className="text-sky-400 bg-black rounded-lg bg-opacity-40 py-2 text-xl">{product.description}</p>
                </div>
              </div>
            </div>
            </SwiperSlide> ))
          }
      </Swiper>
      </div>
    </div>
  );
};

export default SliderCard;
