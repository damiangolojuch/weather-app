import Header from "~/modules/Header/index";
import { render } from "@testing-library/react";

jest.mock("react-router-dom", () => {
  return {
    __esModule: true,
    Link: (props: any) => <div>{props.children}</div>,
  };
});

jest.mock("modules/CitySearchInput", () => {
  return {
    __esModule: true,
    default: (props: any) => (
      <div data-component="modules/CitySearchInput">{props.children}</div>
    ),
  };
});

describe("<Header />", () => {
  it("should render header with logo and input", () => {
    const { container } = render(<Header />);

    expect(container).toMatchSnapshot();
  });
});
