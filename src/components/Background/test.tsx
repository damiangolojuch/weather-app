import Background from "./";
import { render, screen } from "@testing-library/react";

jest.mock("components/Background/helpers", () => {
  return {
    __esModule: true,
    getRandomBackground: function Mock() {
      return "random-img-path.jpg";
    },
  };
});

describe("<Background />", () => {
  it("should display img with image from backgrounds directory", () => {
    const { container } = render(<Background />);

    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(container.getElementsByTagName("img")).toMatchSnapshot();
  });
});
