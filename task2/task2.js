var Student = /** @class */ (function () {
    function Student(name, rollNo, marks) {
        this.name = name;
        this.rollNo = rollNo;
        this._marks = marks;
    }
    Object.defineProperty(Student.prototype, "marks", {
        get: function () {
            return this._marks;
        },
        set: function (newMarks) {
            if (newMarks.length === 3) {
                this._marks = newMarks;
            }
            else {
                throw new Error("Enter a 3 sub marks");
            }
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.getTotal = function () {
        var total = 0;
        for (var i = 0; i < this._marks.length; i++) {
            total += this.marks[i];
        }
        return total;
    };
    Student.prototype.getAverage = function () {
        return this.getTotal() / this._marks.length;
    };
    Student.prototype.getGrade = function () {
        var avg = this.getAverage();
        if (avg >= 90)
            return 'A+';
        if (avg >= 80)
            return 'A';
        if (avg >= 70)
            return 'B';
        if (avg >= 60)
            return 'C';
        if (avg >= 50)
            return 'D';
        return 'F';
    };
    return Student;
}());
var student1 = new Student("John Doe", 101, [85, 78, 92]);
console.log("Name: ".concat(student1.name));
console.log("Roll No: ".concat(student1.rollNo));
console.log("Marks: ".concat(student1.marks));
console.log("Total: ".concat(student1.getTotal()));
console.log("Average: ".concat(student1.getAverage()));
console.log("Grade: ".concat(student1.getGrade()));
student1.marks = [45, 35, 43]; // valid
console.log("\nUpdated Marks: ".concat(student1.marks));
console.log("New Average: ".concat(student1.getAverage()));
console.log("New Grade: ".concat(student1.getGrade()));
