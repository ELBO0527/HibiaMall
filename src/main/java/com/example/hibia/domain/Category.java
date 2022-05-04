package com.example.hibia.domain;

import lombok.Getter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Getter
public class Category {

    @Id @GeneratedValue
    @Column(name = "category_id")
    private Long id;

    @Column(name = "category_name")
    private String name;
}
