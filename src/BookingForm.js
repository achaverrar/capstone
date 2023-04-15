import React, { useState } from "react";
import { formData } from "./constants/data";
import "./BookingForm.css";
import FormInput from "./FormInput";

const BookingForm = ({ availableTimes }) => {
  const [userInputs, setUserInputs] = useState({
    date: "",
    time: "",
    guests: 1,
    occassion: "none",
    submit: "",
  });

  const handleChange = (e) => {
    setUserInputs({ ...userInputs, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      {formData.map((data) => {
        return (
          <FormInput
            key={data.key}
            data={{ ...data, handleChange }}
            value={userInputs[data.id]}
          />
        );
      })}
      <input
        type="submit"
        value="Make Your reservation"
        className="font-card-title form__button"
      ></input>
    </form>
  );
};

export default BookingForm;
