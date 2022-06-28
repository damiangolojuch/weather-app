import Loader from ".";
import { render } from "@testing-library/react";

jest.mock("antd", () => {
  const ant = jest.requireActual("antd");
  const Spin = (props: any) => (
    <div data-component="antd/Spin">{props.children}</div>
  );

  return {
    __esModule: true,
    ...ant,
    Spin,
  };
});

const setup = () => {
  return render(<Loader />);
};

describe("<Layout />", () => {
  it("should render antd Spin component with wrapper", () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });
});
