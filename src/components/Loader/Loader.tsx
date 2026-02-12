import React from "react";
import { Hourglass } from "react-loader-spinner";
import "./loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <Hourglass
        visible={true}
        height="50"
        width="50"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={["#3276cf", "#4b87d6"]}
      />
    </div>
  );
};

export default Loader;
