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
@Table(name = "roles_tb")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Role {

	// fields 
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "role", nullable = false, length = 50)
	private String role;
	
    @Column(name = "is_deleted", columnDefinition = "INTEGER(1) DEFAULT 0")
    private Integer isDeleted = 0;
    
	@Column(name = "created_at", nullable = false, updatable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
	private LocalDateTime createdAt;

	// mapped FK
	@OneToMany(mappedBy = "roleId", cascade = CascadeType.ALL)
	private List<User> userList = new ArrayList<>();
	
	
	//Methods
	
//	@PrePersist
//	protected void onCreate() {
//		createdAt = LocalDateTime.now();
//	}
	
	
}
