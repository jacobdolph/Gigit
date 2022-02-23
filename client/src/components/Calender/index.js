import React, { useState } from "react";
import DatePicker from "react-date-picker";

function Calendar(props) {
  const [date, setDate] = useState(new Date());
  const { handleChange } = props;

  return (
    <div>
      <DatePicker
        onChange={(date) =>
          handleChange({ target: { value: date, name: "date" } })
        }
        name='date'
        value={date}
      />
    </div>
  );
}

export default Calendar;
