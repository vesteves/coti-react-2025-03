'use client'

import { useCallback, useEffect, useState } from "react"

export const PandiPage = () => {
  // const products = [
  //   {
  //     id: 1,
  //     name: 'Produto 1',
  //     description: 'Este é o produto 1',
  //     price: 'R$ 10,00',
  //     slug: 'produto-1',
  //     image: 'https://placehold.co/600x400',
  //     category: 'Meninos'
  //   },
  //   {
  //     id: 2,
  //     name: 'Produto 2',
  //     description: 'Este é o produto 2',
  //     price: 'R$ 100,00',
  //     slug: 'produto-2',
  //     image: 'https://placehold.co/600x400',
  //     category: 'Meninos'
  //   },
  //   {
  //     id: 3,
  //     name: 'Produto 3',
  //     description: 'Este é o produto 3',
  //     price: 'R$ 1000,00',
  //     slug: 'produto-3',
  //     image: 'https://placehold.co/600x400',
  //     category: 'Meninos'
  //   },
  //   {
  //     id: 4,
  //     name: 'Produto 4',
  //     description: 'Este é o produto 4',
  //     price: 'R$ 9000,00',
  //     slug: 'produto-4',
  //     image: 'https://placehold.co/600x400',
  //     category: 'Meninos'
  //   },
  //   {
  //     id: 5,
  //     name: 'Produto 5',
  //     description: 'Este é o produto 5',
  //     price: 'R$ 9900,00',
  //     slug: 'produto-5',
  //     image: 'https://placehold.co/600x400',
  //     category: 'Meninas'
  //   },
  //   {
  //     id: 6,
  //     name: 'Produto 6',
  //     description: 'Este é o produto 6',
  //     price: 'R$ 9090,00',
  //     slug: 'produto-6',
  //     image: 'https://placehold.co/600x400',
  //     category: 'Meninas'
  //   },
  //   {
  //     id: 7,
  //     name: 'Produto 7',
  //     description: 'Este é o produto 7',
  //     price: 'R$ 9000,00',
  //     slug: 'produto-7',
  //     image: 'https://placehold.co/600x400',
  //     category: 'Meninas'
  //   },
  //   {
  //     id: 8,
  //     name: 'Produto 8',
  //     description: 'Este é o produto 8',
  //     price: 'R$ 9000,00',
  //     slug: 'produto-8',
  //     image: 'https://placehold.co/600x400',
  //     category: 'Meninas'
  //   },
  // ]

  // const productString = JSON.stringify(products)
  // localStorage.setItem('products', productString)

  // const user = {
  //   id: 1,
  //   name: 'Vitor Esteves'
  // }

  // const productString = JSON.stringify(user)
  // localStorage.setItem('user', productString)

  const [products, setProducts] = useState([])

  const fetchProducts = useCallback(() => {
    const temp = localStorage.getItem('products') || '[]' 
    const tempJson = JSON.parse(temp)
    setProducts(tempJson)
  }, [setProducts])

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  const categories = ['Meninos', 'Meninas']

  return (
    <div className="">
      <div className="text-center text-4xl text-red-400 font-bold mb-30">
        Pandi Page
      </div>

      {categories.map(category => <>
        <div key={category} className="text-2xl mb-4">{category}</div>
        <div className="grid grid-cols-4 gap-4 mb-8">
          {
            products &&
            products
              .filter(product => product.category === category)
              .map(product => (
                <div key={product.id} className="outline-1 p-2 text-center">
                  <div>{product.name}</div>
                  <div>{product.price}</div>
                  <button className="text-gray-600 bg-green-200 hover:bg-green-400 rounded-lg px-8 py-4">Adicionar ao carrinho</button>
                </div>
            ))}
        </div>
      </>) }
    </div>
  )
}

export default PandiPage