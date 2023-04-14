import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import BookingPage from "../../pages/BookingPage";

const Main = (props) => {
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
  return (
    <main>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route
          path="/reservations"
          element={
            <BookingPage
              times={availableTimes}
              changeTimes={setAvailableTimes}
            />
          }
        />
      </Routes>
    </main>
  );
};

export default Main;
