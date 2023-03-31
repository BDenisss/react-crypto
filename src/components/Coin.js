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
                    `https://api.coingecko.com/api/v3/coins/${response.data[8].id}/market_chart?vs_currency=eur&days=0.5&interval=hourly`
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
                    <PriceChart data={priceData} change24h={data[0].price_change_percentage_24h} />
                </div>
                <div className="market__capitalization">
                    <p>{data[0].market_cap.toLocaleString()} €</p>
                </div>
            </div>
            <div className="coin__card">
                <div className="coin__body__right">
                    <img src={data[1].image} alt={data[1].name} />
                </div>
                <div className="coin__header">
                    <h1>{data[1].name}</h1>
                    <p className="uppercase">{data[1].symbol}</p>
                </div>
                <div className="coin__last-price">
                    <h1>EUR {data[1].current_price.toLocaleString()}€</h1>
                </div>
                <div className="coin__body">

                    <div className="coin__body__left">
                        {data[1].price_change_percentage_24h >= 0 ? (
                            <>
                                <div className="container__percentage">
                                <span className="green">
                                    <FiArrowUp />
                                    {data[1].price_change_percentage_24h.toFixed(2)}%
                                </span>
                                </div>

                            </>
                        ) : (
                            <>
                                <div className="container__percentage">
                                <span className="red">
                                    <FiArrowDown />
                                    {data[1].price_change_percentage_24h.toFixed(2)}%
                                </span>
                                </div>

                            </>
                        )}
                    </div>
                </div>
                <div className="chart">
                    <PriceChart data={priceData} change24h={data[1].price_change_percentage_24h} />
                </div>
                <div className="market__capitalization">
                    <p>{data[1].market_cap.toLocaleString()} €</p>
                </div>
            </div>
            <div className="coin__card">
                <div className="coin__body__right">
                    <img src={data[2].image} alt={data[2].name} />
                </div>
                <div className="coin__header">
                    <h1>{data[2].name}</h1>
                    <p className="uppercase">{data[2].symbol}</p>
                </div>
                <div className="coin__last-price">
                    <h1>EUR {data[2].current_price.toLocaleString()}€</h1>
                </div>
                <div className="coin__body">

                    <div className="coin__body__left">
                        {data[2].price_change_percentage_24h >= 0 ? (
                            <>
                                <div className="container__percentage">
                                <span className="green">
                                    <FiArrowUp />
                                    {data[2].price_change_percentage_24h.toFixed(2)}%
                                </span>
                                </div>

                            </>
                        ) : (
                            <>
                                <div className="container__percentage">
                                <span className="red">
                                    <FiArrowDown />
                                    {data[2].price_change_percentage_24h.toFixed(2)}%
                                </span>
                                </div>

                            </>
                        )}
                    </div>
                </div>
                <div className="chart">
                    <PriceChart data={priceData} change24h={data[2].price_change_percentage_24h} />
                </div>
                <div className="market__capitalization">
                    <p>{data[2].market_cap.toLocaleString()} €</p>
                </div>
            </div>
            <div className="coin__card">
                <div className="coin__body__right">
                    <img src={data[3].image} alt={data[3].name} />
                </div>
                <div className="coin__header">
                    <h1>{data[3].name}</h1>
                    <p className="uppercase">{data[3].symbol}</p>
                </div>
                <div className="coin__last-price">
                    <h1>EUR {data[3].current_price.toLocaleString()}€</h1>
                </div>
                <div className="coin__body">

                    <div className="coin__body__left">
                        {data[3].price_change_percentage_24h >= 0 ? (
                            <>
                                <div className="container__percentage">
                                <span className="green">
                                    <FiArrowUp />
                                    {data[3].price_change_percentage_24h.toFixed(2)}%
                                </span>
                                </div>

                            </>
                        ) : (
                            <>
                                <div className="container__percentage">
                                <span className="red">
                                    <FiArrowDown />
                                    {data[3].price_change_percentage_24h.toFixed(2)}%
                                </span>
                                </div>

                            </>
                        )}
                    </div>
                </div>
                <div className="chart">
                    <PriceChart data={priceData} change24h={data[3].price_change_percentage_24h} />
                </div>
                <div className="market__capitalization">
                    <p>{data[3].market_cap.toLocaleString()} €</p>
                </div>
            </div>
            <div className="coin__card">
                <div className="coin__body__right">
                    <img src={data[4].image} alt={data[4].name} />
                </div>
                <div className="coin__header">
                    <h1>{data[4].name}</h1>
                    <p className="uppercase">{data[0].symbol}</p>
                </div>
                <div className="coin__last-price">
                    <h1>EUR {data[4].current_price.toLocaleString()}€</h1>
                </div>
                <div className="coin__body">

                    <div className="coin__body__left">
                        {data[4].price_change_percentage_24h >= 0 ? (
                            <>
                                <div className="container__percentage">
                                <span className="green">
                                    <FiArrowUp />
                                    {data[4].price_change_percentage_24h.toFixed(2)}%
                                </span>
                                </div>

                            </>
                        ) : (
                            <>
                                <div className="container__percentage">
                                <span className="red">
                                    <FiArrowDown />
                                    {data[4].price_change_percentage_24h.toFixed(2)}%
                                </span>
                                </div>

                            </>
                        )}
                    </div>
                </div>
                <div className="chart">
                    <PriceChart data={priceData} change24h={data[4].price_change_percentage_24h} />
                </div>
                <div className="market__capitalization">
                    <p>{data[4].market_cap.toLocaleString()} €</p>
                </div>
            </div>
            <div className="coin__card">
                <div className="coin__body__right">
                    <img src={data[5].image} alt={data[5].name} />
                </div>
                <div className="coin__header">
                    <h1>{data[5].name}</h1>
                    <p className="uppercase">{data[5].symbol}</p>
                </div>
                <div className="coin__last-price">
                    <h1>EUR {data[5].current_price.toLocaleString()}€</h1>
                </div>
                <div className="coin__body">

                    <div className="coin__body__left">
                        {data[5].price_change_percentage_24h >= 0 ? (
                            <>
                                <div className="container__percentage">
                                <span className="green">
                                    <FiArrowUp />
                                    {data[5].price_change_percentage_24h.toFixed(2)}%
                                </span>
                                </div>

                            </>
                        ) : (
                            <>
                                <div className="container__percentage">
                                <span className="red">
                                    <FiArrowDown />
                                    {data[5].price_change_percentage_24h.toFixed(2)}%
                                </span>
                                </div>

                            </>
                        )}
                    </div>
                </div>
                <div className="chart">
                    <PriceChart data={priceData} change24h={data[5].price_change_percentage_24h} />
                </div>
                <div className="market__capitalization">
                    <p>{data[5].market_cap.toLocaleString()} €</p>
                </div>
            </div>
            <div className="coin__card">
                <div className="coin__body__right">
                    <img src={data[6].image} alt={data[6].name} />
                </div>
                <div className="coin__header">
                    <h1>{data[7].name}</h1>
                    <p className="uppercase">{data[7].symbol}</p>
                </div>
                <div className="coin__last-price">
                    <h1>EUR {data[7].current_price.toLocaleString()}€</h1>
                </div>
                <div className="coin__body">

                    <div className="coin__body__left">
                        {data[7].price_change_percentage_24h >= 0 ? (
                            <>
                                <div className="container__percentage">
                                <span className="green">
                                    <FiArrowUp />
                                    {data[7].price_change_percentage_24h.toFixed(2)}%
                                </span>
                                </div>

                            </>
                        ) : (
                            <>
                                <div className="container__percentage">
                                <span className="red">
                                    <FiArrowDown />
                                    {data[7].price_change_percentage_24h.toFixed(2)}%
                                </span>
                                </div>

                            </>
                        )}
                    </div>
                </div>
                <div className="chart">
                    <PriceChart data={priceData} change24h={data[7].price_change_percentage_24h} />
                </div>
                <div className="market__capitalization">
                    <p>{data[7].market_cap.toLocaleString()} €</p>
                </div>
            </div>
            <div className="coin__card">
                <div className="coin__body__right">
                    <img src={data[8].image} alt={data[8].name} />
                </div>
                <div className="coin__header">
                    <h1>{data[8].name}</h1>
                    <p className="uppercase">{data[8].symbol}</p>
                </div>
                <div className="coin__last-price">
                    <h1>EUR {data[8].current_price.toLocaleString()}€</h1>
                </div>
                <div className="coin__body">

                    <div className="coin__body__left">
                        {data[8].price_change_percentage_24h >= 0 ? (
                            <>
                                <div className="container__percentage">
                                <span className="green">
                                    <FiArrowUp />
                                    {data[8].price_change_percentage_24h.toFixed(2)}%
                                </span>
                                </div>

                            </>
                        ) : (
                            <>
                                <div className="container__percentage">
                                <span className="red">
                                    <FiArrowDown />
                                    {data[8].price_change_percentage_24h.toFixed(2)}%
                                </span>
                                </div>

                            </>
                        )}
                    </div>
                </div>
                <div className="chart">
                    <PriceChart data={priceData} change24h={data[8].price_change_percentage_24h} />
                </div>
                <div className="market__capitalization">
                    <p>{data[8].market_cap.toLocaleString()} €</p>
                </div>
            </div>
            <div className="coin__card">
                <div className="coin__body__right">
                    <img src={data[9].image} alt={data[9].name} />
                </div>
                <div className="coin__header">
                    <h1>{data[9].name}</h1>
                    <p className="uppercase">{data[9].symbol}</p>
                </div>
                <div className="coin__last-price">
                    <h1>EUR {data[9].current_price.toLocaleString()}€</h1>
                </div>
                <div className="coin__body">

                    <div className="coin__body__left">
                        {data[9].price_change_percentage_24h >= 0 ? (
                            <>
                                <div className="container__percentage">
                                <span className="green">
                                    <FiArrowUp />
                                    {data[9].price_change_percentage_24h.toFixed(2)}%
                                </span>
                                </div>

                            </>
                        ) : (
                            <>
                                <div className="container__percentage">
                                <span className="red">
                                    <FiArrowDown />
                                    {data[9].price_change_percentage_24h.toFixed(2)}%
                                </span>
                                </div>

                            </>
                        )}
                    </div>
                </div>
                <div className="chart">
                    <PriceChart data={priceData} change24h={data[9].price_change_percentage_24h} />
                </div>
                <div className="market__capitalization">
                    <p>{data[9].market_cap.toLocaleString()} €</p>
                </div>
            </div>
            {error && <div className="error">{error}</div>}

        </div>
    );
};

export default Coin;
