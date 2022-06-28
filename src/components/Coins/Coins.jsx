import React, { useEffect, useState } from "react";
import axios from "axios";

import "./CoinsStyles.css";

import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";

const Coins = () => {
  const [data, setData] = useState(null);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=12&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!data) return null;

  return (
    <div className="coins">
      <div className="container">
        {/*Left side*/}
        <div className="left">
          <h2>Explore top Crypto's like Bitcoin, Ethereum, and Dogecoin</h2>
          <p>See all Avaible assets: Cryptocurrencies and NFT's</p>
        </div>
        {/*Right side*/}
        <div className="right">
          {/*Card*/}
          <div className="card">
            <div className="top">
              <img src={data[0].image} alt="/" />
            </div>
            <div>
              <h5>{data[0].name}</h5>
              <p>${data[0].current_price.toLocaleString()}</p>
            </div>
            {data[0].price_change_percentage_24h < 0 ? (
              <span className="red">
                <FiArrowDown className="icon" />
                {data[0].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className="green">
                <FiArrowUpRight className="icon" />
                {data[0].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>
          {/*Card*/}
          <div className="card">
            <div className="top">
              <img src={data[1].image} alt="/" />
            </div>
            <div>
              <h5>{data[1].name}</h5>
              <p>${data[1].current_price.toLocaleString()}</p>
            </div>
            {data[1].price_change_percentage_24h < 0 ? (
              <span className="red">
                <FiArrowDown className="icon" />
                {data[1].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className="green">
                <FiArrowUpRight className="icon" />
                {data[1].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>
          {/*Card*/}
          <div className="card">
            <div className="top">
              <img src={data[2].image} alt="/" />
            </div>
            <div>
              <h5>{data[2].name}</h5>
              <p>${data[2].current_price.toLocaleString()}</p>
            </div>
            {data[0].price_change_percentage_24h < 0 ? (
              <span className="red">
                <FiArrowDown className="icon" />
                {data[2].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className="green">
                <FiArrowUpRight className="icon" />
                {data[2].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>
          {/*Card*/}
          <div className="card">
            <div className="top">
              <img src={data[3].image} alt="/" />
            </div>
            <div>
              <h5>{data[3].name}</h5>
              <p>${data[3].current_price.toLocaleString()}</p>
            </div>
            {data[3].price_change_percentage_24h < 0 ? (
              <span className="red">
                <FiArrowDown className="icon" />
                {data[3].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className="green">
                <FiArrowUpRight className="icon" />
                {data[3].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>
          {/*Card*/}
          <div className="card">
            <div className="top">
              <img src={data[4].image} alt="/" />
            </div>
            <div>
              <h5>{data[4].name}</h5>
              <p>${data[4].current_price.toLocaleString()}</p>
            </div>
            {data[4].price_change_percentage_24h < 0 ? (
              <span className="red">
                <FiArrowDown className="icon" />
                {data[4].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className="green">
                <FiArrowUpRight className="icon" />
                {data[4].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>
          {/*Card*/}
          <div className="card">
            <div className="top">
              <img src={data[5].image} alt="/" />
            </div>
            <div>
              <h5>{data[5].name}</h5>
              <p>${data[5].current_price.toLocaleString()}</p>
            </div>
            {data[5].price_change_percentage_24h < 0 ? (
              <span className="red">
                <FiArrowDown className="icon" />
                {data[5].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className="green">
                <FiArrowUpRight className="icon" />
                {data[5].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>
          {/*Card*/}
          <div className="card">
            <div className="top">
              <img src={data[6].image} alt="/" />
            </div>
            <div>
              <h5>{data[6].name}</h5>
              <p>${data[6].current_price.toLocaleString()}</p>
            </div>
            {data[5].price_change_percentage_24h < 0 ? (
              <span className="red">
                <FiArrowDown className="icon" />
                {data[6].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className="green">
                <FiArrowUpRight className="icon" />
                {data[6].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>
          {/*Card*/}
          <div className="card">
            <div className="top">
              <img src={data[7].image} alt="/" />
            </div>
            <div>
              <h5>{data[7].name}</h5>
              <p>${data[7].current_price.toLocaleString()}</p>
            </div>
            {data[5].price_change_percentage_24h < 0 ? (
              <span className="red">
                <FiArrowDown className="icon" />
                {data[7].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className="green">
                <FiArrowUpRight className="icon" />
                {data[7].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>
          {/*Card*/}
          <div className="card">
            <div className="top">
              <img src={data[8].image} alt="/" />
            </div>
            <div>
              <h5>{data[8].name}</h5>
              <p>${data[8].current_price.toLocaleString()}</p>
            </div>
            {data[5].price_change_percentage_24h < 0 ? (
              <span className="red">
                <FiArrowDown className="icon" />
                {data[8].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className="green">
                <FiArrowUpRight className="icon" />
                {data[8].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>
          {/*Card*/}
          <div className="card">
            <div className="top">
              <img src={data[9].image} alt="/" />
            </div>
            <div>
              <h5>{data[9].name}</h5>
              <p>${data[9].current_price.toLocaleString()}</p>
            </div>
            {data[9].price_change_percentage_24h < 0 ? (
              <span className="red">
                <FiArrowDown className="icon" />
                {data[9].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className="green">
                <FiArrowUpRight className="icon" />
                {data[9].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>
          {/*Card*/}
          <div className="card">
            <div className="top">
              <img src={data[10].image} alt="/" />
            </div>
            <div>
              <h5>{data[10].name}</h5>
              <p>${data[10].current_price.toLocaleString()}</p>
            </div>
            {data[5].price_change_percentage_24h < 0 ? (
              <span className="red">
                <FiArrowDown className="icon" />
                {data[10].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className="green">
                <FiArrowUpRight className="icon" />
                {data[10].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>
          {/*Card*/}
          <div className="card">
            <div className="top">
              <img src={data[11].image} alt="/" />
            </div>
            <div>
              <h5>{data[11].name}</h5>
              <p>${data[11].current_price.toLocaleString()}</p>
            </div>
            {data[11].price_change_percentage_24h < 0 ? (
              <span className="red">
                <FiArrowDown className="icon" />
                {data[11].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className="green">
                <FiArrowUpRight className="icon" />
                {data[11].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coins;
