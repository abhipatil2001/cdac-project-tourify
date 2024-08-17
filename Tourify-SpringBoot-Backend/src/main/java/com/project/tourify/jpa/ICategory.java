package com.project.tourify.jpa;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.tourify.entities.Category;

public interface ICategory extends JpaRepository<Category, Long>{

}
