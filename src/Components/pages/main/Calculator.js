import React from "react";

function Calculator() {
  return (
    <div className="calcDiv d-flex justify-content-center align-items-center  ">

      
      <coingecko-coin-converter-widget className='widgetCalc'
        coin-id="bitcoin"
        currency="usd"
        background-color="#ffffff"
        font-color="#4c4c4c"
        locale="en"
        width="3"
      ></coingecko-coin-converter-widget>
    </div>
  );
}

export default Calculator;
