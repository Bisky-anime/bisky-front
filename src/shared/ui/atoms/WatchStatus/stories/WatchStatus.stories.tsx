import { Meta, StoryObj } from "@storybook/react"

import { WatchStatus } from "../ui/WatchStatus"

const meta: Meta<typeof WatchStatus> = {
  title: "atoms/WatchStatus",
  component: WatchStatus,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof WatchStatus>

export const Complete: Story = {
  args: { status: "complete" },
}

export const SetWatch: Story = {
  args: { status: "setWatch" },
}

export const Added: Story = {
  args: { status: "added" },
}

export const Watching: Story = {
  args: { status: "watching" },
}

export const Dropped: Story = {
  args: { status: "dropped" },
}