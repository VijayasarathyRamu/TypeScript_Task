interface StudentDetails {
    name: string;
    rollNo: number;
    marks: number[];
    getTotal(): number;
    getAverage(): number;
    getGrade(): string;
}
 
class Student implements StudentDetails {
    name: string;
    rollNo: number;
    private _marks: number[];
 
    constructor(name: string, rollNo: number, marks: number[]) {
        this.name = name;
        this.rollNo = rollNo;
        this._marks = marks;
    }
 
    get marks(): number[] {
        return this._marks;
    }
 
    set marks(newMarks: number[]) {
        if (newMarks.length === 3) {
            this._marks = newMarks;
        } else {
            throw new Error("Enter a 3 sub marks");
        }
    }
 
    getTotal(): number {
        let total = 0;
        for(let i=0;i<this._marks.length;i++){
            total += this.marks[i];
        }
        return total;
    }
 
    getAverage(): number {
        return this.getTotal() / this._marks.length;
    }
 
    getGrade(): string {
        const avg = this.getAverage();
        if (avg >= 90) return 'A+';
        if (avg >= 80) return 'A';
        if (avg >= 70) return 'B';
        if (avg >= 60) return 'C';
        if (avg >= 50) return 'D';
        return 'F';
    }
}
 
const student1 = new Student("vijay", 101, [85, 78, 92]);
 
console.log(`Name: ${student1.name}`);
console.log(`Roll No: ${student1.rollNo}`);
console.log(`Marks: ${student1.marks}`);
console.log(`Total: ${student1.getTotal()}`);
console.log(`Average: ${student1.getAverage()}`);
console.log(`Grade: ${student1.getGrade()}`);
 
student1.marks = [95, 95, 93]; // valid 
console.log(`\nUpdated Marks: ${student1.marks}`);
console.log(`New Average: ${student1.getAverage()}`);
console.log(`New Grade: ${student1.getGrade()}`);