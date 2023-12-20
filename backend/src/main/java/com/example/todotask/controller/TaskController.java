package com.example.todotask.controller;

import com.example.todotask.controller.dto.CreateTaskDto;
import com.example.todotask.controller.dto.DeleteTaskDto;
import com.example.todotask.controller.dto.TaskDto;
import com.example.todotask.domain.repository.TaskRepository;
import com.example.todotask.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class TaskController {
    @Autowired
    TaskService taskService;
    @GetMapping("/tasks")
    public List<TaskDto> getTasks() {
        return taskService.findAll();
    }

    @PostMapping("/task")
    public TaskDto createTask(@RequestBody CreateTaskDto dto) {
        return taskService.create(dto);
    }

    @DeleteMapping("/task")
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public void deleteTask(@RequestBody DeleteTaskDto dto) {
        taskService.delete(dto);
    }

}
