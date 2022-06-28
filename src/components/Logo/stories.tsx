import { ComponentMeta, ComponentStory } from "@storybook/react";
import Logo, { LogoType } from ".";
import config from "~/styles/config";

export default {
  title: "Logo",
  component: Logo,
  args: {
    description: "Simple Logo component",
  },
} as ComponentMeta<typeof Logo>;

const DefaultTemplate: ComponentStory<typeof Logo> = (args) => (
  <div
    style={{
      minWidth: "100vw",
      minHeight: "100vh",
      background: config.colors.main,
      padding: "20px",
    }}
  >
    <Logo {...args} />
  </div>
);

export const Default = DefaultTemplate.bind({});

Default.args = {
  logoType: LogoType.normal,
};
