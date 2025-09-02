package com.wipro.productms.service;


import java.util.List;
import java.util.Optional;
import com.wipro.productms.entity.Product;

public interface ProductService {
    Product createProduct(Product product);
    Optional<Product> getProductById(Long id);
    List<Product> getAllProducts();
    Product updateProduct(Long id, Product productDetails);
    void deleteProduct(Long id);
    Product updateProductQuantity(Long id, Integer quantity);
}