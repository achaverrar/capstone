import React, { useState } from "react";
import "./BookingForm.css";

const BookingForm = () => {
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
  const [userInputs, setUserInputs] = useState({
    date: "",
    time: "",
    guests: 1,
    occassion: "",
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
      <div className="form__group">
        <label htmlFor="date" className="font-lead-text">
          Choose date
        </label>
        <input
          type="date"
          id="date"
          onChange={handleChange}
          value={userInputs["date"]}
          className="font-paragraph-text"
        ></input>
      </div>
      <div className="form__group">
        <label htmlFor="time" className="font-lead-text">
          Choose time
        </label>
        <select
          id="time"
          onChange={handleChange}
          value={userInputs["time"]}
          className="font-paragraph-text"
        >
          {availableTimes.map((time) => (
            <option key={time}>{time}</option>
          ))}
        </select>
      </div>
      <div className="form__group">
        <label htmlFor="guests" className="font-lead-text">
          Number of guests
        </label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          onChange={handleChange}
          value={userInputs["guests"]}
          className="font-paragraph-text"
        ></input>
      </div>
      <div className="form__group">
        <label htmlFor="occasion" className="font-lead-text">
          Occasion
        </label>
        <select
          id="occasion"
          onChange={handleChange}
          value={userInputs["occasion"]}
          className="font-paragraph-text"
        >
          <option>Select an occassion</option>
          <option>Anniversary</option>
          <option>Birthday</option>
          <option>Business Meal</option>
          <option>Date</option>
          <option>Special Occassion</option>
        </select>
      </div>
      <input
        type="submit"
        value="Make Your reservation"
        className="font-card-title form__button"
      ></input>
    </form>
  );
};

export default BookingForm;
