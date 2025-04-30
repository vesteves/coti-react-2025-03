'use client'
import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'next/navigation';

export const ProdutoPage = ({ params }) => {
  const { slug } = useParams(params)

  const [product, setProduct] = useState({
    name: '',
    image: 'https://placehold.co/600x400',
    price: '',
    id: 0,
    description: '',
    slug: ''
  })

  // {
  //   name: 'fake name',
  //   image: 'fake image',
  //   price: 'fake price',
  //   id: 0,
  //   desciption: 'fake description',
  //   slug: 'fake-slug'
  // }

  const fetchProducts = useCallback(async () => {
    const temp = await JSON.parse(localStorage.getItem('products'))
    setProduct(temp.find(item => item.slug === slug) || {
      name: '',
      image: '',
      price: '',
      id: 0,
      desciption: '',
      slug: ''
    })
  }, [setProduct])

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  const handleSendToCart = () => {
    const cartTemp = localStorage.getItem('cart') || '[]'
    const cart = JSON.parse(cartTemp)
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
    })

    localStorage.setItem('cart', JSON.stringify(cart))
    alert(`O produto ${product.name} foi adicionado no carrinho`)
  }

  return <div className="">
    <div className="">{product.nome}</div>
    <div className="grid grid-cols-2 gap-4">
      <img src={product.image} className="" />
      <div className="">
        <div>{product.price}</div>
        <div>{product.description}</div>
        <button
          className='bg-green-200 text-gray-800 px-10 py-2 border rounded-lg hover:bg-green-400'
          onClick={() => handleSendToCart()}
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  </div>
}

export default ProdutoPage