import React, { useState } from "react"
import ProductCard from "@/Components/ProductCard/ProductICard"

export default function Filter({ products, categories }) {
  const [filterOptions, setFilterOptions] = useState({
    name: "",
    minPrice: "",
    maxPrice: "",
    category: "",
    rating: null,
  })

  // Filter the products based on filterOptions
  const filteredProducts = products.filter((product) => {
    const { name, minPrice, maxPrice, category, rating } = filterOptions

    // Filter by name
    if (name && product.title.toLowerCase().includes(name.toLowerCase())) {
      return false
    }

    // Filter by minPrice
    if (minPrice && parseFloat(product.price) < parseFloat(minPrice)) {
      return false
    }

    // Filter by maxPrice
    if (maxPrice && parseFloat(product.price) > parseFloat(maxPrice)) {
      return false
    }

    // Filter by category
    if (category && product.category.toLowerCase() !== category.toLowerCase()) {
      return false
    }

    // Filter by rating
    if (rating !== null && parseFloat(product.rating) < parseFloat(rating)) {
      return false
    }

    return true
  })

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFilterOptions({ ...filterOptions, [name]: value })
  }

  return (
    <div>
      <nav className="w-full border flex grid-4 gap-auto my-3">
        {/* Filter by name */}
        <div className="border hover:bg-red-500 p-5">
          <input
            placeholder="Search by name"
            name="name"
            value={filterOptions.name}
            onChange={handleInputChange}
            className="mx-2"
          />
        </div>

        {/* Filter by price min */}
        <div className="p-5 flex-row">
          <label>Minimum Price:</label>
          <input
            type="number"
            name="minPrice"
            value={filterOptions.minPrice}
            onChange={handleInputChange}
            className="mx-2"
          />
        </div>
        {/* Filter by price max */}
        <div className="p-5 flex-row">
          <label>Maximum Price:</label>
          <input
            type="number"
            name="maxPrice"
            value={filterOptions.maxPrice}
            onChange={handleInputChange}
            className="mx-2"
          />
        </div>
        {/* Filter by rating */}
        <div className="p-5 flex-row">
          <label>Minimum Rating:</label>
          <input
            type="number"
            name="rating"
            value={filterOptions.rating}
            onChange={handleInputChange}
            className="mx-2"
          />
        </div>
      </nav>
      {/* mapping the results */}
      <div className="grid grid-cols-1 mt-4 mx-4 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
