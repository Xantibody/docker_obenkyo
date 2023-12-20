"use client";
import { ActionIcon, Card as MantinCard, Group, Text } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";

type Props = {
  index: number;
  title: string;
  summary: string;
  removeTask: (index: number) => void;
};

export const Card = ({ index, title, summary, removeTask }: Props) => {
  return (
    <MantinCard withBorder key={index} mt={"sm"}>
      <Group>
        <Text fw={"bold"}>{title}</Text>
        <ActionIcon
          onClick={() => {
            removeTask(index);
          }}
          color={"red"}
          variant={"transparent"}
        >
          <IconTrash />
        </ActionIcon>
      </Group>
      <Text c={"dimmed"} size={"md"} mt={"sm"}>
        {summary ? summary : "No summary was provided for this task"}
      </Text>
    </MantinCard>
  );
};
