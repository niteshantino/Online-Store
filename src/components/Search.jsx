import React from "react";
import { Input } from "antd";
const Search = ({ input, setInput }) => {
  return (
    // <div className="flex justify-center w-[50%] p-5">
      <div className="w-[20vw]">
        <Input
          icon="search"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder="Search Items Here..."
        />
      </div>
    // </div>
  );
};

export default Search;
