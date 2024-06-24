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
@Table(name = "categories_tb")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Category {
	
	// fields 
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "category", nullable = false, length = 100)
	private String category;
	
	@Column(name = "description", nullable = false, length = 500)
	private String description;
	
    @Column(name = "is_deleted", columnDefinition = "INTEGER(1) DEFAULT 0")
    private Integer isDeleted = 0;
	
	@Column(name = "created_at", nullable = false, updatable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
	private LocalDateTime createdAt;
	
	// mapped FK
	@OneToMany(mappedBy = "categoryId", cascade = CascadeType.ALL)
	private List<Property> propertyList = new ArrayList<>();
	
	
	//Methods
	
//	@PrePersist
//	protected void onCreate() {
//		createdAt = LocalDateTime.now();
//	}
}
