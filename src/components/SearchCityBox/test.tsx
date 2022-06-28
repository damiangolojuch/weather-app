import SearchCityBox, { SearchCityBoxProps } from ".";
import { render } from "@testing-library/react";

const setup = (customProps: Partial<SearchCityBoxProps> = {}) => {
  const defaultProps: SearchCityBoxProps = {
    currentCityName: "",
    onSearch: jest.fn(),
    ...customProps,
  };

  return render(<SearchCityBox {...defaultProps} />);
};

describe("<SearchCityBox />", () => {
  it(`should render antd Input.Search`, () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });
});
