import React from 'react'

const ProductItem = ({ data, addToCart }) => {
  let { id, price, name, img } = data
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={img} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h5>${price}</h5>
        <p className="card-text" style={{ textAlign: 'justify' }}>En Sandwich Qbano se preparan los mejores alimentos, porque son preparados con los mejores ingredientes :D</p>
        <button className="btn btn-dark" onClick={() => addToCart(id)} >Añadir</button>
      </div>
    </div>
  )
}



export default ProductItem