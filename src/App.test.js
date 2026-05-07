import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

beforeEach(() => {
  localStorage.clear();
});

test("renders FocusFlow heading", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", { name: /FocusFlow Todo/i })
  ).toBeInTheDocument();
  expect(screen.getByText("質感高效待辦清單")).toBeInTheDocument();
});

test("renders todo form", () => {
  render(<App />);

  expect(screen.getByLabelText("Task")).toBeInTheDocument();
  expect(screen.getByLabelText("Due time")).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: /Add task/i })
  ).toBeInTheDocument();
});

test("renders task stats and filter buttons", () => {
  render(<App />);

  expect(screen.getByText("Total")).toBeInTheDocument();
  expect(screen.getAllByText("Completed")).toHaveLength(2);
  expect(screen.getByText("Remaining")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "All" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Active" })).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: "Completed" })
  ).toBeInTheDocument();
});

test("renders intentional empty state", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", { name: /No tasks yet/i })
  ).toBeInTheDocument();
  expect(
    screen.getByText(/Add one focused task to start shaping the day./i)
  ).toBeInTheDocument();
});
