import React, { useState } from "react";
import BookingForm from "../BookingForm";
import Container from "../Container";
import "./BookingPage.css";

const BookingPage = () => {
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
  return (
    <section className="reservations">
      <Container className="container--reservations">
        <h2 className="font-display-title">Reservations</h2>
        <BookingForm availableTimes={availableTimes}></BookingForm>
      </Container>
    </section>
  );
};

export default BookingPage;
