import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js';

const ChartComponent = ({ type, data, options }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      new Chart(chartRef.current, {
        type: type,
        data: data,
        options: options,
      });
    }

    // Cleanup chart instance on component unmount
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [data, options, type]);

  return <canvas ref={chartRef}></canvas>;
};

export default ChartComponent;