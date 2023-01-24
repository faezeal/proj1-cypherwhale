import React from "react";
import "./section1.css";

function Section1() {
  return (
    <div className="section1 col-xl-12 position-relative d-flex justify-content-center align-items-center">
      <div className="cover position-absolute botton-0 top-0 start-0 end-0 "></div>

      <h1 className="title position-absolute text-light d-flex justify-content-center w-100%">
        با انتخاب راه حل درست
        <span className="text-secondary"> کسب و کار</span>خود را رونق دهید
      </h1>
      <div className=" divInput d-flex justify-content-center align-items-center position-relative">
        <input
          placeholder="جست و جو کنید"
          className="searchBox position-absolute ps-5 pe-3"
        />
        <span className="position-absolute start-0 p-2">
          <i className="bi bi-search ps-2 searchIcon"></i>
        </span>
      </div>

      <div className="containerPrice">
        <div className="priceItem">
          بیت کوین <span className="spanPrice">21000 $</span>
        </div>
        <div className="priceItem">
          اتریوم <span className="spanPrice">1600 $</span>
        </div>
        <div className="priceItem">
          بایننس کوین<span className="spanPrice">300 $</span>
        </div>
      </div>
    </div>
  );
}

export default Section1;
