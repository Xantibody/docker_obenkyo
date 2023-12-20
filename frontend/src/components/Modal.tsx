"use client";

import { Button, Group, Modal as MantinModal, TextInput } from "@mantine/core";
import { useRef } from "react";

type Props = {
  opened: boolean;
  handleOpened: (bool: boolean) => void;
  handleSetTask: ({ title, summary }: { title: string; summary: string }) => void;
};

export const Modal = ({ opened, handleOpened, handleSetTask }: Props) => {
  const taskTitle = useRef<HTMLInputElement>(null);
  const taskSummary = useRef<HTMLInputElement>(null);

  function setTasks() {
    if (taskTitle.current?.value && taskSummary.current?.value) {
      handleSetTask({
        title: taskTitle.current?.value,
        summary: taskSummary.current?.value,
      });
    }
  }

  return (
    <MantinModal
      opened={opened}
      size={"md"}
      title={"New Task"}
      withCloseButton={false}
      onClose={() => {
        handleOpened(false);
      }}
      centered
    >
      <TextInput mt={"md"} ref={taskTitle} placeholder={"Task Title"} required label={"Title"} />
      <TextInput
        ref={taskSummary}
        mt={"md"}
        placeholder={"Task Summary"}
        required
        label={"Summary"}
      />
      <Group mt={"md"}>
        <Button
          onClick={() => {
            handleOpened(false);
          }}
          variant={"subtle"}
        >
          Cancel
        </Button>
        <Button
          onClick={() => {
            setTasks();
            handleOpened(false);
          }}
        >
          Create Task
        </Button>
      </Group>
    </MantinModal>
  );
};
