package com.example.home.service;


import java.util.List;

import com.example.home.dto.request.ProductRequest;
import com.example.home.dto.response.CountResponse;
import com.example.home.dto.response.ProductResponse;
import com.example.home.model.Product;

public interface ProductService {

    boolean saveProduct(ProductRequest request);

    List<ProductResponse> getAllProducts();

    ProductResponse getProduct(Long pid);

    ProductResponse updateProduct(ProductRequest request, Long pid);

    boolean deleteProduct(Long pid);

    Product getProductModelId(Long pid);

    CountResponse productCount();

}
