package com.project.tourify.repo;

import static org.assertj.core.api.Assertions.assertThat;

import java.time.LocalDateTime;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.project.tourify.entities.Role;
import com.project.tourify.entities.User;
import com.project.tourify.repositories.IUserRepo;

@SpringBootTest
public class UserRepoTest {

	@Autowired
	private IUserRepo userRepo;
	
	private User user;
	
	@Test
	void findByEmailTest() {
//        Optional<User> found = userRepo.findByEmail(user.getEmail());
//		Optional<User> found = userRepo.findByEmail("a@g.com");
		Optional<User> found = userRepo.findByEmail("piyush@g.com");

        assertThat(found.isPresent()).isTrue();  // asserts that the result is present
//        assertThat(found.get().getEmail()).isEqualTo(user.getEmail()); // asserts that the email of the found user matches the expected email
        assertThat(found.get().getEmail()).isEqualTo("piyush@g.com");
	}
	
//    @BeforeEach
//    public void setUp() {
//        user = new User();
//        user.setName("test");
//        user.setEmail("test@gmail.com");
//        user.setPassword("test");
//        user.setPhone("7218118526");
//        user.setAddress("test address");
//        user.setIsDeleted(0);
//        user.setCreatedAt(LocalDateTime.now());
//        
//        Role role = new Role();
//        role.setId(102L);
//        user.setRole(role);
//        
//        userRepo.save(user);
//    }
}
