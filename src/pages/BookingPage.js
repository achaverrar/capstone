import React from "react";
import BookingForm from "../BookingForm";

const BookingPage = ({ times, changeTimes }) => {
  console.log(times, changeTimes);
  return (
    <main>
      <h1>Booking Page</h1>
      <BookingForm></BookingForm>
    </main>
  );
};

export default BookingPage;
