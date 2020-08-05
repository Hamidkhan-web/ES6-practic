class Student{
    constructor(sId, sName){
        this.School = "Bansho highschool"
        this.id = sId
        this.name = sName;
       
    }

}
const Student1 = new Student(12, "saddam");
const Student2 = new Student(22, "mahi");
const Student3 = new Student(32, "khadam");
const Student4 = new Student(43, "khadiza");
console.log(Student1.name, Student2.id, Student3, Student4);   