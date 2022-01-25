import React from "react";
import "./style.css";

function Time(props) {
  return (
    <div>
      {/* {(props.start) ? <TimePicker onChange={e => { props.setStartTime(e) }} disableClock={true} /> : <TimePicker onChange={e => { props.setEndTime(e) }} disableClock={true} />} */}
      {props.start ? (
        <select
          id="time"
          name="times"
          onChange={(e) => {
            props.setStartTime(e.target.value);
          }}
        >
          <option value="1:00am">1:00am</option>
          <option value="2:00am">2:00am</option>
          <option value="3:00am">3:00am</option>
          <option value="4:00am">4:00am</option>
          <option value="5:00am">5:00am</option>
          <option value="6:00am">6:00am</option>
          <option value="7:00am">7:00am</option>
          <option value="8:00am">8:00am</option>
          <option value="9:00am">9:00am</option>
          <option value="10:00am">10:00am</option>
          <option value="11:00am">11:00am</option>
          <option value="12:00pm">12:00pm</option>
          <option value="1:00pm">1:00pm</option>
          <option value="2:00pm">2:00pm</option>
          <option value="3:00pm">3:00pm</option>
          <option value="4:00pm">4:00pm</option>
          <option value="5:00pm">5:00pm</option>
          <option value="6:00pm">6:00pm</option>
          <option value="7:00pm">7:00pm</option>
          <option value="8:00pm">8:00pm</option>
          <option value="9:00pm">9:00pm</option>
          <option value="10:00pm">10:00pm</option>
          <option value="11:00pm">11:00pm</option>
          <option value="12:00am">12:00am</option>
        </select>
      ) : (
        <select
          id="time"
          name="times"
          onChange={(e) => {
            props.setEndTime(e.target.value);
          }}
        >
          <option value="1:00am">1:00am</option>
          <option value="2:00am">2:00am</option>
          <option value="3:00am">3:00am</option>
          <option value="4:00am">4:00am</option>
          <option value="5:00am">5:00am</option>
          <option value="6:00am">6:00am</option>
          <option value="7:00am">7:00am</option>
          <option value="8:00am">8:00am</option>
          <option value="9:00am">9:00am</option>
          <option value="10:00am">10:00am</option>
          <option value="11:00am">11:00am</option>
          <option value="12:00pm">12:00pm</option>
          <option value="1:00pm">1:00pm</option>
          <option value="2:00pm">2:00pm</option>
          <option value="3:00pm">3:00pm</option>
          <option value="4:00pm">4:00pm</option>
          <option value="5:00pm">5:00pm</option>
          <option value="6:00pm">6:00pm</option>
          <option value="7:00pm">7:00pm</option>
          <option value="8:00pm">8:00pm</option>
          <option value="9:00pm">9:00pm</option>
          <option value="10:00pm">10:00pm</option>
          <option value="11:00pm">11:00pm</option>
          <option value="12:00am">12:00am</option>
        </select>
      )}
    </div>
  );
}

export default Time;
