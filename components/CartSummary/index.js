import cartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <cartContext.Consumer>
    {value => {
      const {cartList} = value
      const cartListLLength = cartList.length
      let total = 0
      cartList.forEach(each => {
        total += each.price * each.quantity
      })
      return (
        <>
          <div className="priceContainer">
            <h1 className="heading">
              Order Total: <span className="totalPrice">{total}</span> /-
            </h1>
            <p className="describe">{cartListLLength} Items in cart</p>
            <button type="button" className="proceed-btn d-sm-none">
              Checkout
            </button>
          </div>
          <button type="button" className="proceed-btn d-lg-none">
            Checkout
          </button>
        </>
      )
    }}
  </cartContext.Consumer>
)

export default CartSummary
