import { AddCircleOutlined, Edit, Info } from '@mui/icons-material';

import {
  Box,
  Card,
  CardHeader,
  Divider,
  Grid,
  List,
  ListItem,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ButtonWithTooltip from '../../../../components/ButtonWithTooltip';
import productList from '../../../../data/product.json';
import { useState } from 'react';
import DetailModal from '../DetailModal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ProductList = () => {
  const navigate = useNavigate();

  return (
    <Card sx={{ mt: 3, borderRadius: 2 }}>
      <Card>
        <CardHeader
          action={
            <ButtonWithTooltip
              variant='contained'
              onClick={() => navigate('create')}
              title='Thêm gói cước'>
              <AddCircleOutlined />
            </ButtonWithTooltip>
          }
          title={
            <Typography sx={{ fontSize: 20, fontWeight: 500 }}>
              Danh sách sản phẩm
            </Typography>
          }
        />
        <Divider />
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align='center'>STT</TableCell>
                <TableCell align='center'>Diện tích</TableCell>
                <TableCell align='center'>Trạng thái</TableCell>
                <TableCell align='center'>Giá</TableCell>
                <TableCell align='center'>Ảnh</TableCell>
                <TableCell sx={{ textAlign: 'center' }}>Hành động</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {productList.products?.map((item, index) => (
                <TableRow key={item.unit.id}>
                  <TableCell align='center'>{index + 1}</TableCell>
                  <TableCell align='center'>{item.unit.square}</TableCell>
                  <TableCell align='center'>{item.unit.status}</TableCell>
                  <TableCell align='center'>{item.unit.price}</TableCell>
                  <TableCell align='center'>
                    <Box
                      key={index}
                      sx={{
                        '.thumbnail': {
                          width: 120,
                          height: 80,
                          objectFit: 'cover',
                        },
                      }}>
                      <img
                        src={item.unit.image[0].image}
                        className='thumbnail'
                      />
                    </Box>
                  </TableCell>
                  <TableCell sx={{ textAlign: 'center' }}>
                    {/* <ActionButton>
                        <Box mb={1}>
                         
                      </ActionButton> */}
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                      {/* <ButtonWithTooltip
                        color='primary'
                        variant='outlined'
                        title='Chi tiết'
                        placement='left'
                        onClick={handleModalOpen}
                        sx={{ marginRight: 1 }}>
                        <Info />
                      </ButtonWithTooltip> */}
                      <DetailModal data={item} />
                      <ButtonWithTooltip
                        color='primary'
                        onClick={() => navigate(`update/${item?.unit.id}`)}
                        variant='outlined'
                        title='Chỉnh sửa'
                        placement='left'>
                        <Edit />
                      </ButtonWithTooltip>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Card>
  );
};

export default ProductList;
