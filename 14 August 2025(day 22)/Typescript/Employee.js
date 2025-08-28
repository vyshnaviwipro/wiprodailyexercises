function printEmployees(employees) {
    employees.forEach(function (emp) {
        console.log("ID: ".concat(emp.empId, ", Name: ").concat(emp.empName, ", Salary: ").concat(emp.salary));
    });
    return employees.length;
}
var empList = [
    { empId: 101, empName: "vyshu", salary: 75000 },
    { empId: 102, empName: "meena", salary: 60000 },
    { empId: 103, empName: "priya", salary: 69000 }
];
var count = printEmployees(empList);
console.log("Total number of employees: ".concat(count));
