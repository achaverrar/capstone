import React, { useState } from "react";

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
    <form
      style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
      onSubmit={handleSubmit}
    >
      <label forhtml="date">Choose date</label>
      <input
        type="date"
        id="date"
        onChange={handleChange}
        value={userInputs["date"]}
      ></input>
      <label forhtml="time">Choose time</label>
      <select id="time" onChange={handleChange} value={userInputs["time"]}>
        {availableTimes.map((time) => (
          <option key={time}>{time}</option>
        ))}
      </select>
      <label forhtml="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        onChange={handleChange}
        value={userInputs["guests"]}
      ></input>
      <label forhtml="occasion">Occasion</label>
      <select
        id="occasion"
        onChange={handleChange}
        value={userInputs["occasion"]}
      >
        <option>Select an occassion</option>
        <option>Anniversary</option>
        <option>Birthday</option>
        <option>Business Meal</option>
        <option>Date</option>
        <option>Special Occassion</option>
      </select>
      <input type="submit" value="Make Your reservation"></input>
    </form>
  );
};

export default BookingForm;
