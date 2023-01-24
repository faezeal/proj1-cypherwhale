import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CoinList } from "../confige/api";
import { CryptoState } from "../CryptoContext";
import { numberWithCommas } from "./Carousel";
import Table from "react-bootstrap/esm/Table";
import ReactPaginate from "react-paginate";
import './CoinTable.css'

const Coinstable = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const { currency, symbol } = CryptoState();
  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));
    setCoins(data);
    setLoading(false);
  };
  console.log(coins);
  useEffect(() => {
    fetchCoins();
  }, [currency]);

  const handleSearch = () => {
    return coins.filter(
      (coin) =>
        // coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };

  //----------------------------------------------------------------------------------------------------------
  // const darkTheme = createTheme({
  //   palette: {
  //     primary: { main: "#fff" },
  //     type: "dark",
  //   },
  // });
  // const useStyles = makeStyles({
  //   row:{
  //     backgroundColor:"#16171a",
  //     cursor:"pointer" ,
  //     "&:hover":{
  //       backgroundColor:"#131111"
  //     },
  //   },
  //   pagination:{
  //     "& .MuiPaginationItem-root":{
  //       color:"gold",
  //     },
  //   }
  // });
  // const Classes = useStyles();
  // -------------------------------------------------------------------------------------------------------------------
  return (
    <div className="bg-primary" style={{ textAlign: "center",padding:"20px"}}>
      <h3 className="fs-5 text-light" style={{ marginTop:'18px' }}>
        قیمت ارزهای دیجیتال بر پایه حجم بازار
      </h3>
      <input
        class="form-control form-control-lg"
        style={{ marginBottom: 20, width: "100%" }}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="جستجوی ارز دیجیتال"
      />
      <div>
        {loading ? (
          <Spinner animation="grow" variant="secondary" />
        ) : (
          <Table>
            <thead style={{ backgroundColor: "#EEBC1D" }}>
              <tr>
                {["ارز", "قیمت", "تغیرات روزانه", "حجم بازار"].map((head) => (
                  <th
                    style={{ color: "black", fontWeight: "700" }}
                    key={head}
                    align={head === "coin" ? "" : "right"}
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {handleSearch().length>10?handleSearch().slice((page-1)*10,(page-1)*10+10)

                .map((row) => {
                  const profit = row.price_change_percentage_24h > 0;
                  return (
                    <tr
                    onClick={() => navigate(`/currencyDisplayCoin/coins/${row.id}`)}                 
                    key={row.name}
                  >
                    <td
                      style={{
                        display: "flex",
                        gap: 15,
                        cursor:"pointer"
                      }}
                    >
                      <img
                        src={row?.image}
                        alt={row.name}
                        height="30"
                        style={{ marginBottom: 10 }}
                      />
                      <div
                        style={{ display: "flex",color:'#fff', flexDirection: "column" }}
                      >
                        <span
                          style={{ textTransform: "uppercase", fontSize: 22 }}
                        >
                          {row.symbol}
                        </span>
                        <span className='text-light'>{row.name}</span>
                      </div>
                    </td>
                    <td  className='text-light'>
                     
                      {symbol}{" "}
                      {numberWithCommas(row.current_price.toFixed(2))}
                    </td>
                    <td 
                      style={{
                        direction:"ltr",
                        fontWeight: 500,
                        color: profit > 0 ? "rgb(14,203,129)" : "red",
                      }} 
                    >
                      {profit && "+"}
                      {row.price_change_percentage_24h.toFixed(2)}%
                    </td>
                    <td className='text-light'>
                      {symbol}{" "}
                      {numberWithCommas(row.market_cap.toString()).slice(
                        0,
                        -8
                      )}
                      M
                    </td>
                  </tr>
                  );
                }):handleSearch().slice(0,10)

                .map((row) => {
                  const profit = row.price_change_percentage_24h > 0;
                  return (
                    <tr
                    onClick={() => navigate(`/currencyDisplayCoin/coins/${row.id}`)}                 
                    key={row.name}
                  >
                    <td
                      style={{
                        display: "flex",
                        gap: 15,
                        cursor:"pointer"
                      }}
                    >
                      <img
                        src={row?.image}
                        alt={row.name}
                        height="30"
                        style={{ marginBottom: 10 }}
                      />
                      <div
                        style={{ display: "flex",color:'#fff', flexDirection: "column" }}
                      >
                        <span
                          style={{ textTransform: "uppercase", fontSize: 22 }}
                        >
                          {row.symbol}
                        </span>
                        <span className='text-light'>{row.name}</span>
                      </div>
                    </td>
                    <td  className='text-light'>
                     
                      {symbol}{" "}
                      {numberWithCommas(row.current_price.toFixed(2))}
                    </td>
                    <td 
                      style={{
                    
                        fontWeight: 500,
                        color: profit > 0 ? "rgb(14,203,129)" : "red",
                      }} 
                    >
                      {profit && "+"}
                      {row.price_change_percentage_24h.toFixed(2)}%
                    </td>
                    <td className='text-light'>
                      {symbol}{" "}
                      {numberWithCommas(row.market_cap.toString()).slice(
                        0,
                        -8
                      )}
                      M
                    </td>
                  </tr>
                  );
                })}
            </tbody>
              
          </Table>
        )}
        <ReactPaginate
              
              breakLabel="..."
              nextLabel=">"
              onPageChange={(event) => {
                setPage(event.selected+1);
                console.log(event.selected)
                window.scroll(0, 450);
              }}
              pageRangeDisplayed={5}
              pageCount={(handleSearch()?.length / 10).toFixed(0)}
              previousLabel=" <"
              renderOnZeroPageCount={null}
              containerClassName={'paginationp'}
              activeClassName={'active'}
            />
      </div>
    </div>
  );
};

export default Coinstable;
