<<<<<<< HEAD
package com.wipro.Employee.service;

import com.wipro.Employee.entity.Employee;
import java.util.List;

public interface EmployeeService {
    Employee createEmployee(Employee employee);
    Employee getEmployeeById(Long id);
    List<Employee> searchByName(String name);
    Employee updateEmployee(Long id, Employee employee);
    void deleteEmployee(Long id);
}

=======
package com.wipro.Employee.service;

import com.wipro.Employee.entity.Employee;
import java.util.List;

public interface EmployeeService {
    Employee createEmployee(Employee employee);
    Employee getEmployeeById(Long id);
    List<Employee> searchByName(String name);
    Employee updateEmployee(Long id, Employee employee);
    void deleteEmployee(Long id);
}

>>>>>>> 817c98beb053107e8742942ddea2eb196f6efef8
