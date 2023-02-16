import React from "react";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { fetchAPI } from "../utils/API";
import { submitAPI } from "../utils/API";
import Homepage from "./Homepage";
import BookingPage from "./BookingPage";
import About from "./About";
import Contact from "./Contact";
import Reservations from "./Reservations";
import Login from "./Login";
import Confirmation from "./Confirmation";
import Nav from "./Nav";
import Footer from "./Footer";

function Main() {
  const [availableTimes, setAvailableTimes] = useState([]);
  const [date, setDate] = useState(new Date());
  const [formData, setFormData] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate();
  //const [availableTimesState, dispatch] = useReducer(reducer, initializeTimes);

  // const fetchData = () => {
  //   fetch(
  //     fetchAPI
  //   )
  //     .then((response) => response.json())
  //     .then((timesData) => setInitializeTimes(timesData))
  //     .catch((error) => console.log(error));
  // };

  useEffect(() => {
    // The fetchAPI function expects a date object, must convert the string value to a Date object before passing it to the fetchAPI function.
    // setInitializeTimes(fetchAPI(date)); This line will cause Uncaught TypeError: date.getDate is not a function.
    setAvailableTimes(fetchAPI(new Date(date)));
  }, [date]);

  const submitForm = (values) => {
    setFormData(values);
    if (submitAPI(formData)) {
      setFormSubmitted(true);
    }
  };

  useEffect(() => {
    if (formSubmitted) {
      navigate("/confirmation");
      setFormSubmitted(false);
    }
  }, [formSubmitted]);

  // useEffect(() => {
  //   // Make sure that the formData is not null before calling the navigate function, the following wrong code will cause error:
  //   // Too many calls to Location or History APIs within a short timeframe.
  //   //   if (submitAPI(formData)) {
  //   //     navigate("/confirmation");
  //   //   }
  //   // }, [formData]);

  //     // Error: usenavigate() may be used only in the context of a <router>.
  //     // If you want to get the react context, you should render the component as the descendant of a context provider.
  //     // Router component use the LocationContext.Provider and NavigationContext.Provider.
  //     // That's why you need to render the component as the children,
  //     // so that useNavigate hook can get the context data from NavigationContext and LocationContext providers.
  //     // So moved <BrowserRouter> from Main.js to index.js solved the error.
  //     if (formData && submitAPI(formData)) {
  //     navigate("/confirmation");
  //   }
  // }, [formData]);

  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route
          path="/booking"
          element={
            // Pass data from child to parent, https://www.freecodecamp.org/news/pass-data-between-components-in-react/
            // Pass setDate to child component, after choosing a date in the calendar, 'handlerDateChange' will use 'setDate' from
            // Main.js to update 'date' state which will triger useEffect to update times, and then the updated times data will
            // be sent to the child component with prop 'availableTimes'
            <BookingPage
              setDate={setDate}
              availableTimes={availableTimes}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>

      <Footer></Footer>
    </>
  );
}

export default Main;
