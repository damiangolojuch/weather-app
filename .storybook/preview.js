import GlobalStyles from "../src/styles/global";
import { MemoryRouter } from "react-router-dom";

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
