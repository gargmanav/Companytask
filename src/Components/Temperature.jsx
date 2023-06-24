import React, { useState } from 'react'
import Daysdata from './Daysdata'

const Temperature = () => {
const [time, settime] = useState(false)
setTimeout(() => {
  settime(true)
}, 1000);
  return (
    <div>
        {time?<Daysdata/>:void 0}
    </div>
  )
}

export default Temperature