import { ComponentStory, ComponentMeta } from "@storybook/react";
import CityCard from ".";

export default {
  title: "CityCard",
  component: CityCard,
  args: {
    description: "Displays city statistics or compare to other city.",
  },
} as ComponentMeta<typeof CityCard>;

const DefaultTemplate: ComponentStory<typeof CityCard> = (args) => (
  <CityCard {...args} />
);

export const Default = DefaultTemplate.bind({});

Default.args = {
  cityData: {
    city: "Kraków",
    id: "123123",
    clouds: 0,
    windSpeed: 12,
    temperature: 31,
    pressure: 1002,
    humidity: 51,
  },
};

const CompareTemplate: ComponentStory<typeof CityCard> = (args) => (
  <CityCard {...args} />
);

export const Compare = CompareTemplate.bind({});

Compare.args = {
  cityData: {
    city: "Kraków",
    id: "123123",
    clouds: 0,
    windSpeed: 12,
    temperature: 31,
    pressure: 1002,
    humidity: 51,
  },
  compareToCityData: {
    city: "Warszawa",
    id: "123125",
    clouds: 1,
    windSpeed: 10,
    temperature: 28,
    pressure: 1012,
    humidity: 31,
  },
};
