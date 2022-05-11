import React, { useState, useEffect } from "react";
import axios from "axios";
import Coin from "./Coin";
import "../../App.css";

const url =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

const CryptoScreen = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get(url)
      .then((res: any) => {
        setCoins(res.data);
      })
      .catch((err: any) => console.log(err));
  }, []);

  const filteredCoins = coins.filter((coin: any) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search</h1>
        <form>
          <input
            type="text"
            placeholder="Search"
            className="coin-input"
            onChange={(e: any) => setSearch(e.target.value)}
          />
        </form>
      </div>

      {filteredCoins.map((coin: any) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
    </div>
  );
};

export default CryptoScreen;
