import React, { useContext } from 'react'
import { CartContext } from '../context/CartContextProvider'


const Products = () => {
    const {products, handleAddCart} = useContext(CartContext)
  return (
    <section className='max-w-7xl mx-auto py-4 px-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-5 gap-4'>
        {
            products.map((item,index) => (
                <div key={index} className='bg-slate-800 text-slate-50 p-2 min-w-[300px] h-[360px] rounded-md shadow-md'>
                    <img className='min-w-[300px] h-[200px] rounded-md mx-auto' src={item.pic} alt="" />
                    <div className='ml-6 md:text-left text-center mt-2'>
                        <p>{item.name}</p>
                        <p>{item.ftype}</p>
                        <p>$ {item.amt}</p>
                        <button 
                            onClick={() => handleAddCart(item.id)}
                            className='bg-green-500 rounded-md px-4 py-1 mt-2'
                        >
                            Add to cart
                        </button>
                    </div>
                </div>
            ))
        }
    </section>
  )
}

export default Products