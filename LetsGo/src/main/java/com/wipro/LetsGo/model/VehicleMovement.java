package com.wipro.LetsGo.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;
@Entity
@Table(name = "vehicle_movement")
public class VehicleMovement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "veh_id", nullable = false)
    private Integer vehId;
    
    @Column(name = "latitude", nullable = false)
    private Double lat;
    
    @Column(name = "longitude", nullable = false)
    private Double longitude;
    
    @Column(name = "timestamp", nullable = false)
    private LocalDateTime timestamp;
    
    // Required no-arg constructor
    public VehicleMovement() {}
    
    // Getter and Setter for vehId
    public Integer getVehId() {
        return vehId;
    }
    
    public void setVehId(Integer vehId) {
        this.vehId = vehId;
    }
    
    // Add all other getters and setters...
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public Double getLat() { return lat; }
    public void setLat(Double lat) { this.lat = lat; }
    public Double getLongitude() { return longitude; }
    public void setLongitude(Double longitude) { this.longitude = longitude; }
    public LocalDateTime getTimestamp() { return timestamp; }
    public void setTimestamp(LocalDateTime timestamp) { this.timestamp = timestamp; }
    
    @PrePersist
    protected void onCreate() {
        timestamp = LocalDateTime.now();
    }
}