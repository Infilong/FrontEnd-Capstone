// form implemetation without using formik

// import React from "react";
// import { useState } from "react";
// import { Formik, Form, input, ErrorMessage } from 'formik';

// function BookingForm({ setDate, availableTimes, submitForm }) {
//   const [selectedTime, setSelectedTime] = useState("");
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleDateChange = (e) => {
//     setDate(e.target.value);
//     setSelectedDate(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     if (selectedDate) {
//       setErrorMessage("Please choose a date");
//     } else {
//       setErrorMessage("");
//       submitForm();
//     }
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="res-date">Choose date</label>
//         <input onChange={handleDateChange} type="date" id="res-date" />
//         {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}

//         <label htmlFor="res-time">Choose time</label>
//         <select
//           id="res-time"
//           value={selectedTime}
//           onChange={(e) => setSelectedTime(e.target.value)}

//         >
//           <option value="" disabled hidden>
//             Choose time
//           </option>
//           {availableTimes.map((time) => (
//             <option key={time}>{time}</option>
//           ))}
//         </select>

//         <label htmlFor="guests">Number of guests</label>
//         <input
//           type="number"
//           placeholder="Guests Number"
//           min="1"
//           max="10"
//           id="guests"
//         />

//         <label htmlFor="occasion">Occasion</label>
//         <select id="occasion" >
//           <option value="" disabled selected hidden>
//             Occasion type
//           </option>
//           <option>Birthday</option>
//           <option>Anniversary</option>
//         </select>
//         <input type="submit" value="Make Your Reservation" id="submit" />
//       </form>
//     </>
//   );
// }

// export default BookingForm;

import React from "react";
import { useState } from "react";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

function BookingForm({ setDate, availableTimes, submitForm }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Custom funtion which can be used inside the form using Formik
  const handleDateChange = (e) => {
    const date = new Date(e.target.value);
    setSelectedDate(date);
    setDate(date);
  };

  return (
    <Formik
      initialValues={{
        selectedDate: new Date(),
        selectedTime: "",
        guests: "",
        occasion: "",
      }}
      validationSchema={Yup.object().shape({
        selectedDate: Yup.date().required("Date is required"),
        selectedTime: Yup.string().required("Time is required"),
        guests: Yup.number()
          .required("Guest number is required")
          .min(1, "Guest number must be at least 1")
          .max(10, "Guest number cannot exceed 10"),
        occasion: Yup.string().required("Occasion type is required"),
      })}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        submitForm(values);
        resetForm();
        setSubmitting(false);
      }}
    >
      {({ values, handleChange, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <label htmlFor="res-date">Choose date</label>
          <input
            type="date"
            name="selectedDate"
            id="res-date"
            onChange={handleDateChange}
            value={selectedDate.toISOString().slice(0, 10)}
          />
          <ErrorMessage name="selectedDate" className="error" />

          <label htmlFor="res-time">Choose time</label>
          <select
            name="selectedTime"
            id="res-time"
            onChange={handleChange}
            value={values.selectedTime}
          >
            <option value="" disabled hidden>
              Choose time
            </option>
            {availableTimes.map((time) => (
              <option key={time}>{time}</option>
            ))}
          </select>
          <ErrorMessage name="selectedTime" component="div" className="error" />

          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            placeholder="Guests Number"
            min="1"
            max="10"
            name="guests"
            id="guests"
            onChange={handleChange}
          />
          <ErrorMessage name="guests" component="div" className="error" />

          <label htmlFor="occasion">Occasion</label>
          <select name="occasion" id="occasion" onChange={handleChange}>
            <option value="" disabled selected hidden>
              Occasion type
            </option>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
          <ErrorMessage name="occasion" component="div" className="error" />

          <input
            type="submit"
            value="Make Your Reservation"
            id="submit"
            disabled={isSubmitting}
          />
        </form>
      )}
    </Formik>
  );
}

export default BookingForm;
