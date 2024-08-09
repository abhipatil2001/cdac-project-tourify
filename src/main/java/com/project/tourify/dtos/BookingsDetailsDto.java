package com.project.tourify.dtos;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
public class BookingsDetailsDto {

    private Long id;
    private String title;
    private LocalDate from_date;
    private LocalDate to_date;
    private Double bill;
    private String name;
    private String email;
    private String phone;
}
