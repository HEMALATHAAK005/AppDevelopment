package com.example.home.dto.response;


import java.util.Date;
import java.util.List;

import com.example.home.model.Product;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OrderResponse {
    private Long oid;
    private Date orderDate;
    private Long orderTotal;
    private String orderAddress;
    private String paymentMode;
    private List<Product> products;
}
