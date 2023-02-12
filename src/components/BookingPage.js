import React from "react";
import BookingForm from "./BookingForm";

function BookingPage({ setDate, availableTimes, submitForm }) {
  return (
    <>
      <div className="body-flex-container">
        <div className="box">
          <h1>Book Your Table</h1>
          <h3>Choose the date and time for your reservation</h3>
          <BookingForm
            availableTimes={availableTimes}
            setDate={setDate}
            submitForm={submitForm}
          ></BookingForm>
        </div>
      </div>
    </>
  );
}

export default BookingPage;
