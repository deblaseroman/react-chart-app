
import React, { useEffect, useRef } from 'react';
import { Chart } from 'ChartComponent.jsx';

const ChartComponent = ({type, data, options }) => {
    const chartRef = useRef(null);

    useEffect(() => => {
        if (chartRef.current) {
            new Chart(chartRef.current, {
                type: type,
                data: data,
                options: options,
            });
        }
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, [data, options, type]);
    return <canvas ref={chartRef}></canvas>
};

export default ChartComponent;
