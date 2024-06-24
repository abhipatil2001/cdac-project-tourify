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
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "properties_tb")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Property {

	// fields
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "title", nullable = false, length = 100)
	private String title;
	
	@Column(name = "address", nullable = false, length = 500)
	private String address;
	
	@Column(name = "rate", nullable = false)
	private double rate;
	
	@Column(name = "description", nullable = false, length = 500)
	private String description;
	
	@Column(name = "img", nullable = false, length = 5000)
	private String img;
	
    @Column(name = "is_deleted", columnDefinition = "INTEGER(1) DEFAULT 0")
    private Integer isDeleted = 0;
	
	@Column(name = "created_at", nullable = false, updatable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
	private LocalDateTime createdAt;
	
	// add FK: place_id, category_id, user_id
	@ManyToOne
	@JoinColumn(name = "place_id")
	private Place placeId;
	
	@ManyToOne
	@JoinColumn(name = "category_id")
	private Category categoryId;
	
	@OneToOne
	@JoinColumn(name = "user_id")
	private User userId;
	
	
	// mapped FK
	@OneToMany(mappedBy = "propertyId", cascade = CascadeType.ALL)
	private List<Review> reviewList = new ArrayList<>();
	
	@OneToMany(mappedBy = "propertyId", cascade = CascadeType.ALL)
	private List<Booking> bookingList = new ArrayList<>();
	
	//Methods
	
//	@PrePersist
//	protected void onCreate() {
//		createdAt = LocalDateTime.now();
//	}
}
