import { render } from "@testing-library/react";
import CityStatistic, { CityStatisticProps } from ".";
import { CityStatisticType } from "./constants";

jest.mock("antd", () => {
  const ant = jest.requireActual("antd");
  const { mapPropsToDataAttr } = require("~/utils/tests/mapPropsToDataAttr");
  return {
    __esModule: true,
    ...ant,
    Statistic: (props: any) => (
      <div className="Statistics" {...mapPropsToDataAttr(props)}>
        {props.children}
      </div>
    ),
  };
});

const setup = (customProps: Partial<CityStatisticProps> = {}) => {
  const defaultProps: CityStatisticProps = {
    type: CityStatisticType.windSpeed,
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

  return render(<CityStatistic {...defaultProps} />);
};

describe("<CityStatistic />", () => {
  it("should render antd Statistic component", () => {
    const { container } = setup();

    expect(container.firstChild).toHaveClass("Statistics");
  });
});

describe.each([
  [CityStatisticType.humidity, "12"],
  [CityStatisticType.pressure, "1001"],
  [CityStatisticType.temperature, "31"],
  [CityStatisticType.windSpeed, "9"],
])("<CityStatistic />", (metric, expected) => {
  test(`should render antd Statistic component with metric "${metric}"`, () => {
    expect(setup({ type: metric }).container.firstChild).toHaveAttribute(
      "data-value",
      expected
    );
  });
});

describe.each([
  [CityStatisticType.humidity, "2"],
  [CityStatisticType.pressure, "1"],
  [CityStatisticType.temperature, "1"],
  [CityStatisticType.windSpeed, "1"],
])("<CityStatistic />", (metric, expected) => {
  test(`should pass compared metric "${metric}" into antd Statictic component`, () => {
    const compareToCityData: Partial<CityStatisticProps>["compareToCityData"] =
      {
        city: "OtherSomeCity",
        humidity: 10,
        pressure: 1000,
        temperature: 30,
        windSpeed: 10,
        clouds: 0,
        id: "12",
      };

    expect(
      setup({ type: metric, compareToCityData }).container.firstChild
    ).toHaveAttribute("data-value", expected);
  });
});
