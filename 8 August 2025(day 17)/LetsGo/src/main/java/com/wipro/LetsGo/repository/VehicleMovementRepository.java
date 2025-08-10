package com.wipro.LetsGo.repository;

import com.wipro.LetsGo.model.VehicleMovement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VehicleMovementRepository extends JpaRepository<VehicleMovement, Long> {
    // Corrected: First type parameter is the Entity class, second is the ID type
}