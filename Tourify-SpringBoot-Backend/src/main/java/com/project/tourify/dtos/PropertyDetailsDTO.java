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
public class PropertyDetailsDTO {

    private Long id;
    private String title;
    private String address;
    private Double rate;
    private String description;
    private String img;
    private String place;
    private String category;
}
