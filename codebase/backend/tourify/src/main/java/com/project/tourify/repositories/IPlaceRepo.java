package com.project.tourify.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.tourify.entities.Place;

public interface IPlaceRepo extends JpaRepository<Place, Long> {

}
