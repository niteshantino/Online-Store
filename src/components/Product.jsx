import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  const getProduct = async (id) => {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    setData(response.data);
  };
  useEffect(() => {
    getProduct(id);
  }, [id]);
  return (
    <div className="flex justify-center items-center h-[80vh] ">
      <div className="flex justify-between w-[60%] h-[70%] p-2">
        <div>
          <img
            className="w-[40vw] h-[100%] rounded-xl"
            src={data.images?.[0]}
            alt={data.title}
          />
        </div>
        <div className="flex justify-between p-5 w-[30vw]">
          <div>
            <div className="font-bold p-2">
              Brand:
              <span className="font-normal"> {data.brand}</span>
            </div>
            <div className="font-bold p-2">
              Title:
              <span className="font-normal"> {data.title}</span>
            </div>

            <div className="font-bold p-2">
              Category:
              <span className="font-normal"> {data.category}</span>
            </div>
            <div className="font-bold p-2">
              Description:
              <span className="font-normal"> {data.description}</span>
            </div>
          </div>
          <div className="flex font-bold flex-col w-[30vw] p-2">
            <span>
              Rating: <span className="font-normal"> {data.rating}✰</span>
            </span>
            <span className="mt-3">
              Price:<span className="font-normal"> ${data.price}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
