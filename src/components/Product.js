import React from 'react'
import '../styles/Product.css'
import { useStateValue } from './StateProvider'

const Product = ({ id, title, price, image, rating }) => {

  const [{ basket }, dispatch] = useStateValue();

  console.log('this is the basket >>> ', basket)

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        image: image,
        rating: rating
      }
    })
  }

  return (
    <div className='product'>
        <div className="product__info">
            <p>{title}</p>
            <p className='product__price'>
            <small>$</small>
            <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {Array(rating).fill().map((_, i) =>  <p>🌟</p>)}
            </div>
        </div>
        <img src={image}
        alt="productPhoto" />
        <button onClick={addToBasket}>Add to basket</button>
    </div>
  )
}

export default Product