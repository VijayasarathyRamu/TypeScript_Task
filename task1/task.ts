// Write a TypeScript program to create a class named EmployeeSalary that takes the following details of an employee:
// Employee ID
// Employee Name
// Basic Salary
// The program should calculate:
// HRA (20% of Basic Salary)
// DA (10% of Basic Salary)
// Gross Salary = Basic + HRA + DA
// Then display all the details using a method.
class EmpolyeeSalary{
    Employee_ID:number;
    Employee_Name:string;
    Basic_Salary:number;

    constructor(ID: number,E_Name: string,Salary: number){
        this.Employee_ID = ID;
        this.Employee_Name = E_Name;
        this.Basic_Salary = Salary;

    }
    employeeDetails(){
        let hra = 0.2*this.Basic_Salary;
        let da = 0.1*this.Basic_Salary;
        return `The ${this.Employee_Name} gross salary is:${this.Basic_Salary+hra+da}`
    }
}
let salary_obj = new EmpolyeeSalary(1,"Vijay",20000);
console.log(salary_obj);
console.log(salary_obj.employeeDetails());