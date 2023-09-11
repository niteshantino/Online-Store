import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Search from "./Search";
import { Select } from "antd";

const Products = () => {
  const [isFiltered, setIsFiltered] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [searchedData, setSearchedData] = useState([]);
  const [prods, setProds] = useState([]);
  const [input, setInput] = useState("");
  const category = [
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting",
  ];
  const navigate = useNavigate();

  const options = category.map((el) => ({
    label: el,
    value: el,
  }));
  const handleFilter = async (value) => {
    const res = await axios.get(
      `https://dummyjson.com/products/category/${value}`
    );
    setFilteredData(res.data.products);
    if (filteredData) {
      setIsFiltered(true);
    }
    setProds(res.data.products);
  };
  const getAllData = async () => {
    const response = await axios.get(`https://dummyjson.com/products`);
    setProds(response.data.products);
  };
  const getSearchedData = async (input) => {
    // console.log(filteredData);
    if (isFiltered) {
      const res = filteredData.filter((el) =>
        el.title.toLowerCase().includes(input.toLowerCase())
      );
      setSearchedData(res);
      setProds(searchedData);
    } else {
      const data = await axios.get(
        `https://dummyjson.com/products/search?q=${input}`
      );
      setProds(data.data.products);
    }
  };
  // if (isFiltered) {
  //   if (input === "") {
  //     setProds(filteredData);
  //   }
  // }
  const openProduct = (id) => {
    navigate(`/products/${id}`);
  };

  useEffect(() => {
    if (input) {
      getSearchedData(input);
    } else if (isFiltered) {
      setProds(filteredData);
    } else {
      // If no filters are applied, get all data
      getAllData();
    }
  }, [input, filteredData]);

  return (
    <div>
      <div className="flex w-[100%] justify-evenly p-5">
        <Search input={input} setInput={setInput} />
        <div>
          <Select
            defaultValue="Filter By Category"
            onChange={handleFilter}
            options={options}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-10">
        {prods.map((product) => (
          <div
            onClick={() => openProduct(product.id)}
            key={product.id}
            className="bg-shitesmoke-400 shadow-lg rounded-lg p-2 flex flex-col justify-between cursor-pointer"
          >
            <span className="w-13 flex justify-end">
              <span className="bg-orange-500 p-1 rounded text-white font-bold relative top-5 w-14">
                {product.rating}✰
              </span>
            </span>
            <img
              className="w-full h-48 object-cover"
              src={product.images[0]}
              alt={product.title}
            />
            <h2 className="text-xl text-center">{product.title}</h2>
            <div className="text-gray-600 mt-2 text-center">
              {product.category}
            </div>
            <div className="flex justify-between">
              <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                Add to Cart
              </div>
              <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                ${product.price}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
