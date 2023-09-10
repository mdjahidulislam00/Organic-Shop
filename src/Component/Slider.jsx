import 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
  return (
    <div className='container mx-auto rounded-lg h-32 md:h-60 lg:h-96 '>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full mx-auto"
      >
        <SwiperSlide className="text-center text-md bg-slate-400 flex justify-center items-center"><img src="https://swiperjs.com/demos/images/nature-6.jpg" /></SwiperSlide>
        <SwiperSlide className="text-center text-md bg-slate-400 flex justify-center items-center"><img src="https://media.istockphoto.com/id/641657742/photo/woman-buys-the-tv.webp?b=1&s=612x612&w=0&k=20&c=VVc949Rl8rY5p-kdrsjy3RSrbJEDtCsAzm6QfppBur8=" /> </SwiperSlide>
        <SwiperSlide className="text-center text-md bg-slate-400 flex justify-center items-center"><img src="https://media.istockphoto.com/id/1329695941/photo/smart-warehouse-management-system.webp?b=1&s=612x612&w=0&k=20&c=wg4DoNwiNV67mVHRWqFngtV7leAolHImhKUYdWd4rbM=" /></SwiperSlide>
        <SwiperSlide className="text-center text-md bg-slate-400 flex justify-center items-center"><img src="https://media.istockphoto.com/id/867810472/photo/e-commerce-internet-online-shopping-and-delivery-concept-household-kitchen-appliances-and-home.webp?b=1&s=612x612&w=0&k=20&c=nqaff_0B_xoEbTYSvpBPMaKYiFPEJ5XRckD64MbWbe0=" /></SwiperSlide>

      </Swiper>
    </div>
  )
}

export default Slider