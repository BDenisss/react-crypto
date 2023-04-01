import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Coin.css';
import CryptoCard from './CryptoCard';

const Coin = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const url =
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en';

    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                const coinData = response.data;
                const promises = coinData.map((coin) =>
                    axios.get(
                        `https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart?vs_currency=eur&days=0.5&interval=hourly`
                    )
                );

                return Promise.all(promises).then((responses) => {
                    responses.forEach((res, index) => {
                        coinData[index].priceData = res.data.prices.map((price) => price[1]);
                    });

                    setData(coinData);
                });
            })
            .catch((error) => {
                console.log(error);
                setError("Une erreur s'est produite lors de la récupération des données de l'API");
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
            <CryptoCard coinData={data[0]} />
            <CryptoCard coinData={data[1]} />
            <CryptoCard coinData={data[2]} />
            <CryptoCard coinData={data[3]} />
            <CryptoCard coinData={data[4]} />
            <CryptoCard coinData={data[5]} />
            <CryptoCard coinData={data[6]} />
            <CryptoCard coinData={data[7]} />
            <CryptoCard coinData={data[8]} />
            <CryptoCard coinData={data[9]} />
            {error && <div className="error">{error}</div>}
        </div>
    );
};

export default Coin;
