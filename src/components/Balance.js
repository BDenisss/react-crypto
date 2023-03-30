import React from "react";
import "./Balance.css";

const Balance = () => {
    const percentage = 7.65; // cette valeur peut-être récupérée depuis une API

    const getPercentageColor = (value) => {
        return value >= 0 ? "#51AE6F" : "red";
    };

    return (
        <div className="balance">
            <h2>Money Value</h2>
            <div className="balance__amount">
                <h1>USD 13220.40</h1>
                <p style={{ color: getPercentageColor(percentage) }}>
                    {percentage >= 0 ? "+" : ""}
                    {percentage.toFixed(2)}%
                </p>
            </div>
        </div>
    );
};

export default Balance;
