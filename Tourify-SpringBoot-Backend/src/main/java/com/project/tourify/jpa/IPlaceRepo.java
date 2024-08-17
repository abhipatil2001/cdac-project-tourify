package com.project.tourify.jpa;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.tourify.entities.Place;

public interface IPlaceRepo extends JpaRepository<Place, Long> {

}
