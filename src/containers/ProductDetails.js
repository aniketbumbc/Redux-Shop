import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectedProduct,
  deleteProduct,
} from '../redux/actions/productActions';
import axios from 'axios';

const ProductDetails = () => {
  const { id } = useParams();
  const product = useSelector((state) => state.allProducts.product);
  if (product) {
    var { image, title, price, category, description } = product;
  }

  const dispatch = useDispatch();

  const productByid = async (id) => {
    const res = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => console.log(err));
    dispatch(selectedProduct(res.data));
  };

  useEffect(() => {
    productByid(id);
    return () => {
      dispatch(deleteProduct());
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className='ui grid container'>
        {product && Object.keys(product).length === 0 ? (
          <div>...Loading</div>
        ) : (
          <div className='ui placeholder segment'>
            <div className='ui two column stackable center aligned grid'>
              <div className='ui vertical divider'>AND</div>
              <div className='middle aligned row'>
                <div className='column lp'>
                  <img className='ui fluid image' alt={title} src={image} />
                </div>
                <div className='column rp'>
                  <h1>{title}</h1>
                  <h2>
                    <Link className='ui teal tag label'>${price}</Link>
                  </h2>
                  <h3 className='ui brown block header'>{category}</h3>
                  <p>{description}</p>
                  <div className='ui vertical animated button' tabIndex='0'>
                    <div className='hidden content'>
                      <i className='shop icon'></i>
                    </div>
                    <div className='visible content'>Add to Cart</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
