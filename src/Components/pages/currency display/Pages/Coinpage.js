
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CoinInfo } from "../Components/CoinInfo";
import { SingleCoin } from "../confige/api";
import { CryptoState } from "../CryptoContext";
import { numberWithCommas } from "../Components/Carousel";
import { Spinner } from "react-bootstrap";
import ReactHtmlParser from 'html-react-parser'
import './Coinpage.css'
export default function Coinpage() {
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const { currency, symbol } = CryptoState();
  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
  };

  useEffect(() => {
    fetchCoin();
  }, []);
 
  if(!coin) return <Spinner style={{backgroundColor:"gold"}}/>
  return (
    <div className='containerp'>
      <div className='sideBarp'>
        <img
          src={coin?.image.large}
          alt={coin?.name}
          height="200"
          style={{ marginBottom: 20,width:'40%',height:'40%'}}
        />
        <h3  className='headingp'>
          {coin?.name}
        </h3>
        <h6 variant="subtitle1" className='descriptionp'>
          {ReactHtmlParser(coin?.description.en.split(". ")[0])}.
        </h6>
        <div className='marketDatap'>
          <span style={{ display: "flex" }}>
            <h5 variant="h5" className='headingp'>
              رتبه :
            </h5>
            &nbsp; &nbsp;
            <h5 variant="h5" >
            {coin?.market_cap_rank}
            </h5>
          </span>
          <span style={{ display: "flex" }}>
            <h5 variant="h5" className='headingp'>
              قیمت  :
            </h5>
            &nbsp; &nbsp;
            <h5 variant="h5" >
            {numberWithCommas(
              coin?.market_data.current_price[currency.toLowerCase()]
            )}
            </h5>
          </span>
          <span style={{ display: "flex" }}>
            <h5 variant="h5" className='headingp'>
              حجم بازار :
            </h5>
            &nbsp; &nbsp;
            <h5 variant="h5" >
            {symbol}{" "}
            {numberWithCommas(
              coin?.market_data.market_cap[currency.toLowerCase()]
              .toString()
              .slice(0,-7)
            )}M
            </h5>
          </span>
        </div>
      </div> 
      <CoinInfo coin={coin} />  
    </div>
  );
}
