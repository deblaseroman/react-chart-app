

import React, { useState, useEffect } from 'react';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import ScatterChart from './components/ScatterChart';
import BarChart from './components/BarChart';
import App from './components/App';

const App = () => {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(financial_data.json);
            const data = await response.json();
            setChartData(data);
        };
        fetchData();
    }, []);
    if(!chartData) {
        return <div>Loading...</div>;
    }
    return(
        <div>
            <h1>Financial Data Dashboard</h1>
            <BarChart data={chartData} />
            <LineChart data={chartData} />
            <ScatterChart data={chartData} />
            <BubbleChart data={chartData} />
        </div>
    );
};
export default App;