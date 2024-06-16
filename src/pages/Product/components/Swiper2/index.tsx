import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Swiper1 from '../Swiper1';
import { Box } from '@mui/material';

const Swiper2 = (props: any) => {
  return (
    <Swiper
      spaceBetween={10}
      navigation={true}
      thumbs={{
        swiper:
          props?.thumbsSwiper && !props?.thumbsSwiper?.destroyed
            ? props?.thumbsSwiper
            : null,
      }}
      modules={[FreeMode, Navigation, Thumbs]}
      className='mySwiper'>
      {props?.data?.map((item: any, index: number) => (
        <SwiperSlide key={index}>
          <Box
            sx={{
              '.img': {
                width: '100%',
                height: 200,
              },
            }}>
            <img src={item.image} className='img' />
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Swiper2;
