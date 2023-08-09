import * as prompt from 'prompt-sync';




class Student {
    private static nextID: number = 10001; 
  
    private studentID: number;
    private name: string;
    private enrolledCourses: string[] = [];
    private balance: number = 0;
  
    constructor(name: string) {
      this.name = name;
      this.studentID = Student.nextID++;
    }
  
    enrollCourse(course: string): void {
      this.enrolledCourses.push(course);
      this.balance += 500; // Suppose each course costs \$500
    }
  
    viewBalance(): number {
      return this.balance;
    }
  
    payTuition(amount: number): void {
      this.balance -= amount;
    }
  
    showStatus(): void {
      console.log(
        `Name: ${this.name}, ID: ${this.studentID}, Courses: ${this.enrolledCourses.join(', ')}, Balance: ${this.balance}`
      );
    }
  }

  

  class StudentManagementSystem {
    private students: Student[] = [];
  
    addStudent(name: string): void {
      this.students.push(new Student(name));
    }
  
    getStudentByID(id: number): Student | undefined {
      return this.students.find((student) => student['studentID'] === id);
    }
  
    enrollCourse(id: number, course: string): void {
      let student = this.getStudentByID(id);
      if (student) {
        student.enrollCourse(course);
      }
    }
  
    payTuition(id: number, amount: number): void {
      let student = this.getStudentByID(id);
      if (student) {
        student.payTuition(amount);
      }
    }
  
    showStatus(): void {
      this.students.forEach((student) => student.showStatus());
    }
  }

  

const system = new StudentManagementSystem();
const choice = prompt({sigint: true}); // allows CTRL+C EXIT

while (true) {
  console.log('1. Add student\n2. Enroll course\n3. Pay tuition\n4. Show status\n5. Exit');
  const option = choice('Choose an option: ');
  
  if (option === '1') {
    const name = choice('Enter student name: ');
    system.addStudent(name);
  } else if (option === '2') {
    const id = Number(choice('Enter student ID: '));
    const course = choice('Enter course name: ');
    system.enrollCourse(id, course);
  } else if (option === '3') {
    const id = Number(choice('Enter student ID: '));
    const amount = Number(choice('Enter amount to pay: '));
    system.payTuition(id, amount);
  } else if (option === '4') {
    system.showStatus();
  } else if (option === '5') {
    break;
  }
}
