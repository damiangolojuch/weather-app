import Layout, { LayoutProps } from ".";
import { render } from "@testing-library/react";

jest.mock("components/Background", () => {
  return {
    __esModule: true,
    default: () => <div data-component="Background" />,
  };
});

jest.mock("antd", () => {
  const ant = jest.requireActual("antd");
  const Layout = (props: any) => (
    <div data-component="Layout">{props.children}</div>
  );
  Layout.Header = (props: any) => (
    <div data-component="Header">{props.children}</div>
  );
  Layout.Content = (props: any) => (
    <div data-component="Content">{props.children}</div>
  );
  Layout.Footer = (props: any) => (
    <div data-component="Footer">{props.children}</div>
  );

  return {
    __esModule: true,
    ...ant,
    Layout,
  };
});

const setup = (customProps: Partial<LayoutProps> = {}) => {
  const defaultProps: LayoutProps = {
    ...customProps,
  };

  return render(<Layout {...defaultProps} />);
};

describe("<Layout />", () => {
  it("should render layout component with Background and Footer component", () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  it("should render passed header element", () => {
    const header = <h1>Custom header</h1>;
    const { container } = setup({ header });

    expect(container.getElementsByTagName("h1").item(0)).toHaveTextContent(
      "Custom header"
    );
  });

  it("should render passed children", () => {
    const header = <section>chilren to render</section>;
    const { container } = setup({ header });

    expect(container.getElementsByTagName("section").item(0)).toHaveTextContent(
      "chilren to render"
    );
  });
});
