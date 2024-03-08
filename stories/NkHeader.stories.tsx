import NkHeader from "./NkHeader";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof NkHeader> = {
    title: "Example/NkHeader",
    component: NkHeader,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ["autodocs"],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: "fullscreen",
    },
};

export default meta;
type Story = StoryObj<typeof NkHeader>;

export const Default: Story = {
    args: {
        bgColor: "gray",
    },
};