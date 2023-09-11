import React from "react";

import { Button, Space } from "antd";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex justify-around bg-black text-white p-8 items-center text-lg text-center">
      <Link to={`/`}>
        <div className=" text-3xl cursor-pointer">Online Store</div>
      </Link>
      <div className="w-[30%] ">
        <nav>
          <Space wrap className="flex justify-evenly">
            <Button className="bg-white text-black font-bold" type="primary">
              Add Product
            </Button>
            <Button className="bg-white text-black font-bold" type="primary">
              Login/SignUp
            </Button>
          </Space>
        </nav>
      </div>
    </div>
  );
};

export default Header;
