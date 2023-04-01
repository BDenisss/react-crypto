import React from 'react';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi';
import PriceChart from './PriceChart';

const CryptoCard = ({ coinData }) => {
    if (!coinData || !coinData.priceData) return null;

    return (
        <div className="coin__card">
            <div className="coin__body__right">
                <img src={coinData.image} alt={coinData.name} />
            </div>
            <div className="coin__header">
                <h1>{coinData.name}</h1>
                <p className="uppercase">{coinData.symbol}</p>
            </div>
            <div className="coin__last-price">
                <h1>{coinData.current_price.toLocaleString()}€</h1>
            </div>
            <div className="coin__body">
                <div className="coin__body__left">
                    {coinData.price_change_percentage_24h >= 0 ? (
                        <>
                            <div className="container__percentage">
                <span className="green">
                  <FiArrowUp />
                    {coinData.price_change_percentage_24h.toFixed(2)}%
                </span>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="container__percentage">
                <span className="red">
                  <FiArrowDown />
                    {coinData.price_change_percentage_24h.toFixed(2)}%
                </span>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <div className="chart">
                <PriceChart
                    data={coinData.priceData}
                    change24h={coinData.price_change_percentage_24h}
                />
            </div>
            <div className="market__capitalization">
                <p>{coinData.market_cap.toLocaleString()} €</p>
            </div>
        </div>
    );
};

export default CryptoCard;
