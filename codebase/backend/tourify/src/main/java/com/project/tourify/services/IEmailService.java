package com.project.tourify.services;

public interface IEmailService {

	public void sendRegistrationEmail(String toEmail, String subject, String body);
}
