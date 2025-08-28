package com.wipro.LetsGo.Controller;

import com.wipro.LetsGo.model.VehicleMovement;
import com.wipro.LetsGo.Service.MovementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/move")
public class MovementController {

    private final MovementService movementService;

    @Autowired
    public MovementController(MovementService movementService) {
        this.movementService = movementService;
    }

    @PostMapping
    public ResponseEntity<VehicleMovement> recordMovement(@RequestBody Map<String, Object> payload) {
        Integer vehId = (Integer) payload.get("vehId");
        Double lat = Double.valueOf(payload.get("lat").toString());
        Double longitude = Double.valueOf(payload.get("long").toString());
        
        VehicleMovement savedMovement = movementService.saveMovement(vehId, lat, longitude);
        return ResponseEntity.ok(savedMovement);
    }
}
