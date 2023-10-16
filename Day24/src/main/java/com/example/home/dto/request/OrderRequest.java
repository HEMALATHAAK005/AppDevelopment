package com.example.home.dto.request;

import java.util.List;

import com.example.home.dto.info.ProductInfo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OrderRequest {
    private String orderAddress;
    
    private Long uid;
    private List<ProductInfo> products;
}
