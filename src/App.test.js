import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import { fetchAPI, submitAPI } from "./utils/API.js";
import reducer from "./components/Reducer";

//https://reactjs.org/docs/testing-recipes.html

test("Renders the BookingForm", () => {
  render(<BookingForm availableTimes={["10:00 AM", "12:00 PM", "2:00 PM"]} />);
  const formLabel = screen.getByText("Number of guests");
  expect(formLabel).toBeInTheDocument();
});

test("Reducer returns correct value", () => {
  const initialState = { time: "23:00" };
  const state = reducer(initialState, { type: "initialTimes" });
  expect(state).toEqual(initialState);
});

test("Reducer returns correct value", () => {
  const initialState = { time: "23:00" };
  const state = reducer(initialState, { type: "updateTimes" });
  expect(state).toEqual(initialState);
});

test("fetchAPI returns a non-empty array", () => {
  const date = new Date(2023, 1, 1);
  const result = fetchAPI(date);
  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBeGreaterThan(0);
});

describe("BookingForm", () => {
  it("displays error messages when form is submitted with empty fields", async () => {
    render(<BookingForm availableTimes={["10:00", "12:00", "2:00"]} />);

    // submit the form without filling in any fields
    const submitButton = screen.getByRole("button", {
      name: /Make Your Reservation/i,
    });
    fireEvent.click(submitButton);

    // check that error messages appear for all required fields
    const timeError = await screen.findByText(/Time is required/i);
    const guestsError = await screen.findByText(/Guest number is required/i);
    const occasionError = await screen.findByText(/Occasion type is required/i);

    expect(timeError).toBeInTheDocument();
    expect(guestsError).toBeInTheDocument();
    expect(occasionError).toBeInTheDocument();
  });
});

describe("BookingForm", () => {
  it("submits the form when all fields are filled", async () => {
    const submitForm = jest.fn();
    const setDate = jest.fn();

    render(
      <BookingForm
        submitForm={submitForm}
        availableTimes={["10:00", "12:00", "2:00"]}
        setDate={setDate}
      />
    );

    // fill in all required fields
    const dateInput = screen.getByLabelText(/Choose date/i);
    fireEvent.change(dateInput, { target: { value: "2023-03-01" } });

    const timeSelect = screen.getByLabelText(/Choose time/i);
    fireEvent.change(timeSelect, { target: { value: "12:00" } });

    const guestsInput = screen.getByLabelText(/Number of guests/i);
    fireEvent.change(guestsInput, { target: { value: "4" } });

    const occasionSelect = screen.getByLabelText(/Occasion/i);
    fireEvent.change(occasionSelect, { target: { value: "Birthday" } });

    // submit the form
    const submitButton = screen.getByRole("button", {
      name: /Make Your Reservation/i,
    });
    fireEvent.click(submitButton);

    let values = [
      dateInput.value,
      timeSelect.value,
      guestsInput.value,
      occasionSelect.value,
    ];

    expect(values[0]).toBe("2023-03-01");
    expect(values[1]).toBe("12:00");
    expect(values[2]).toBe("4");
    expect(values[3]).toBe("Birthday");
  });
});
