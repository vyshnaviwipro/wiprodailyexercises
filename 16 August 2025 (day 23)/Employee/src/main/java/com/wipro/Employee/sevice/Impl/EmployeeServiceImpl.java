package com.wipro.Employee.sevice.Impl;

import com.wipro.Employee.entity.Employee;
import com.wipro.Employee.repository.EmployeeRepository;
import com.wipro.Employee.service.EmployeeService;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepository repo;

    public EmployeeServiceImpl(EmployeeRepository repo) {
        this.repo = repo;
    }

    @Override
    public Employee createEmployee(Employee employee) {
        return repo.save(employee);
    }

    @Override
    public Employee getEmployeeById(Long id) {
        return repo.findById(id)
                   .orElseThrow(() -> new RuntimeException("Employee not found"));
    }

    @Override
    public List<Employee> searchByName(String name) {
        return repo.findByNameContaining(name);
    }

    @Override
    public Employee updateEmployee(Long id, Employee employee) {
        Employee existing = getEmployeeById(id);
        existing.setName(employee.getName());
        existing.setType(employee.getType());
        existing.setDepartment(employee.getDepartment());
        existing.setAddress(employee.getAddress());
        return repo.save(existing);
    }

    @Override
    public void deleteEmployee(Long id) {
        repo.deleteById(id);
    }
}
