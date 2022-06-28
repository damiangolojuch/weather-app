import { ComponentMeta, ComponentStory } from "@storybook/react";
import Loader from ".";

export default {
  title: "Loader",
  component: Loader,
  args: {
    description: "Simple loader component",
  },
} as ComponentMeta<typeof Loader>;

const DefaultTemplate: ComponentStory<typeof Loader> = () => <Loader />;

export const Default = DefaultTemplate.bind({});
