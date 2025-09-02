<<<<<<< HEAD
package com.wipro.LetsGo.repository;

import com.wipro.LetsGo.model.VehicleMovement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VehicleMovementRepository extends JpaRepository<VehicleMovement, Long> {
    // Corrected: First type parameter is the Entity class, second is the ID type
=======
package com.wipro.LetsGo.repository;

import com.wipro.LetsGo.model.VehicleMovement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VehicleMovementRepository extends JpaRepository<VehicleMovement, Long> {
    // Corrected: First type parameter is the Entity class, second is the ID type
>>>>>>> 817c98beb053107e8742942ddea2eb196f6efef8
}