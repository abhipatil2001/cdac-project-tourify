package com.project.tourify.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.project.tourify.dtos.BookingsDetailsDto;
import com.project.tourify.dtos.PropertyDetailsDTO;
import com.project.tourify.entities.Booking;
import com.project.tourify.entities.Property;
import com.project.tourify.entities.User;

public interface IBookingRepo extends JpaRepository<Booking, Long>{

    // Custom finder method to get properties by userId
    List<Booking> findByUserId(User user);
    
    // List of bookings of all customer from particular owner's props
    // JPQL / HQL
    
    @Query("SELECT new com.project.tourify.dtos.BookingsDetailsDto(b.id, p.title, b.fromDate, b.toDate, b.bill, u.name, u.email, u.phone) " +
           "FROM Booking b " +
           "JOIN b.propertyId p " +
           "JOIN b.userId u " +
           "WHERE p.userId.id = :ownerId")
    List<BookingsDetailsDto> findBookingsOfOwnersProps(@Param("ownerId") Long ownerId);
}

