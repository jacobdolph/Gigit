import React, { useState } from "react";
import DatePicker from "react-date-picker";

function Calendar(props) {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <DatePicker
        onChange={(e) => {
          console.log(e);
          setDate(e);
          props.setDate(e);
        }}
        name="date"
        value={date}
      />
    </div>
  );
}

export default Calendar;
