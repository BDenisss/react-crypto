import React, { useEffect, useRef } from 'react';
import { Chart, LineController, LinearScale, PointElement, LineElement } from 'chart.js';

// Enregistrer les éléments nécessaires
Chart.register(LineController, LinearScale, PointElement, LineElement);

const PriceChart = ({ data }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef && chartRef.current) {
            const chartInstance = new Chart(chartRef.current, {
                type: 'line',
                data: {
                    labels: Array(data.length).fill(''),
                    datasets: [
                        {
                            data,
                            borderColor: '#2196f3',
                            borderWidth: 1,
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
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <canvas ref={chartRef}></canvas>
        </div>
    );
};

export default PriceChart;
