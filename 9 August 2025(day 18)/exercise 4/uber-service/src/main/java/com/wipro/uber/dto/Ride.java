package com.wipro.uber.dto;

import java.time.LocalDateTime;
import lombok.Data;

@Data
public class Ride {
    private Integer id;
    private String riderName;
    private String pickup;
    private String dropLocation;
    private String status;
    private String paymentMethod;
    private Boolean paymentStatus;
    private LocalDateTime timestamp;
}


