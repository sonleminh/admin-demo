import React, { useState } from 'react';
import ButtonWithTooltip from '../../../../components/ButtonWithTooltip';
import { Info } from '@mui/icons-material';
import { Box, Grid, List, ListItem, Modal, Typography } from '@mui/material';
import { IProduct } from '../../../../interfaces/IProduct';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Swiper1 from '../Swiper1';
import Swiper2 from '../Swiper2';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '1px solid #919191',
  boxShadow: 24,
  p: 4,
};

const DetailModal = ({ data }: { data: IProduct }) => {
  const [open, setOpen] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);
  //   console.log(data?.gallery);
  return (
    <>
      <ButtonWithTooltip
        color='primary'
        variant='outlined'
        title='Chi tiết'
        placement='left'
        onClick={handleModalOpen}
        sx={{ marginRight: 1 }}>
        <Info />
      </ButtonWithTooltip>
      <Modal
        open={open}
        onClose={handleModalClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        sx={{
          '.MuiBackdrop-root': {
            bgcolor: 'rgba(0,0,0,0.2)',
          },
        }}>
        <Box sx={style}>
          <Grid container>
            <Grid item xs={6}>
              <List
                sx={{
                  '& li': {
                    fontSize: 14,
                  },
                }}>
                <ListItem>Diện tích: {data.unit.square}m2</ListItem>
                <ListItem>Trạng thái: {data.unit.status}</ListItem>
                <ListItem>Giá: {data.unit.price}</ListItem>
                <ListItem>Phòng ngủ: {data.unit.bed}</ListItem>
                <ListItem>Phòng tắm: {data.unit.bath}</ListItem>
                <ListItem>Hướng: {data.unit.direction}</ListItem>
                <ListItem>
                  <Typography sx={{ fontSize: 13, mr: 1 }}>Ảnh:</Typography>{' '}
                  {data.unit.image.map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        '.thumbnail': {
                          width: 60,
                          height: 40,
                          margin: 0.5,
                          objectFit: 'cover',
                          border: '1px solid #949494',
                        },
                      }}>
                      <img src={item.image} className='thumbnail' />
                    </Box>
                  ))}
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={6}>
              <Swiper2 data={data?.gallery} thumbsSwiper={thumbsSwiper} />
              <Swiper1 data={data?.gallery} setThumbsSwiper={setThumbsSwiper} />
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
};

export default DetailModal;
