import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormControl,
  SxProps,
  Theme,
  Typography,
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { ChangeEvent, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useQueryClient } from '@tanstack/react-query';
import { createSchema, updateSchema } from '../utils/schema/articleSchema';
import Input from '../../../../components/Input';
// import test from '../../../../data/test.json';

const ProductUpsert = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);
  const [products, setProducts] = useState<any>([]);
  const [product, setProduct] = useState(null);

  const handleTest = () => {
    fetch('http://localhost:3000/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ test: 'admin' }),
    });
  };

  const productData = productList.products.find(
    (product) => product.unit.id === +id!
  );

  const formik = useFormik({
    initialValues: {
      square: '',
      tag: '',
      status: '',
      price: '',
      bed: '',
      bath: '',
      room: '',
      direction: '',
    },
    validationSchema: updateSchema,
    validateOnChange: false,
    onSubmit(values) {
      console.log(values);
      // mutation.mutate(values);
    },
  });

  useEffect(() => {
    if (productData) {
      formik.setFieldValue('square', productData?.unit.square);
      formik.setFieldValue('status', productData?.unit.status);
      formik.setFieldValue('price', productData?.unit.price);
      formik.setFieldValue('bed', productData?.unit.bed);
      formik.setFieldValue('bath', productData?.unit.bath);
      formik.setFieldValue('room', productData?.unit.room);
      formik.setFieldValue('direction', productData?.unit.direction);
    }
  }, [productData]);

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    formik.setFieldValue(name, value);
  };

  return (
    <Card sx={{ mt: 3, borderRadius: 2 }}>
      <CardHeader
        title={
          <Typography variant='h5' sx={{ fontWeight: 600 }}>
            Sửa bài viết
          </Typography>
        }
      />
      <Divider />
      <Button onClick={handleTest}>cc</Button>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <FormControl>
          <Input
            id='square'
            label='Diện tích'
            name='square'
            variant='filled'
            required
            helperText={
              <Box component={'span'} sx={helperTextStyle}>
                {formik.errors.square}
              </Box>
            }
            value={formik.values.square}
            onChange={handleChangeValue}
          />
        </FormControl>
        <FormControl>
          <Input
            id='status'
            label='Trạng thái'
            name='status'
            variant='filled'
            required
            helperText={
              <Box component={'span'} sx={helperTextStyle}>
                {formik.errors.status}
              </Box>
            }
            value={formik.values.status}
            onChange={handleChangeValue}
          />
        </FormControl>
        <FormControl>
          <Input
            id='price'
            label='Giá'
            name='price'
            variant='filled'
            required
            helperText={
              <Box component={'span'} sx={helperTextStyle}>
                {formik.errors.price}
              </Box>
            }
            value={formik.values.price}
            onChange={handleChangeValue}
          />
        </FormControl>
        <FormControl>
          <Input
            id='bed'
            label='Phòng ngủ'
            name='bed'
            variant='filled'
            required
            helperText={
              <Box component={'span'} sx={helperTextStyle}>
                {formik.errors.bed}
              </Box>
            }
            value={formik.values.bed}
            onChange={handleChangeValue}
          />
        </FormControl>
        <FormControl>
          <Input
            id='bath'
            label='Phòng tắm'
            name='bath'
            variant='filled'
            required
            helperText={
              <Box component={'span'} sx={helperTextStyle}>
                {formik.errors.bath}
              </Box>
            }
            value={formik.values.bath}
            onChange={handleChangeValue}
          />
        </FormControl>
        <FormControl>
          <Input
            id='room'
            label='Số phòng'
            name='room'
            variant='filled'
            required
            helperText={
              <Box component={'span'} sx={helperTextStyle}>
                {formik.errors.room}
              </Box>
            }
            value={formik.values.room}
            onChange={handleChangeValue}
          />
        </FormControl>
        <FormControl>
          <Input
            id='direction'
            label='Hướng phòng'
            name='direction'
            variant='filled'
            required
            helperText={
              <Box component={'span'} sx={helperTextStyle}>
                {formik.errors.direction}
              </Box>
            }
            value={formik.values.direction}
            onChange={handleChangeValue}
          />
        </FormControl>
        <Box sx={{ textAlign: 'end' }}>
          <Button onClick={() => navigate('/product')} sx={{ mr: 2 }}>
            Trở lại
          </Button>
          <Button variant='contained' onClick={() => formik.handleSubmit()}>
            Cập nhật
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductUpsert;

const helperTextStyle: SxProps<Theme> = {
  color: 'red',
  fontSize: 13,
};
