import { ComponentMeta, ComponentStory } from "@storybook/react";
import SearchCityBox from ".";

export default {
  title: "SearchCityBox",
  component: SearchCityBox,
  args: {
    description: "Antd Input.Search adjusted to city search",
  },
  argTypes: {
    onSearch: {
      action: "onSearch",
    },
  },
} as ComponentMeta<typeof SearchCityBox>;

const DefaultTemplate: ComponentStory<typeof SearchCityBox> = (args) => (
  <SearchCityBox {...args} />
);

export const Default = DefaultTemplate.bind({});

Default.args = {
  currentCityName: "",
};
