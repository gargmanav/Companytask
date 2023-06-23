import React from 'react'
import { useSelector } from 'react-redux'
import "./daysdata.css"

const Precipitation = () => {
  const alldata = useSelector(Storedata=>Storedata.Wholedata)
  function getDayName(date) {
    const inputDate = new Date(date);
    const dayOfWeek = inputDate.getDay();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayName = daysOfWeek[dayOfWeek];
    return dayName;
  }

  const firstEightDays = alldata.days && alldata.days.slice(0, 8);

  return (
    <div>
       <div>
      <div className='daysbox'>
        {firstEightDays && firstEightDays.map((ele) => {
          return (

            <div key={ele.datetime} className='daydiv'>
              <p id='pdays'>{getDayName(ele.datetime)}</p>
              <p>{ele.icon}</p>
             <div id='dap'>
                <p>{ele.precipprob}</p>
             </div>
            </div>
          );
        })}
      </div>
    </div>
    </div>
  )
}

export default Precipitation