// import { Car1 } from "../svg/index"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Car1 } from "../svg/index";

const Slider = () => {
    return (
        <div className='px-28'>
            <Swiper
                className='h-[30rem] m-1'
                direction='vertical'
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                pagination={{ clickable: true }}
                modules={[Pagination, Autoplay]}
                speed={1000}
                autoplay={{delay: 5000}}
            >
                <SwiperSlide className='SliderImg'> <img src={Car1} /> </SwiperSlide>
                <SwiperSlide className='SliderImg'>Slide 2</SwiperSlide>
                <SwiperSlide className='SliderImg'>Slide 3</SwiperSlide>
                ...
            </Swiper>
        </div>
    )
}

export default Slider