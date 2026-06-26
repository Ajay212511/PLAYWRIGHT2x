class student{

    static name="Ajay Kumar Jaiswal";
    static Batch="Playwright2x";
    age;
    name_student;
    phoneno;
    constructor(age,name_student,phoneno){
        this.age=age;
        this.name_student=name_student;
        this.phoneno=phoneno;
    }
}

let st1=new student ("30","ram","902827872847");
let st2=new student ("29","shyam","902823872847");
console.log(st1.age);
console.log(st2.age);
console.log(student.name);