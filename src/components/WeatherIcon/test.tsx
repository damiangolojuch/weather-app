import { render } from "@testing-library/react";
import { WeatherIcons } from "./constants";
import WeatherIcon, { WeatherIconProps } from ".";

const setup = (customProps: Partial<WeatherIconProps> = {}) => {
  const defaultProps: WeatherIconProps = {
    type: WeatherIcons.cloudyDay2,
    ...customProps,
  };

  return render(<WeatherIcon {...defaultProps} />);
};

describe("<WeatherIcon />", () => {
  it(`should render img with proper src`, () => {
    const { container } = setup({ type: WeatherIcons.weatherSprite });

    expect(container).toMatchSnapshot();
  });
});
