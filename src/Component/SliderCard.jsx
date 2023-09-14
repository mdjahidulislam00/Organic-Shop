import "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SliderCard = ({ imgData }) => {
  console.log(imgData)
  return (
    <div className="w-full">
      <div className="container mx-auto mt-3 rounded-lg ">
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
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
                  {
            imgData.map((pic)=>( 
            <SwiperSlide key={pic.id}>
              <div className="">
                <img className="object-cover h-[500px] w-full" src={pic.img} alt={pic.name} />
              </div>
            </SwiperSlide> ))
          }
      </Swiper>
      </div>
    </div>
  );
};

export default SliderCard;
