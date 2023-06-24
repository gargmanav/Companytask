import React from 'react';
import { useSelector } from 'react-redux';
import './daysdata.css';

const Daysdata = () => {
  const alldata = useSelector((storeData) => storeData.Wholedata);

  function getDayName(date) {
    const inputDate = new Date(date);
    const dayOfWeek = inputDate.getDay();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayName = daysOfWeek[dayOfWeek];
    return dayName;
  }

  

  const firstEightDays = alldata && alldata.days.slice(0, 8); // Extract the first 8 elements of the array
  console.log(alldata.days);
  return (
    <div>
      <div className='daysbox'>
        {firstEightDays && firstEightDays.map((ele) => {
          return (

            <div key={ele.datetime} className='daydiv'>
              <p id='pdays'>{getDayName(ele.datetime)}</p>
              <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAm9JREFUaN7tmcFthDAQRbcESqAEl0ADkSiBY46UQAmUQAl0EErwdW+kA3fgjKNhNXJsGNvYyyqL9A/ZQPKf/Wc8JDet9e2V9dLm3wCXBAi57ve7AA2WxC3jdQoAGpcg7ZHMBZIMAMa6HeO2uksBgKEmwPwmcSUAGQGwXAIAc68jNYFW6zPz9QiqSgEMCQB7UqDWa/j7U5wFMGYC2NQ6zPeg7lUAFI2TWXmQBtXJAOYHY451ZvVovgJJ0JpcA5h9VcC83HYAjE+4+lM0AK66LGB8i49A8y2a13b+QwFKmX+c2CbvIEUA6iiAjC3TpZkUriTm16hzAKOjCplfSe4HYt6Zfy5AV3D1t9w3lnln/rkApeIzkJapHAD1lQEWkvvZYX6NnoUKACiS+95h/hcAa8KtJwM01qgQqkMAkdH8aI0KoeYl9xxYcowKJPdT5OoLLkCTIfe1Y1QIUX/aXyVyXTtwyynvxB9f9wrUhBqDZwSoZgC4oqXomRANAAYGkEZVTOMGWOEzIwNAHZ3IUQBm9Yh5zd0FuG8izywH5l1tdT7lpd78cmJk5eyAgbSg+wOA0RGdKhkAfnFrGWmZqy/JM5IRH/tcaKNGCUeGV18MzKqCZlDn+JwdOXyRoebH6Flop3A17STWzsyewjWaGKvfW3NQlQzgKNxhZ2dmT+EqTr1YE+n+bgUAzL7C9e0M9nt24ZK56DGoHd4fCdAyd0aEFK51+vLuDwDoEKIPaan4/dHAMAG201ecCuBpjVEtlXH69uz7E0aJ3ZYaaV7QQS03QONrqQkAg+/lPdcO/Cnc0ldqDTTcSfRpAO//1L8B/hnAD9B4AcpTDEFdAAAAAElFTkSuQmCC' alt='pic' />
             <div id='dap'>
                <p>{ele.tempmin+"°"}</p>
                <p>{ele.tempmax+"°"}</p>
             </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Daysdata;

