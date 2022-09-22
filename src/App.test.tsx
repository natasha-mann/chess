import { fireEvent, render, screen } from "@testing-library/react";
import App from "App";

const makeChessMoves = () => {
  fireEvent.change(screen.getByTestId(/colour/i), {
    target: { value: "white" },
  });

  fireEvent.click(screen.getByTestId("rook"));

  fireEvent.click(screen.getByTestId("A5"));
  fireEvent.click(screen.getByTestId("A7"));
};

test("it should render a h3 with the correct state values", () => {
  render(<App />);

  makeChessMoves();

  const element = screen.getByTestId("result");

  expect(element).toHaveTextContent("Move my white rook from A5 to A7");
});

test("clicking the reset button should return the page to its original state ", () => {
  const view = render(<App />);

  makeChessMoves();

  fireEvent.submit(screen.getByText(/play!/i));

  fireEvent.click(screen.getByText(/reset board/i));

  expect(view).toMatchSnapshot();
});
