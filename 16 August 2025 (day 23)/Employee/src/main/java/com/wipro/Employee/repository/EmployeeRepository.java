<<<<<<< HEAD
package com.wipro.Employee.repository;

import com.wipro.Employee.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    List<Employee> findByNameContaining(String name);
=======
package com.wipro.Employee.repository;

import com.wipro.Employee.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    List<Employee> findByNameContaining(String name);
>>>>>>> 817c98beb053107e8742942ddea2eb196f6efef8
}