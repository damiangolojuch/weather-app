import { Story, Meta } from "@storybook/react";
import Background from ".";

export default {
  title: "Background",
  component: Background,
  args: {
    description: "Background component with random image",
  },
} as Meta;

export const Default: Story = (args) => <Background {...args} />;
