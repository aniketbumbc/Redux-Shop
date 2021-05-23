import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setProduct } from '../redux/actions/productActions';
import Product from './Product';

const ProductList = () => {
  useSelector((state) => state.allProducts);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const res = await axios
      .get('https://fakestoreapi.com/products')
      .catch((err) => {
        console.log(err);
      });
    dispatch(setProduct(res.data));
  };

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line
  }, []);
  return (
    <div className='ui grid container'>
      <Product />
    </div>
  );
};

export default ProductList;
