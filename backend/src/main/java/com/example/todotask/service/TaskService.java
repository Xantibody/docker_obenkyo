package com.example.todotask.service;

import com.example.todotask.controller.dto.CreateTaskDto;
import com.example.todotask.controller.dto.DeleteTaskDto;
import com.example.todotask.controller.dto.TaskDto;
import com.example.todotask.domain.entity.Task;
import com.example.todotask.domain.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class TaskService {
    @Autowired
    TaskRepository taskRepository;

    public List<TaskDto> findAll(){
        Collection<Task> tasks = taskRepository.findAll();
        List<TaskDto> dto = tasks.stream()
                .map(task -> new TaskDto(task.getId(), task.getTitle(), task.getSummary()))
                .collect(Collectors.toList());
        return dto;
    }

    public TaskDto create(CreateTaskDto task){
        Task entity = new Task(task.getTitle(),task.getSummary());
        Task result = taskRepository.save(entity);
        TaskDto dto = new TaskDto(result.getId(), result.getTitle(), result.getSummary());
        return dto;
    }

    public boolean delete(DeleteTaskDto task){
        try {
            taskRepository.deleteById(task.getId());
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
