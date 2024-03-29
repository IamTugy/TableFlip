import type { Meta, StoryObj, StoryFn } from "@storybook/react";
import { twJoin } from "tailwind-merge";

import { Card } from "./Card";
import { useState } from "react";

export default {
  title: "Common/Card",
  component: Card,
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: (
      <div className="flex-center h-full w-full text-2xl font-semibold">
        Card Component
      </div>
    ),
    className: "w-[290px] flex-center",
  },
};

export const Spin: Story = {
  args: {
    children: (
      <div className="flex-center h-full w-full text-2xl font-semibold">
        Card Front
      </div>
    ),
    backside: (
      <div className="flex-center h-full w-full text-2xl font-semibold">
        Card Back
      </div>
    ),
    className: "w-[290px] flex-center animate-[spin-y_3s_linear_infinite]",
  },
};

export const Hoverable: StoryFn = () => {
  return (
    <div className="w-[290px] [perspective:600px] group">
      <Card
        backside={
          <div className="flex-center h-full w-full text-2xl font-semibold">
            Now im flipped
          </div>
        }
        className="flex-center transition transform group-hover:rotate-y-180 duration-500 ease-in-out"
      >
        <div className="flex-center h-full w-full text-2xl font-semibold">
          Hover Me
        </div>
      </Card>
    </div>
  );
};

export const Clickable: StoryFn = () => {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className="w-[290px] [perspective:600px] group"
      onClick={() => setFlipped((state) => !state)}
    >
      <Card
        backside={
          <div className="flex-center flex-col h-full w-full text-2xl font-semibold">
            I am flipped!
            <br />
            <span className="text-base">now click again...</span>
          </div>
        }
        className={twJoin(
          "flex-center transition transform duration-500 ease-in-out cursor-pointer",
          flipped && "[transform:rotateY(180deg)]" // <- weird bug here (rotate-y-180 should have worked)
        )}
      >
        <div className="flex-center h-full w-full text-2xl font-semibold">
          Click Me
        </div>
      </Card>
    </div>
  );
};
