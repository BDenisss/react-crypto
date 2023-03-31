import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Coin.css';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi';
import PriceChart from './PriceChart';

const Coin = () => {
    const [data, setData] = useState(null);
    const [priceData, setPriceData] = useState([]);
    const [error, setError] = useState(null);

    const url =
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en';



    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                setData(response.data);
                return axios.get(
                    `https://api.coingecko.com/api/v3/coins/${response.data[0].id}/market_chart?vs_currency=eur&days=1&interval=hourly`
                );
            })
            .then((response) => {
                setPriceData(response.data.prices.map((price) => price[1]));
            })
            .catch((error) => {
                console.log(error);
                setError('Une erreur s\'est produite lors de la récupération des données de l\'API');
            });
    }, []);

    if (!data) return null;

    return (
        <div className="coin">
            <div className="market">
                <p>Market</p>
                <p>Coin</p>
                <p>Last Price</p>
                <p>24 hour change</p>
                <p>Chart</p>
                <p>Market Capitalization</p>
            </div>
            <div className="coin__card">
                <div className="coin__body__right">
                    <img src={data[0].image} alt={data[0].name} />
                </div>
                <div className="coin__header">
                    <h1>{data[0].name}</h1>
                    <p className="uppercase">{data[0].symbol}</p>
                </div>
                <div className="coin__last-price">
                    <h1>EUR {data[0].current_price.toLocaleString()}€</h1>
                </div>
                <div className="coin__body">

                    <div className="coin__body__left">
                        {data[0].price_change_percentage_24h >= 0 ? (
                            <>
                                <div className="container__percentage">
                                <span className="green">
                                    <FiArrowUp />
                                    {data[0].price_change_percentage_24h.toFixed(2)}%
                                </span>
                                </div>

                            </>
                        ) : (
                            <>
                                <div className="container__percentage">
                                <span className="red">
                                    <FiArrowDown />
                                    {data[0].price_change_percentage_24h.toFixed(2)}%
                                </span>
                                </div>

                            </>
                        )}
                    </div>
                </div>
                <div className="chart">
                    <PriceChart data={priceData} />
                </div>
                <div className="market__capitalization">
                    <p>Market Capitalization</p>
                </div>
            </div>
            {error && <div className="error">{error}</div>}

        </div>
    );
};

export default Coin;
