package com.project.tourify.entities;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "reviews_tb")
//@Data
@Getter
@Setter
@ToString
@EqualsAndHashCode
@AllArgsConstructor
@NoArgsConstructor
public class Review {
	
	// fields
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "review", nullable = false, length = 500)
	private String review;
	
	@Column(name = "rating", nullable = false)
	private int rating;
	
    @Column(name = "is_deleted", columnDefinition = "INTEGER(1) DEFAULT 0")
    private Integer isDeleted = 0;
	
	@Column(name = "created_at", nullable = false, updatable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
	private LocalDateTime createdAt;
	
	// add FK: property_id
	
	@ManyToOne
	@JoinColumn(name = "property_id")
	private Property propertyId;
	
	//Methods
	
	@PrePersist
	protected void onCreate() {
		createdAt = LocalDateTime.now();
	}

}
