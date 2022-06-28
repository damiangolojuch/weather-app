import Logo, { LogoProps, LogoType } from ".";
import { render } from "@testing-library/react";

const setup = (customProps: LogoProps = {}) => {
  const defaultProps: LogoProps = {
    logoType: LogoType.normal,
    ...customProps,
  };

  return render(<Logo {...defaultProps} />);
};

describe.each([
  ["normal", LogoType.normal, "/assets/logo.svg"],
  ["mini", LogoType.mini, "/assets/logo-mini.svg"],
  ["twoLines", LogoType.twoLines, "/assets/logo-2lines.svg"],
])("<Logo />", (variantName, variantValue, expected) => {
  it(`should render ${variantName} variant of Logo component`, () => {
    const { container } = setup({ logoType: variantValue });

    expect(container.getElementsByTagName("img").item(0)).toHaveAttribute(
      "src",
      expected
    );
  });
});
