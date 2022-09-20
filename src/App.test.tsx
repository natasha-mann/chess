import renderer from "react-test-renderer";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "App";

test("it should render a h3 with the correct state values", () => {
  render(<App />);
  fireEvent.change(screen.getByLabelText(/piece/i), {
    target: { value: "rook" },
  });

  fireEvent.change(screen.getByLabelText(/colour/i), {
    target: { value: "white" },
  });

  fireEvent.click(screen.getByTestId("A5"));
  fireEvent.click(screen.getByTestId("A7"));
  const element = screen.getByTestId("result");

  expect(element).toHaveTextContent("Move my white rook from A5 to A7");
});

test("clicking the reset button should return the page to its original state ", () => {
  const view = render(<App />);

  fireEvent.change(screen.getByLabelText(/piece/i), {
    target: { value: "rook" },
  });

  fireEvent.change(screen.getByLabelText(/colour/i), {
    target: { value: "white" },
  });

  fireEvent.click(screen.getByTestId("A5"));
  fireEvent.click(screen.getByTestId("A7"));

  fireEvent.submit(screen.getByText(/play!/i));

  fireEvent.click(screen.getByText(/reset board/i));

  expect(view).toMatchSnapshot();
});
