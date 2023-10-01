import React, { useState } from "react"
import ProductCard from "@/Components/productCard/ProductICard"
import { FaStar } from "react-icons/fa"

export default function Filter({ products, categories }) {
  const [filterOptions, setFilterOptions] = useState({
    name: "",
    minPrice: "",
    maxPrice: "",
    category: "",
    rating: null,
  })

  // to keep up with the stars the
  const [highlightedStars, setHighlightedStars] = useState([]);

  //  maximum rating value
  const maxRating = 5;

  // Function to toggle the highlighted stars
  const toggleHighlightedStars = (rating) => {
    if (rating === filterOptions.rating) {
      // If the rating is already selected, clear the selection
      setFilterOptions({ ...filterOptions, rating: null });
      setHighlightedStars([]);
    } else {
      // Set the selected rating and highlight the corresponding stars
      setFilterOptions({ ...filterOptions, rating });
      setHighlightedStars([...Array(rating).keys()]);
    }
  };

  // Filter the products based on filterOptions
  const filteredProducts = products.filter((product) => {
    const { name, minPrice, maxPrice, category, rating } = filterOptions;


    const handleStarHover = (rating) => {
      setHighlightedStars([...Array(rating).keys()]);
    };

    const handleStarLeave = () => {
      setHighlightedStars([]);
    };

    // Filter by name
    if (name && !product.title.toLowerCase().includes(name.toLowerCase())) {
      return false;
    }

    // Filter by minPrice
    if (minPrice && parseFloat(product.price) < parseFloat(minPrice)) {
      return false;
    }

    // Filter by maxPrice
    if (maxPrice && parseFloat(product.price) > parseFloat(maxPrice)) {
      return false;
    }

    // Filter by category
    if (category && product.category.toLowerCase() !== category.toLowerCase()) {
      return false;
    }

    // Filter by rating
    if (rating !== null && parseFloat(product.rating) < parseFloat(rating)) {
      return false;
    }

    return true;
  });

  // Handle input changes for all filters
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilterOptions({ ...filterOptions, [name]: value });
  };

  return (
    <div>
      <nav className="grid grid-cols-1 mt-4 mx-4 gap-auto lg:grid-cols-5">
        {/* Filter by name */}
        <div className="container border hover:bg-red-200 p-5 ">
          <label>Search:</label>
          <input
            placeholder="Search a product name"
            name="name"
            value={filterOptions.name}
            onChange={handleInputChange}
            className="object-contain justify-center "
          />
        </div>

        {/* Filter by category */}
        <div className="p-5 border  hover:bg-red-200 flex-wrap">
          <label>Category:</label>
          <select
            name="category"
            value={filterOptions.category}
            onChange={handleInputChange}
            className="object-contain justify-center"
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Filter by price min */}
        <div className="p-5 border  hover:bg-red-200 flex-wrap">
          <label>Minimum Price:</label>
          <input
            type="number"
            name="minPrice"
            value={filterOptions.minPrice}
            onChange={handleInputChange}
            className="object-contain justify-center"
          />
        </div>
        {/* Filter by price max */}
        <div className="p-5 border flex items-center hover:bg-red-200 flex-wrap">
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
        <div className="p-5 border flex-wrap  hover:bg-red-200">
          <label>Minimum Rating:</label>
          <div className="flex items-center mx-2">
            {[1, 2, 3, 4, 5].map((rating) => (
              <FaStar
                key={rating}
                onClick={() => toggleHighlightedStars(rating)}
                className={`cursor-pointer text-2xl ${highlightedStars.includes(rating - 1) ? "text-yellow-500" : ""
                  }`}
              />
            ))}
          </div>
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
