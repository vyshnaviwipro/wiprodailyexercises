package com.wipro.LetsGo.Service;

import com.wipro.LetsGo.model.VehicleMovement;
import com.wipro.LetsGo.repository.VehicleMovementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class MovementService {

    private final VehicleMovementRepository repository;

    @Autowired // Constructor injection is recommended
    public MovementService(VehicleMovementRepository repository) {
        this.repository = repository;
    }

    public VehicleMovement saveMovement(Integer vehId, Double lat, Double longitude) {
        VehicleMovement movement = new VehicleMovement();
        movement.setVehId(vehId);
        movement.setLat(lat);
        movement.setLongitude(longitude);
        return repository.save(movement);
    }
}