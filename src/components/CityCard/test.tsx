import CityCard, { CityCardProps } from ".";
import { screen } from "@testing-library/react";
import renderWithRouter from "~/utils/tests/renderWithRouter";

jest.mock("components/CityStatistic", () => {
  return {
    __esModule: true,
    default: (props: any) => (
      <div className="CityStatistic" id={props.type}>
        {props.children}
      </div>
    ),
  };
});

jest.mock("components/WeatherIcon", () => {
  return {
    __esModule: true,
    default: (props: any) => (
      <div className="WeatherIcon">{props.children}</div>
    ),
  };
});

jest.mock("antd", () => {
  const ant = jest.requireActual("antd");
  return {
    __esModule: true,
    ...ant,
    Card: (props: any) => <div className="Card">{props.children}</div>,
  };
});

const setup = (customProps: Partial<CityCardProps> = {}) => {
  const defaultProps: CityCardProps = {
    cityData: {
      city: "SomeCity",
      humidity: 12,
      pressure: 1001,
      temperature: 31,
      windSpeed: 9,
      clouds: 1,
      id: "123123",
    },
    ...customProps,
  };

  return renderWithRouter(<CityCard {...defaultProps} />);
};

describe("<CityCard />", () => {
  it("should contain link to passed city", () => {
    const { container } = setup();

    expect(screen.getByRole("link")).toBeInTheDocument();
    expect(container.getElementsByTagName("a").item(0)).toHaveAttribute(
      "href",
      "/SomeCity"
    );
  });

  it("should render ant design's Card component with WeatherIcon and Statistics component", () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  it("should render Statistics component for windSpeed, temperature, pressure and humidity", () => {
    const { container } = setup();

    expect(
      container.getElementsByClassName("CityStatistic").item(0)
    ).toHaveAttribute("id", "windSpeed");
    expect(
      container.getElementsByClassName("CityStatistic").item(1)
    ).toHaveAttribute("id", "temperature");
    expect(
      container.getElementsByClassName("CityStatistic").item(2)
    ).toHaveAttribute("id", "pressure");
    expect(
      container.getElementsByClassName("CityStatistic").item(3)
    ).toHaveAttribute("id", "humidity");
  });
});
