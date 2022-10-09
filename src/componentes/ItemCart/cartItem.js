import React from 'react'

const CartItem = ({ data, delFromCart }) => {
  let { id, name, price, img, quantity } = data;

  return (
    <>
      <div class="card" style={{ width: '600px', paddingBlockEnd: '10px', background: '#FFFFFF00', border: 'none', marginRight: '100px' }}>
        <h5 class="card-header">{name} x {quantity}</h5>
        <div class="card-body">
          <div class="row">
            <div className="col-sm-4">
              <img style={{ width: 'auto', height: '130px', borderRadius: '8px' }} src={img} />
            </div>
            <div className="col-sm-8">
              <h5 class="card-title">Total: ${price * quantity}</h5>
              <p class="card-text">Su pedido se está preparando</p>
              <br />
              <button class="btn btn-danger btn-sm" onClick={() => delFromCart(id)} >Eliminar producto</button>
              <button class="btn btn-danger btn-sm" onClick={() => delFromCart(id, true)}>Eliminar todo</button>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default CartItem