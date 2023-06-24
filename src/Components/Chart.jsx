import React, { useEffect, useState } from 'react';
import './chart.css';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';
import { useSelector } from 'react-redux';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const Chart = () => {
  const [tempdata, settempdata] = useState([42, 38, 34, 32, 31, 35, 40, 43]);
  const alldata = useSelector(Storedata => Storedata.Wholedata);
  const labels = ['7 pm', '10 am', '1 am', '4 am', '7 am', '10 am', '1 pm', '4 pm'];
  const data = {
    labels,
    datasets: [
      {
        data: tempdata,
        borderColor: 'yellow',
        fill: true,
      },
    ],
  };

  const newdata = () => {
    const first = alldata && alldata.days[0].hours.slice(0, 8).map((ele) => {
      return ele.temp;
    });
    settempdata(first);
  };

  useEffect(() => {
    newdata();
  }, [alldata]);

  const options = {
    plugins: {
      legend: false,
    },
    scales: {
      y: {
        display: false, // Hide y-axis labels
      },
      x: {
        maxRotation: 0, // Set maximum label rotation to 0 degrees
        minRotation: 0, // Set minimum label rotation to 0 degrees
        ticks: {
          padding: 20, // Add spacing between x-axis labels
        },
      },
    },
    elements: {
      point: {
        radius: 0, // Set the point radius to 0 to remove the matrix effect
      },
    },
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 0,
        bottom: 0,
      },
    },
  };

  return (
    <div>
      <div className="mainchartdiv">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default Chart;