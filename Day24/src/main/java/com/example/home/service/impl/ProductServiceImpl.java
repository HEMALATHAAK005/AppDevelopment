package com.example.home.service.impl;


import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.example.home.dto.request.ProductRequest;
import com.example.home.dto.response.CountResponse;
import com.example.home.dto.response.ProductResponse;
import com.example.home.model.Product;
import com.example.home.repository.CategoryRepository;
import com.example.home.repository.ProductRepository;
import com.example.home.service.ProductService;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;

    @Override
    public boolean saveProduct(ProductRequest request) {
        if (productRepository.findByProductName(request.getProductName()).isPresent()) {
            return false;
        }

        Product product = Product.builder()
                .productName(request.getProductName())
                
                .productDesc(request.getProductDesc())
                .productImage(request.getProductImage())
                .category(categoryRepository.findByCid(request.getCid()))
                .build();

        productRepository.save(product);
        return true;
    }

    @Override
    public List<ProductResponse> getAllProducts() {
        List<Product> productList = productRepository.findAll();

        return productList.stream()
                .map(this::mapProductToResponse)
                .collect(Collectors.toList());
    }

    @Override
    public ProductResponse getProduct(Long pid) {
        Product product = productRepository.findByPid(pid);
        return mapProductToResponse(product);
    }

    @Override
    public ProductResponse updateProduct(ProductRequest request, Long pid) {
        Product product = productRepository.findByPid(pid);

        if (product != null) {
            product.setProductName(request.getProductName());
            
            product.setProductDesc(request.getProductDesc());
            product.setProductImage(request.getProductImage());
            product.setCategory(categoryRepository.findByCid(request.getCid()));
            productRepository.save(product);

            return mapProductToResponse(product);
        } else {
            throw new EntityNotFoundException("Product with pid " + pid + " not found");
        }
    }

    @Override
    public boolean deleteProduct(Long pid) {
        Product product = productRepository.findByPid(pid);

        if (product != null) {
            productRepository.deleteByPid(pid);
            return true;
        } else {
            return false;
        }
    }

    private ProductResponse mapProductToResponse(Product product) {
        return ProductResponse.builder()
                .pid(product.getPid())
                .productName(product.getProductName())
                
                
                .productDesc(product.getProductDesc())
                .productImage(product.getProductImage())
                .build();
    }

    @Override
    public Product getProductModelId(Long pid) {
        return productRepository.findByPid(pid);
    }

    @Override
    public CountResponse productCount() {
        long count = productRepository.count();
        return CountResponse.builder().count(count).build();
    }
}
