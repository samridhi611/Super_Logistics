import React, { useState } from 'react'

const DatePicker = () => {

  const [date,setDate] = useState();  

  console.log(date)

  console.log("Date" , date)
  return (
    <div className='datepick'>
        <input type="date" onChange={e => setDate(e.target.value)} className='form-control'/>
    </div>
  )
}

export default DatePicker;