import { render } from "@testing-library/react";
import CityCardModule, {
  CityCardModuleProps,
} from "~/modules/CityCardModule/index";

jest.mock("modules/CityCardModule/variants/CityCardWithCompare", () => {
  return {
    __esModule: true,
    default: () => <div data-component="CityCardWithCompare"></div>,
  };
});

jest.mock("modules/CityCardModule/variants/CityCardWithStats", () => {
  return {
    __esModule: true,
    default: () => <div data-component="CityCardWithStats"></div>,
  };
});

describe("<CityCardModule />", () => {
  const setup = (customProps: Partial<CityCardModuleProps> = {}) => {
    const defaultProps: CityCardModuleProps = {
      cityName: "SomeCity",
      ...customProps,
    };
    return render(<CityCardModule {...defaultProps} />);
  };

  it("should render CityCardWithStats if only cityName is passed", () => {
    const { container } = setup();

    expect(container.firstChild).toHaveAttribute(
      "data-component",
      "CityCardWithStats"
    );
  });

  it("should render CityCardWithCompare if compareToCity is passed", () => {
    const { container } = setup({ compareToCity: "OtherCity" });

    expect(container.firstChild).toHaveAttribute(
      "data-component",
      "CityCardWithCompare"
    );
  });
});
