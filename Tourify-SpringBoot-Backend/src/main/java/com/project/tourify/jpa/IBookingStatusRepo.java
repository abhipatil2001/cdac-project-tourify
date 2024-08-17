package com.project.tourify.jpa;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.tourify.entities.BookingStatus;

public interface IBookingStatusRepo extends JpaRepository<BookingStatus, Long> {

}
