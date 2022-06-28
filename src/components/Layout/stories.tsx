import { ComponentMeta, ComponentStory } from "@storybook/react";
import Layout from ".";

export default {
  title: "Layout",
  component: Layout,
  args: {
    description:
      "Displays main page layout with optional header and breadcrumbs slots.",
  },
} as ComponentMeta<typeof Layout>;

const DefaultTemplate: ComponentStory<typeof Layout> = (args) => (
  <Layout {...args} />
);

export const Default = DefaultTemplate.bind({});

Default.args = {
  children: <div>Some content</div>,
};

const WithHeaderTemplate: ComponentStory<typeof Layout> = (args) => (
  <Layout {...args} />
);

export const WithHeader = WithHeaderTemplate.bind({});

WithHeader.args = {
  children: <div>Some content</div>,
  header: <h1>Header here</h1>,
};

const WithBreadcrumbsTemplate: ComponentStory<typeof Layout> = (args) => (
  <Layout {...args} />
);

export const WithBreadcrumbs = WithBreadcrumbsTemplate.bind({});

WithBreadcrumbs.args = {
  children: <div>Some content</div>,
  breadcrumbs: [
    { href: "#", label: "Home" },
    { href: "#", label: "Item" },
  ],
};
