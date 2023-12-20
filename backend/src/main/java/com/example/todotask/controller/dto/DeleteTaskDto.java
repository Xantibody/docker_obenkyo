package com.example.todotask.controller.dto;

public class DeleteTaskDto {
    private int id;

    public DeleteTaskDto() {
    }

    public DeleteTaskDto(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
