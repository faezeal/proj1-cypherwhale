import axios from "axios";
import React, { useState, useEffect } from "react";
import { HistoricalChart } from "../confige/api";
import { CryptoState } from "../CryptoContext";
import TradingChart from "./TradingChart";
import './CoinInfo.css'
import { Spinner } from "react-bootstrap";
import AlertChart from "./AlertChart";



export const CoinInfo = ({ coin }) => {
  const [historicalData, setHistoricalData] = useState();
  const [days, setDays] = useState(1);
  const { currency } = CryptoState();
  const fetchHistoicalData = async () => {
    const { data } = await axios.get(HistoricalChart(coin.id, days, currency));
    setHistoricalData(data.prices);
  };
  useEffect(() => {
    fetchHistoicalData();
  }, [currency, days]);


  return (

    <>
      {!historicalData ? (
        <Spinner animation="grow" variant="secondary" />
      ) : (
        <div className='coinInfo_FullDatap'>
          <TradingChart symbol={coin.symbol} exchange="BINANCE" />
          <AlertChart symbol={coin.symbol} />
        </div>
      )}
    </>

  );
};
