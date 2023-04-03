import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Coin.css';
import CryptoCard from './CryptoCard';
import Pagination from './Pagination';

const Coin = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const url =
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en';

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
            <CryptoList coins={data} />
            {error && <div className="error">{error}</div>}
        </div>
    );
};

const CryptoList = ({ coins }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [coinsPerPage] = useState(10);

    const indexOfLastCoin = currentPage * coinsPerPage;
    const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
    const currentCoins = coins.slice(indexOfFirstCoin, indexOfLastCoin);

    const totalPages = Math.ceil(coins.length / coinsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="list__container__coins">
            {currentCoins.map((coin) => (
                <CryptoCard key={coin.id} coinData={coin} />
            ))}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                handlePageChange={handlePageChange}
            />
        </div>
    );
};

export default Coin;
