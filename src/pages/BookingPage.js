import React from "react";
import BookingForm from "../BookingForm";
import Container from "../Container";
import "./BookingPage.css";

const BookingPage = () => {
  return (
    <section className="reservations">
      <Container className="container--reservations">
        <h2 className="font-display-title">Reservations</h2>
        <BookingForm></BookingForm>
      </Container>
    </section>
  );
};

export default BookingPage;
