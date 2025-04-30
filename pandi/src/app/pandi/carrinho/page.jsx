'use client'

import { useState, useCallback, useEffect } from 'react'

export const CarrinhoPage = () => {
  const [cart, setCart] = useState([])

  const fetchCart = useCallback(() => {
    const cartTemp = localStorage.getItem('cart') || '[]'
    const cartStorage = JSON.parse(cartTemp)
    setCart(cartStorage)
  }, [setCart])

  useEffect(() => {
    fetchCart()
  }, [fetchCart])

  const onRemoveProduct = (id, productName) => {
    const temp = cart.filter(product => Number(product.id) !== Number(id))
    const tempString = JSON.stringify(temp)
    localStorage.setItem('cart', tempString)

    fetchCart()

    alert(`Item ${productName} removido com sucesso!`)
  }

  return <div className="">
    <ul>
      {cart && cart.map(product => <li key={product.id}>{product.name} - {product.price} <button onClick={() => onRemoveProduct(product.id, product.name)} className='bg-red-300 px-8 py-2 rounded-lg text-gray-600 hover:bg-red-500'>remover</button></li>)}
    </ul>
  </div>
}

export default CarrinhoPage