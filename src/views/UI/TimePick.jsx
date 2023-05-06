import React,{useState} from 'react'
import TimePicker from 'react-time-picker';
import './timepicker.css';

const TimePick = () => {
    const [time, setTime] = useState('10:00');

    function handleTimeChange(value) {
      setTime(value);
      console.log(time);
    }
  
    return (
      <div>
        <TimePicker
          className="timepick time-picker"
          onChange={handleTimeChange}
          value={time}
          disableClock={true} // To disable the clock view
        />
      </div>
    );
}

export default TimePick;