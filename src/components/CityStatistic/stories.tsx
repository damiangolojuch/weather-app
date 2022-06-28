import { ComponentMeta, ComponentStory } from "@storybook/react";
import CityStatistic from ".";
import { CityStatisticType } from "~/components/CityStatistic/constants";

export default {
  title: "CityStatistic",
  component: CityStatistic,
  args: {
    description:
      "Displays single city statistic or compare single statistic to other city.",
  },
} as ComponentMeta<typeof CityStatistic>;

const DefaultTemplate: ComponentStory<typeof CityStatistic> = (args) => (
  <CityStatistic {...args} />
);

export const Default = DefaultTemplate.bind({});

Default.args = {
  type: CityStatisticType.windSpeed,
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

const CompareTemplate: ComponentStory<typeof CityStatistic> = (args) => (
  <CityStatistic {...args} />
);

export const Compare = CompareTemplate.bind({});

Compare.args = {
  type: CityStatisticType.windSpeed,
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
