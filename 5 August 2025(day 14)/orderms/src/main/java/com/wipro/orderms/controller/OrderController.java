package com.wipro.orderms.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wipro.orderms.entity.Order;
import com.wipro.orderms.service.OrderService;

@RestController
@RequestMapping("/order")
public class OrderController {
	
	@Autowired
	OrderService orderService;
	
	@PostMapping
	void save(@RequestBody Order order)
	{	
		orderService.save(order);	
	}

	@GetMapping
	List<Order> findAll()
	{
		return orderService.findAll();
	}
}
