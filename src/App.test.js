import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders 待辦事項清單 heading", () => {
  render(<App />);
  const headingElement = screen.getByText(/待辦事項清單/i);
  expect(headingElement).toBeInTheDocument();
});

test("renders todo form", () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/新增待辦事項.../i);
  expect(inputElement).toBeInTheDocument();
});

test("renders filter buttons", () => {
  render(<App />);
  const allButton = screen.getByText(/全部/i);
  const activeButton = screen.getByText(/進行中/i);
  const completedButton = screen.getByText(/已完成/i);

  expect(allButton).toBeInTheDocument();
  expect(activeButton).toBeInTheDocument();
  expect(completedButton).toBeInTheDocument();
});
