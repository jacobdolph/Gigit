import React, { useState } from "react";
import { Button } from "react-bootstrap";
import DatePicker from "react-date-picker";

function Calendar(props) {
  const [date, setDate] = useState(new Date());
  const { handleChange, setFormStep } = props;

  return (
    <div>
      <DatePicker
        onChange={(date) =>
          handleChange({ target: { value: date, name: "date" } })
        }
        name='date'
        value={date}
      />
      <Button
        variant='success'
        type='submit'
        onClick={() => setFormStep("first")}
        style={{
          width: "40%",
          height: "50px",
          margin: "2em 1em",
          backgroundColor: "#3e9d84",
        }}
      >
        Back
      </Button>
      <Button
        variant='success'
        type='submit'
        onClick={() => setFormStep("third")}
        style={{
          width: "40%",
          height: "50px",
          margin: "2em 1em",
          backgroundColor: "#3e9d84",
        }}
      >
        Continue
      </Button>
    </div>
  );
}

export default Calendar;
