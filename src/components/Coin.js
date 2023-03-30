import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Coin.css';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi';

const Coin = () => {
    const [data, setData] = useState(null);
    const url =
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en';


    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        console.log(data);
    }, []);

    if (!data) return null;

    return (
        <div className="coin">
            <div className="coin__body__right">
                <img src={data[0].image} alt={data[0].name} />
            </div>
            <div className="coin__header">
                <h1>{data[0].name}</h1>
                <p className="uppercase">{data[0].symbol}</p>
            </div>
            <div className="coin__body">
                <div className="coin__body__left">
                    <h1>EUR {data[0].current_price.toLocaleString()}€</h1>
                    <p className="uppercase">Market Cap: {data[0].market_cap.toLocaleString()}€</p>
                    {data[0].price_change_percentage_24h >= 0 ? (
                        <>
                            <div className="container__percentage">
                                <p className="green">+{data[0].price_change_percentage_24h.toFixed(2)}%</p>
                                <FiArrowUp />
                            </div>

                        </>
                    ) : (
                        <>
                            <div className="container__percentage">
                                <p className="red">{data[0].price_change_percentage_24h.toFixed(2)}%</p>
                                <FiArrowDown />
                            </div>

                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Coin;
