package com.project.tourify.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.tourify.entities.Booking;
import com.project.tourify.entities.Property;
import com.project.tourify.entities.User;

public interface IBookingRepo extends JpaRepository<Booking, Long>{

    // Custom finder method to get properties by userId
    List<Booking> findByUserId(User user);
}
