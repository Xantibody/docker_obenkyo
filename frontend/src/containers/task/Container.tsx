"use client";
import {
  Button,
  Container as MantineContainer,
  Group,
  Title,
  Text,
  LoadingOverlay,
} from "@mantine/core";
import { Modal } from "@/components/Modal";
import { Card } from "@/components/Card";
import { useCallback, useEffect, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { createTask, deleteTask, getTasks } from "@/features/api";

export type Task = {
  id?: number;
  title: string;
  summary: string;
};

export function Container() {
  const [visible, { open, close }] = useDisclosure(true);

  const [opened, setOpened] = useState(false);
  const handleOpened = useCallback((bool: boolean) => {
    setOpened(bool);
  }, []);

  const [tasks, setTasks] = useState<Task[]>([]);

  const handleSetTask = useCallback(
    async ({ title, summary }: Task) => {
      open();
      const created = await createTask({ title, summary });
      setTasks([...tasks, created]);
      close();
    },
    [tasks],
  );

  const removeTask = useCallback(
    async (index: number) => {
      open();
      const id = tasks[index].id;
      if (id !== undefined) await deleteTask(id);

      const clonedTasks = [...tasks];
      clonedTasks.splice(index, 1);
      setTasks(clonedTasks);
      close();
    },
    [tasks],
  );

  const loadTasks = async () => {
    open();
    const tasks = await getTasks();
    setTasks(tasks);
    close();
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="App">
      <LoadingOverlay visible={visible} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
      <Modal opened={opened} handleOpened={handleOpened} handleSetTask={handleSetTask} />
      <MantineContainer size={550} my={40}>
        <Group>
          <Title
            style={(theme) => ({
              fontFamily: `Greycliff CF, ${theme.fontFamily}`,
              fontWeight: 900,
            })}
          >
            My Tasks
          </Title>
        </Group>
        {tasks.length > 0 ? (
          tasks.map((task, index) => {
            if (task.title) {
              return (
                <Card
                  key={`${index}`}
                  index={index}
                  title={task.title}
                  summary={task.summary}
                  removeTask={removeTask}
                />
              );
            }
          })
        ) : (
          <Text size={"lg"} mt={"md"} c={"dimmed"}>
            You have no tasks
          </Text>
        )}
        <Button
          onClick={() => {
            setOpened(true);
          }}
          fullWidth
          mt={"md"}
        >
          New Task
        </Button>
      </MantineContainer>
    </div>
  );
}
