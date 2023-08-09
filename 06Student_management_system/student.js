"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require("prompt-sync");
var Student = /** @class */ (function () {
    function Student(name) {
        this.enrolledCourses = [];
        this.balance = 0;
        this.name = name;
        this.studentID = Student.nextID++;
    }
    Student.prototype.enrollCourse = function (course) {
        this.enrolledCourses.push(course);
        this.balance += 500; // Suppose each course costs \$500
    };
    Student.prototype.viewBalance = function () {
        return this.balance;
    };
    Student.prototype.payTuition = function (amount) {
        this.balance -= amount;
    };
    Student.prototype.showStatus = function () {
        console.log("Name: ".concat(this.name, ", ID: ").concat(this.studentID, ", Courses: ").concat(this.enrolledCourses.join(', '), ", Balance: ").concat(this.balance));
    };
    Student.nextID = 10001;
    return Student;
}());
var StudentManagementSystem = /** @class */ (function () {
    function StudentManagementSystem() {
        this.students = [];
    }
    StudentManagementSystem.prototype.addStudent = function (name) {
        this.students.push(new Student(name));
    };
    StudentManagementSystem.prototype.getStudentByID = function (id) {
        return this.students.find(function (student) { return student['studentID'] === id; });
    };
    StudentManagementSystem.prototype.enrollCourse = function (id, course) {
        var student = this.getStudentByID(id);
        if (student) {
            student.enrollCourse(course);
        }
    };
    StudentManagementSystem.prototype.payTuition = function (id, amount) {
        var student = this.getStudentByID(id);
        if (student) {
            student.payTuition(amount);
        }
    };
    StudentManagementSystem.prototype.showStatus = function () {
        this.students.forEach(function (student) { return student.showStatus(); });
    };
    return StudentManagementSystem;
}());
var system = new StudentManagementSystem();
var choice = prompt({ sigint: true }); // allows CTRL+C EXIT
while (true) {
    console.log('1. Add student\n2. Enroll course\n3. Pay tuition\n4. Show status\n5. Exit');
    var option = choice('Choose an option: ');
    if (option === '1') {
        var name_1 = choice('Enter student name: ');
        system.addStudent(name_1);
    }
    else if (option === '2') {
        var id = Number(choice('Enter student ID: '));
        var course = choice('Enter course name: ');
        system.enrollCourse(id, course);
    }
    else if (option === '3') {
        var id = Number(choice('Enter student ID: '));
        var amount = Number(choice('Enter amount to pay: '));
        system.payTuition(id, amount);
    }
    else if (option === '4') {
        system.showStatus();
    }
    else if (option === '5') {
        break;
    }
}
