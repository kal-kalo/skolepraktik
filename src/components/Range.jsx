"use client";
import { useState } from "react";

function Range(props) {
  const [value, setValue] = useState(props.valueInit);
  const handleChange = function(e){
    setValue(parseInt(e.target.value))
  }
  return (
    <form>
      <label htmlFor={props.id}>
        {props.id}: {value.toLocaleString()}{" "}
      </label>
      <input
        type="range"
        id={props.id}
        name={props.id}
        min={props.min}
        max={props.max}
        value={value}
        onChange={handleChange}
      />
    </form>
  );
}

export default Range;
