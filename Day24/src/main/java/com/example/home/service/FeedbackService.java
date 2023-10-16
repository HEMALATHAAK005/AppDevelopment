package com.example.home.service;


import java.util.List;

import com.example.home.dto.response.FeedbackResponse;

public interface FeedbackService {

    List<FeedbackResponse> getFeedbacks();

}
