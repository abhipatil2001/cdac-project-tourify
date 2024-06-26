package com.project.tourify.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.tourify.entities.Booking;

public interface IBookingRepo extends JpaRepository<Booking, Long>{

}
