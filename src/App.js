import { Route, Routes } from 'react-router-dom';
import './App.css';
import Temperature from './Components/Temperature';
import Precipitation from './Components/Precipitation';
import Wind from './Components/Wind';
import Header from './Components/Header';
import Chart from './Components/Chart';


function App() {
  return (
    <div className="App">
      <div className='mainbox'>
      <Header/>
      <Chart/>
      <Routes>
        <Route path='/' element={<Temperature/>}/>
        <Route path='/precipitation' element={<Precipitation/>}/>
        <Route path='/wind' element={<Wind/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
