package com.wipro.day4;
import java.util.concurrent.CopyOnWriteArrayList;


public class DeleteSalaryEmployees {

	public static void main(String[] args) {
		CopyOnWriteArrayList<Employee> employees = new CopyOnWriteArrayList<>();

        employees.add(new Employee("1", "vyshu", 28, 98000));
        employees.add(new Employee("2", "meena", 32, 90000));
        employees.add(new Employee("3", "priya", 30, 35000));
        employees.add(new Employee("4", "kathik", 26, 50000));

  
        for (Employee e : employees) {
            if (e.salary > 80000) {
                employees.remove(e);
            }
        }
        for (Employee e : employees) {
            System.out.println(e);
        }

	}

}
