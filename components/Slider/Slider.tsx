import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/css';

import Image from 'next/image';

import microsoftLogo from './SliderImages/microsoft_logo.svg';
import chanelLogo from './SliderImages/chanel_logo.svg';


export const Slider:React.FC = () => {

    return <div className='max-w-7xl mx-auto'>
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            modules={[Navigation, Pagination, Scrollbar, Autoplay]}
            speed={500}
            loop={true}
            autoplay={
                {
                    delay: 3000,
                }
            }
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
        >
            <SwiperSlide><div className='flex justify-center'>
                <Image
                    src={chanelLogo}
                    width={100}
                    height={100}
                    alt='Chanel_logo'
                /></div></SwiperSlide>
            <SwiperSlide><div className='flex justify-center'><Image
                src={microsoftLogo}
                width={100}
                height={100}
                alt='Microsoft_logo'
            />
            </div>
            </SwiperSlide>
            <SwiperSlide><div className='flex justify-center'><Image
                src={chanelLogo}
                width={100}
                height={100}
                alt='Chanel_logo'
            /></div></SwiperSlide>
            <SwiperSlide><div className='flex justify-center'><Image
                src={microsoftLogo}
                width={100}
                height={100}
                alt='Microsoft_logo'
            />
            </div>
            </SwiperSlide>
        </Swiper>
    </div >
}