package com.project.tourify.entities;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
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
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "properties_tb")
//@Data
@Getter
@Setter
@ToString
@EqualsAndHashCode
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
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "place_id", referencedColumnName = "id")
	private Place placeId;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "category_id", referencedColumnName = "id")
	private Category categoryId;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id", referencedColumnName = "id")
	private User userId; 
	
	
	// mapped FK
//	@OneToMany(mappedBy = "propertyId", cascade = CascadeType.ALL)
//	private List<Review> reviewList = new ArrayList<>();
//	
//	@OneToMany(mappedBy = "propertyId", cascade = CascadeType.ALL)
//	private List<Booking> bookingList = new ArrayList<>();
	
	// GETTERS and SETTERS
	public void setPlaceId(Long id) {
		this.placeId = new Place();
		this.placeId.setId(id);
	}
	
	public Long getPlaceId() {
		return this.placeId.getId();
	}
	
	public void setCategoryId(Long id) {
		this.categoryId = new Category();
		this.categoryId.setId(id);
	}
	
	public Long getCategoryId() {
		return this.categoryId.getId();
	}
	
	public void setUserId(Long id) {
		this.userId = new User();
		this.userId.setId(id);
	}
	
	public Long getUserId() {
		return this.userId.getId();
	}
	
	
	//Methods
	
	@PrePersist
	protected void onCreate() {
		createdAt = LocalDateTime.now();
	}
}
