import React from 'react';
import './chart.css';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const Chart = () => {

  const labels = ['7 pm', '10 am', '1 am', '4 am', '7 am', '10 am', '1 pm', '4 pm'];
  const data = {
    labels,
    datasets: [
      {
        data: [42, 38, 34, 32, 31, 35, 40, 43],
        borderColor: 'yellow',
        fill: true,
      },
    ],
  };

  const options = {
    plugins: {
      legend: true,
    },
    scales: {
      y: {
        display: false, // Hide y-axis labels
      },
      x: {
        maxRotation: 0, // Set maximum label rotation to 0 degrees
        minRotation: 0, // Set minimum label rotation to 0 degrees
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
      <div className="mainchartdiv" >
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default Chart;


// import React from 'react';
// import './chart.css';
// import { Line } from 'react-chartjs-2';
// import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';
// import { useSelector } from 'react-redux';

// ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

// const Chart = () => {
//   const alldata = useSelector((storeData) => storeData.Wholedata);

//   const labels = ['7 pm', '10 am', '1 am', '4 am', '7 am', '10 am', '1 pm', '4 pm'];

//   // Extract temperatures based on the specified time labels
//   const temperatureData = labels.map((label) => {
//     const time = label.toLowerCase().replace(' ', ''); // Convert label to lowercase and remove spaces
//     const hourData = alldata.days.find((day) => day.datetime.includes(time));
//     return hourData ? hourData.temp : null;
//   });

//   const data = {
//     labels,
//     datasets: [
//       {
//         data: temperatureData,
//         borderColor: 'yellow',
//         fill: true,
//       },
//     ],
//   };

//   const options = {
//     plugins: {
//       legend: true,
//     },
//     scales: {
//       y: {
//         // min:3,
//         // max:6
//       },
//     },
//   };

//   return (
//     <div>
//       <div className="mainchartdiv">
//         <Line data={data} options={options}></Line>
//       </div>
//     </div>
//   );
// };

// export default Chart;
