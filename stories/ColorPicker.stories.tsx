import ColorPicker from "./ColorPicker";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ColorPicker> = {
  title: "Example/ColorPicker",
  component: ColorPicker,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof ColorPicker>;

export const Default: Story = {
  args: {
   
  },
};
