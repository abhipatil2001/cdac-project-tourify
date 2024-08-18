package com.project.tourify.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.project.tourify.services.IEmailService;

@Service
public class EmailService implements IEmailService {

	@Autowired
	private JavaMailSender mail;
	
	@Override
	public void sendRegistrationEmail(String toEmail, String subject, String body) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(toEmail);
        message.setSubject(subject);
        message.setText(body);
        message.setFrom("your_email@example.com");

        mail.send(message);
    }

}
