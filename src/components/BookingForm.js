import React from "react";
import { useState } from "react";

function BookingForm({ setDate, availableTimes, submitForm }) {
  const [selectedTime, setSelectedTime] = useState("");

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <>
      <form onSubmit={submitForm}>
        <label htmlFor="res-date">Choose date</label>
        <input
          onChange={handleDateChange}
          type="date"
          required
        />

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          required
        >
          <option value="" disabled selected hidden>
            Choose time
          </option>
          {availableTimes.map((time) => (
            <option key={time}>{time}</option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="Guests Number"
          min="1"
          max="10"
          id="guests"
          required
        />

        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" required>
          <option value="" disabled selected hidden>
            Occasion type
          </option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your Reservation" id="submit" />
      </form>
    </>
  );
}

export default BookingForm;
