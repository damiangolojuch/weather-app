import { render } from "@testing-library/react";
import CityCardWithCompare, {
  CityCardWithCompareProps,
} from "~/modules/CityCardModule/variants/CityCardWithCompare";
import { useSelector } from "react-redux";
import CityCardWithStats, {
  CityCardWithStatsProps,
} from "~/modules/CityCardModule/variants/CityCardWithStats";

jest.mock("components/CityCard", () => {
  return {
    __esModule: true,
    default: () => <div data-component="CityCard"></div>,
  };
});

jest.mock("react-redux", () => {
  return {
    __esModule: true,
    useSelector: jest.fn(),
  };
});

describe("<CityCardWithCompare />", () => {
  const setup = (customProps: Partial<CityCardWithCompareProps> = {}) => {
    const defaultProps: CityCardWithCompareProps = {
      cityName: "SomeCity",
      compareToCity: "OtherCity",
      ...customProps,
    };
    return render(<CityCardWithCompare {...defaultProps} />);
  };

  it("should render CityCard component with city and second city (to compare) data", () => {
    (useSelector as jest.Mock).mockReturnValue({});
    const { container } = setup();

    expect(container.firstChild).toHaveAttribute("data-component", "CityCard");
  });

  it("should render nothing if there is no city data", () => {
    (useSelector as jest.Mock).mockReturnValue(undefined);
    const { container } = setup();

    expect(container.firstChild).toBeNull();
  });
});

describe("<CityCardWithStats />", () => {
  const setup = (customProps: Partial<CityCardWithStatsProps> = {}) => {
    const defaultProps: CityCardWithStatsProps = {
      cityName: "SomeCity",
      ...customProps,
    };
    return render(<CityCardWithStats {...defaultProps} />);
  };

  it("should render CityCard component with city data", () => {
    (useSelector as jest.Mock).mockReturnValue({});
    const { container } = setup();

    expect(container.firstChild).toHaveAttribute("data-component", "CityCard");
  });

  it("should render nothing if there is no city data", () => {
    (useSelector as jest.Mock).mockReturnValue(undefined);
    const { container } = setup();

    expect(container.firstChild).toBeNull();
  });
});
