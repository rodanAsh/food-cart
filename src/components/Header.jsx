import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContextProvider'

const Header = () => {
  const {getTotalItem} = useContext(CartContext)
  return (
    <section className='bg-slate-50 text-slate-900 p-4 mx-4 rounded-md flex items-center justify-between'>
        <Link to='/'><h1 className='font-bold text-4xl cursor-pointer'>Tastie.</h1></Link>
        <div className="">
            <span className='bg-slate-900 text-slate-50 rounded-[50%] px-2 py-1'>{getTotalItem()}</span>
            <Link to='/cart'><span className='ml-1 cursor-pointer'>View Cart</span></Link>
        </div>
    </section>
  )
}

export default Header