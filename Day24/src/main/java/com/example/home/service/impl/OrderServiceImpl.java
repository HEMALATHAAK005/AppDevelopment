package com.example.home.service.impl;


import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.home.dto.info.ProductInfo;
import com.example.home.dto.request.OrderRequest;
import com.example.home.dto.response.CountResponse;
import com.example.home.dto.response.OrderResponse;
import com.example.home.model.Order;
import com.example.home.model.OrderMapping;
import com.example.home.model.Product;
import com.example.home.model.User;
import com.example.home.repository.OrderRepository;
import com.example.home.repository.ProductRepository;
import com.example.home.repository.UserRepository;
import com.example.home.service.OrderService;
import com.example.home.service.ProductService;

import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {

    private final UserRepository userRepository;
    private final ProductRepository productRepository;
    private final OrderRepository orderRepository;
    private final ProductService productService;

    @Override
    public boolean saveOrder(OrderRequest request) {
        User user = userRepository.findByUid(request.getUid());
        List<ProductInfo> productInfoList = request.getProducts();
        

        
        try {
            Order order = createOrder(request, user,  productInfoList);
            orderRepository.save(order);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    private Order createOrder(OrderRequest request, User user, List<ProductInfo> productInfoList) {
        Order order = Order.builder()
                .orderDate(new Date())
                .orderAddress(request.getOrderAddress())
                
                .user(user)
                
                .orderMappings(request.getProducts().stream()
                        .map(productRequest -> {
                            Product product = productService.getProductModelId(productRequest.getPid());
                            if (product != null) {
                                return OrderMapping.builder().product(product).build();
                            } else {
                                throw new IllegalArgumentException("Invalid product ID: " + productRequest.getPid());
                            }
                        })
                        .collect(Collectors.toList()))
                .build();

       

        return order;
    }

    

    private Product getProductOrThrow(Long productId) {
        return productRepository.findById(productId)
                .orElseThrow(() -> new IllegalArgumentException("Product not found for ID: " + productId));
    }

    private Product createUpdatedProduct(Product product, Long quantity) {
        Product updatedProduct = new Product();
        updatedProduct.setPid(product.getPid());
        updatedProduct.setProductName(product.getProductName());
        updatedProduct.setProductPrice(product.getProductPrice());
        updatedProduct.setProductQuantity(product.getProductQuantity() - quantity);
        updatedProduct.setProductImage(product.getProductImage());
        updatedProduct.setProductDesc(product.getProductDesc());
        return updatedProduct;
    }

    

    @Override
    public List<OrderResponse> getOrders(Long uid) {
        return convertToOrderResponse(orderRepository.findAllByUserUid(uid));
    }

    public List<OrderResponse> convertToOrderResponse(List<Order> orders) {
        return orders.stream()
                .map(order -> {
                    OrderResponse.OrderResponseBuilder builder = OrderResponse.builder()
                            .oid(order.getOid())
                            .orderDate(order.getOrderDate())
                            .orderTotal(order.getOrderTotal())
                            .orderAddress(order.getOrderAddress());
                          

                    List<Product> products = order.getOrderMappings().stream()
                            .map(OrderMapping::getProduct)
                            .collect(Collectors.toList());

                    builder.products(products);

                    return builder.build();
                })
                .collect(Collectors.toList());
    }

    @Override
    public CountResponse orderCount() {
        long count = orderRepository.count();
        return CountResponse.builder().count(count).build();
    }

}

