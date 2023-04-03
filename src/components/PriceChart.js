import React, { useEffect, useRef } from 'react';
import { Chart, LineController, LinearScale, CategoryScale, PointElement, LineElement } from 'chart.js';
import './PriceChart.css';

// Register the necessary elements
Chart.register(LineController, LinearScale, CategoryScale, PointElement, LineElement);

const PriceChart = (props) => {
    const chartRef = useRef(null);

    const { data, change24h } = props;

    const chartColor = change24h >= 0 ? 'green' : 'red';

    useEffect(() => {
        if (chartRef && chartRef.current) {
            const chartInstance = new Chart(chartRef.current, {
                type: 'line',
                data: {
                    labels: Array(data.length).fill(''),
                    datasets: [
                        {
                            data,
                            borderColor: chartColor,
                            borderWidth: 2.5,
                            borderRadius: 100,
                            fill: false,
                            tension: 0.1,
                        },
                    ],
                },
                options: {
                    scales: {
                        x: {
                            display: false,
                        },
                        y: {
                            display: false,
                        },
                    },
                    plugins: {
                        legend: {
                            display: false,
                        },
                        tooltip: {
                            enabled: false,
                        },
                    },
                    elements: {
                        point: {
                            radius: 0,
                        },
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                },
            });

            return () => {
                chartInstance.destroy();
            };
        }
    }, [data]);

    return (
        <div className="chart__container" style={{ position: 'relative', width: '100px', height: '100px' }}>
            <canvas ref={chartRef}></canvas>
        </div>
    );
};

export default PriceChart;
