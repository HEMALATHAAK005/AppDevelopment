
package com.example.demo.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BookServiceRequest {
	  private String username;
	  private String emailid;
	  private String mobileno;
	  private String password;

}

