import React from "react";
import './Banner.css'
import Carousel from "./Carousel";
function Banner() {
  return (
    <div className='bannerp mt-5 p-5'>
      <div className='bannerContentp'>
        <div className='taglinep'>
          <div
            className="display-3 text-light"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
            }}
          >
            Cipher Whale 
          </div>
          <div
            className="display-2 text-light"
            style={{fontSize:15 }}
          >
               تمام انچه که از دنیای رمز ارزهای دیجیتال میخواهید
          </div>
        </div>
         <Carousel/> 
      </div>
    </div>
  );
}

export default Banner;
