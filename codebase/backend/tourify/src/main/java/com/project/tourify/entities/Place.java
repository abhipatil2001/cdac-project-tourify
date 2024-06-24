package com.project.tourify.entities;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "places_tb")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Place {
	// fields 
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "place", nullable = false, length = 100)
	private String place;
	
	@Column(name = "is_deleted", nullable = false)
    private Boolean isDeleted = false;
	
	@Column(name = "created_at", nullable = false, updatable = false)
	private LocalDateTime createdAt;
	
	// mapped FK
	@OneToMany(mappedBy = "placeId", cascade = CascadeType.ALL)
	private List<Property> propertyList = new ArrayList<>();
	
	//Methods
	
	@PrePersist
	protected void onCreate() {
		createdAt = LocalDateTime.now();
	}
}
