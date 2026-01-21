"use client"

import { useEffect, useState } from "react"
import { Product } from "@/types/product"
import ProductCard from "@/components/ProductCard"
import SearchInput from "@/components/SearchInput"
import Header from "@/components/Header/Header"
import styles from "./Home.module.css"

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then((data: Product[]) => setProducts(data))
      .catch(console.error)
  }, [])

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <main className={styles.container}>
      <Header />
      <SearchInput value={search} onChange={setSearch} />

      <div className={styles.grid}>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  )
}
