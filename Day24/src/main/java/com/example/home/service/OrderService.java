package com.example.home.service;


import java.util.List;

import com.example.home.dto.request.OrderRequest;
import com.example.home.dto.response.CountResponse;
import com.example.home.dto.response.OrderResponse;

public interface OrderService {

    boolean saveOrder(OrderRequest request);

    List<OrderResponse> getOrders(Long uid);

    CountResponse orderCount();

}

