import React, { useContext } from 'react'
import { CartContext } from '../context/CartContextProvider'

const Cart = () => {
  const {products, cartItems, handleRemoveCart, getTotalAmount} = useContext(CartContext)
  let cartTotal = getTotalAmount()
  return (
    <section className='max-w-7xl mx-auto px-20 py-4'>
      {
        products.map((item) => {
          if(cartItems[item.id] > 0){
            return (
              <div key={item.id} className='bg-slate-200 flex items-center mb-2 justify-between text-slate-900 rounded-md py-2 px-4'>
                <img src={item.pic} className='w-[100px] h-[80px]' alt="" />
                <div>
                  <p className='text-base font-semibold'>{item.name}</p>
                  <p className='font-bold'>$ {item.amt}</p>
                </div>
                <p>{cartItems[item.id]}</p>
                <p>$ {item.amt * cartItems[item.id]}</p>
                <button onClick={() => handleRemoveCart(item.id)} className='bg-red-500 text-slate-100 rounded-md px-4 py-2'>Remove from cart</button>
              </div>
            )
          }
          return null;
        })
      }

      <div className='mt-5 text-slate-100 flex flex-col gap-2 items-center justify-center'>
        <h1 className='text-4xl font-bold'>Cart Totals</h1>
        <div className='flex gap-10 items-center justify-between'>
          <span>Subtotal</span>
          <span>$ {cartTotal}</span>
        </div>
        <hr />
        <div className='flex gap-10 items-center justify-between'>
          <span>Shipping fee</span>
          <span>free</span>
        </div>
        <hr />
        <div className='flex gap-10 items-center justify-between'>
          <span>Total</span>
          <span>$ {cartTotal}</span>
        </div>
      </div>
    </section>
  )
}

export default Cart