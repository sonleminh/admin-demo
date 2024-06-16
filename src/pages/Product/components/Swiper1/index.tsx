import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Swiper2 from '../Swiper2';
import { Box } from '@mui/material';

const Swiper1 = (props: any) => {
  return (
    <Swiper
      onSwiper={props?.setThumbsSwiper}
      spaceBetween={10}
      slidesPerView={4}
      freeMode={true}
      watchSlidesProgress={true}
      modules={[FreeMode, Navigation, Thumbs]}
      className='mySwiper2'>
      {props?.data?.map((item: any, index: number) => (
        <SwiperSlide key={index}>
          <Box
            sx={{
              '.img': {
                width: '100%',
                // height: 100,
              },
            }}>
            <img src={item.image} className='img' />
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Swiper1;
