package com.example.feedback.service;

import java.util.List;

import com.example.feedback.dto.request.FeedbackRequest;
import com.example.feedback.dto.response.FeedbackResponse;

public interface FeedbackService {

    boolean saveFeedback(FeedbackRequest request);

    List<FeedbackResponse> getFeedbacks();

}
