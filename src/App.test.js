import React from "react";
import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import { fetchAPI, submitAPI } from "./utils/API.js";
import reducer from "./components/Reducer";

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
