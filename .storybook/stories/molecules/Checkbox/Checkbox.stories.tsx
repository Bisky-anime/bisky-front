import { Meta, StoryObj } from "@storybook/react"

import { Checkbox } from "../ui/Checkbox"

const meta: Meta<typeof Checkbox> = {
  title: "shared/molecules/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {}

export const Dash: Story = { args: { isDash: true } }

export const Disabled: Story = { args: { disabled: true } }