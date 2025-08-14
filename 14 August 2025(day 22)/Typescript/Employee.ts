
interface Employee {
    empId: number;
    empName: string;
    salary: number;
}
function printEmployees(employees: Employee[]): number {
    employees.forEach(emp => {
        console.log(`ID: ${emp.empId}, Name: ${emp.empName}, Salary: ${emp.salary}`);
    });
    return employees.length;
}
const empList: Employee[] = [
    { empId: 101, empName: "vyshu", salary: 75000 },
    { empId: 102, empName: "meena", salary: 60000 },
    { empId: 103, empName: "priya", salary: 69000 }
];
const count = printEmployees(empList);
console.log(`Total number of employees: ${count}`);
