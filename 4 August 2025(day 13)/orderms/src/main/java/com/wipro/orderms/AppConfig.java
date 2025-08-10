package com.wipro.orderms;

import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
public class AppConfig {
	@Bean
	@LoadBalanced
	RestTemplate getRestTemplate()
	{
		return new RestTemplate();
	}
}
