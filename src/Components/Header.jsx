import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { apidata } from '../Redux/Actiontype';
import './header.css';

const Header = () => {
  const dispatch = useDispatch();
  const alldata = useSelector((storeData) => storeData.Wholedata);
  const [word, setWord] = useState('jaipur');
  const location = useLocation(); // Get the current route location

  const handleInputChange = (e) => {
    setWord(e.target.value);
  };

  useEffect(() => {
    if (alldata && !alldata) {
      getData();
    }
  }, [alldata]);

  const getData = async () => {
    try {
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${word}?unitGroup=metric&key=EJ6UBL2JEQGYB3AA4ENASN62J&contentType=json`
      );
      const newData = await response.json();
      dispatch(apidata(newData));
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };
console.log(alldata);

  if (alldata && !alldata) {
    return <div>Loading...</div>; // Show a loading state while data is being fetched
  }

  return (
    <div className="headmain">
      <div className="leftdiv">
        <div className="leftup">
          <img
            style={{ width: '6rem', height: '6rem' }}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAm9JREFUaN7tmcFthDAQRbcESqAEl0ADkSiBY46UQAmUQAl0EErwdW+kA3fgjKNhNXJsGNvYyyqL9A/ZQPKf/Wc8JDet9e2V9dLm3wCXBAi57ve7AA2WxC3jdQoAGpcg7ZHMBZIMAMa6HeO2uksBgKEmwPwmcSUAGQGwXAIAc68jNYFW6zPz9QiqSgEMCQB7UqDWa/j7U5wFMGYC2NQ6zPeg7lUAFI2TWXmQBtXJAOYHY451ZvVovgJJ0JpcA5h9VcC83HYAjE+4+lM0AK66LGB8i49A8y2a13b+QwFKmX+c2CbvIEUA6iiAjC3TpZkUriTm16hzAKOjCplfSe4HYt6Zfy5AV3D1t9w3lnln/rkApeIzkJapHAD1lQEWkvvZYX6NnoUKACiS+95h/hcAa8KtJwM01qgQqkMAkdH8aI0KoeYl9xxYcowKJPdT5OoLLkCTIfe1Y1QIUX/aXyVyXTtwyynvxB9f9wrUhBqDZwSoZgC4oqXomRANAAYGkEZVTOMGWOEzIwNAHZ3IUQBm9Yh5zd0FuG8izywH5l1tdT7lpd78cmJk5eyAgbSg+wOA0RGdKhkAfnFrGWmZqy/JM5IRH/tcaKNGCUeGV18MzKqCZlDn+JwdOXyRoebH6Flop3A17STWzsyewjWaGKvfW3NQlQzgKNxhZ2dmT+EqTr1YE+n+bgUAzL7C9e0M9nt24ZK56DGoHd4fCdAyd0aEFK51+vLuDwDoEKIPaan4/dHAMAG201ecCuBpjVEtlXH69uz7E0aJ3ZYaaV7QQS03QONrqQkAg+/lPdcO/Cnc0ldqDTTcSfRpAO//1L8B/hnAD9B4AcpTDEFdAAAAAElFTkSuQmCC"
            alt="Weather Icon"
          />
          <h1 style={{ fontSize: '70px' }}>45</h1>
          <p>°C|°F</p>
          <div className="leftupright">
            <p>Precipitation:</p>
            <p>Humidity:</p>
            <p>Wind:</p>
          </div>
        </div>
        <div className="leftdown">
          <ul>
            <li>
              <Link
                to="/"
                style={{
                  textDecoration: 'none',
                  color: '#808388',
                  borderBottom: location.pathname === '/' ? '2px solid #DCCA71' : 'none',
                }}
              >
                Temperature
              </Link>
            </li>
            <li>
              <Link
                to="/precipitation"
                style={{
                  textDecoration: 'none',
                  color: '#808388',
                  borderBottom: location.pathname === '/precipitation' ? '2px solid #DCCA71' : 'none',
                }}
              >
                Precipitation
              </Link>
            </li>
            <li>
              <Link
                to="/wind"
                style={{
                  textDecoration: 'none',
                  color: '#808388',
                  borderBottom: location.pathname === '/wind' ? '2px solid #DCCA71' : 'none',
                }}
              >
                Wind
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="rightdiv">
        <input type="text" id="inputsearch" value={word} onChange={handleInputChange} />
        <button onClick={getData} id="headbutton">
          <i className="fa-solid fa-magnifying-glass" style={{ color: '#ffffff' }}></i>
        </button>
      </div>
    </div>
  );
};

export default Header;

