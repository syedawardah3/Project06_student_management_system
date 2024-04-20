#! /usr/bin/env node
class School {
    name;
    students = [];
    teachers = [];
    addStudent(stdObj) {
        this.students.push(stdObj);
    }
    addTeacher(tedObj) {
        this.teachers.push(tedObj);
    }
    constructor(name) {
        this.name = name;
    }
}
class Student {
    name;
    age;
    schoolName;
    constructor(name, age, schoolName) {
        this.name = name;
        this.age = age;
        this.schoolName = schoolName;
    }
}
class Teacher1 {
    name;
    age;
    schoolName;
    constructor(name, age, schoolName) {
        this.name = name;
        this.age = age;
        this.schoolName = schoolName;
    }
}
class Teacher extends Student {
}
let school1 = new School("Premier School");
let school2 = new School("Happy Palace");
let school3 = new School("Karachi Academy");
// student
let s1 = new Student("Sunny", 25, school1.name);
let s2 = new Student("Ali", 10, school2.name);
let s3 = new Student("Raza", 45, school3.name);
// teacher
let t1 = new Teacher("Asma", 33, school1.name);
let t2 = new Teacher("Aslam", 30, school2.name);
let t3 = new Teacher("Amir", 40, school3.name);
// Students
school1.addStudent(s1);
school2.addStudent(s2);
school3.addStudent(s3);
// teachers
school1.addTeacher(t1);
school2.addTeacher(t2);
school3.addTeacher(t3);
console.log(school1);
console.log(school2);
console.log(school3);
export {};
