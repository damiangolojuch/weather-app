import { ComponentMeta, ComponentStory } from "@storybook/react";
import WeatherIcon from ".";
import { WeatherIcons } from "~/components/WeatherIcon/constants";

export default {
  title: "WeatherIcon",
  component: WeatherIcon,
  args: {
    description: "Weather icon component",
  },
} as ComponentMeta<typeof WeatherIcon>;

const DefaultTemplate: ComponentStory<typeof WeatherIcon> = (args) => (
  <WeatherIcon {...args} />
);

export const Default = DefaultTemplate.bind({});

Default.args = {
  type: WeatherIcons.cloudyDay1,
};
