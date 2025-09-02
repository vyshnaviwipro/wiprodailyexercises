<<<<<<< HEAD
package com.wipro.food.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "food")
@Data
public class Food {
	
	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;
	
	@Column(name = "food_name")
	String name;
	
	@Column(name = "food_img")
	String img;
	
	@Column(name = "food_price")
	double price;
	
	@Column(name = "category")
	String category;

}
=======
package com.wipro.food.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "food")
@Data
public class Food {
	
	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;
	
	@Column(name = "food_name")
	String name;
	
	@Column(name = "food_img")
	String img;
	
	@Column(name = "food_price")
	double price;
	
	@Column(name = "category")
	String category;

}
>>>>>>> cde7585e31163cea2ffaa65881e3528e8317613f
