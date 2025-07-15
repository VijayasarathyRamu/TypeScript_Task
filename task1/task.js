// Write a TypeScript program to create a class named EmployeeSalary that takes the following details of an employee:
// Employee ID
// Employee Name
// Basic Salary
// The program should calculate:
// HRA (20% of Basic Salary)
// DA (10% of Basic Salary)
// Gross Salary = Basic + HRA + DA
// Then display all the details using a method.
var EmpolyeeSalary = /** @class */ (function () {
    function EmpolyeeSalary(ID, E_Name, Salary) {
        this.Employee_ID = ID;
        this.Employee_Name = E_Name;
        this.Basic_Salary = Salary;
    }
    EmpolyeeSalary.prototype.employeeDetails = function () {
        var hra = 0.2 * this.Basic_Salary;
        var da = 0.1 * this.Basic_Salary;
        return "The ".concat(this.Employee_Name, " gross salary is:").concat(this.Basic_Salary + hra + da);
    };
    return EmpolyeeSalary;
}());
var salary_obj = new EmpolyeeSalary(1, "Vijay", 20000);
console.log(salary_obj);
console.log(salary_obj.employeeDetails());
