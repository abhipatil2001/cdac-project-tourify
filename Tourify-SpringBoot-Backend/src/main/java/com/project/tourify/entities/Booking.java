package com.project.tourify.entities;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
@Table(name = "bookings_tb")
//@Data
@Getter
@Setter
@ToString
@EqualsAndHashCode
@AllArgsConstructor
@NoArgsConstructor
public class Booking {

	// fields
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
    @Column(name = "from_date", nullable = false)
    private LocalDate fromDate;

    @Column(name = "to_date", nullable = false)
    private LocalDate toDate;
    
    @Column(name = "bill", nullable = false)
    private Double bill;
	
    @Column(name = "is_deleted", columnDefinition = "INTEGER(1) DEFAULT 0")
    private Integer isDeleted = 0;
	
	@Column(name = "created_at", nullable = false, updatable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
	private LocalDateTime createdAt;
	
	// add FK: user_id, property_id, status_id
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id" , referencedColumnName = "id")
	private User userId;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "property_id" , referencedColumnName = "id")
	private Property propertyId;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "status_id" , referencedColumnName = "id")
	private BookingStatus statusId;
	
	//GETTERS SETTERS
	public void setUserId(Long id) { 
		this.userId = new User();
		this.userId.setId(id);
	}
	
	public void setPropertyId(Long id) {
		this.propertyId = new Property();
		this.propertyId.setId(id);
	}
	
	public void setStatusId(Long id) {
		this.statusId = new BookingStatus();
		this.statusId.setId(id);
	}
	
	public Long getPropertyId() {
		return propertyId.getId();
	}
	
	public Long getUserId() {
		return userId.getId();
	}
	
	public Long getStatusId() {
		return statusId.getId();
	}
	

	
	@PrePersist
	protected void onCreate() {
		createdAt = LocalDateTime.now();
	}
}
