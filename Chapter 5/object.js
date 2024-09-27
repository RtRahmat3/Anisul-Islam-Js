// How to create an Object 
// How to print the value of an Object 
// Adding a constructor
// Adding Function inside constractor 


function Student (name , age, cgpa, lang){
  this.name = name ;
  this.age = age; 
  this.cgpa = cgpa ;
  this.lang = lang ;

  this.display = function () {
    console.log(this.name);
    console.log(this.age);
    console.log(this.cgpa);
    console.log(this.lang);
  }
}

var Student1 = new Student ("Rahmat Ullah" , 22, 3.15 , ["Bangla", "Hindi" , "English"]);
var Student2 = new Student ("Kamrul Hasan" , 20, 3.85 , ["Bangla", "Hindi" , "English"]);
var Student3 = new Student ("Rayhan Istique" , 21, 3.63 , ["Bangla", "Hindi" , "English"]);
var Student4 = new Student ("Tanim Hasan" , 22, 3.07 , ["Bangla", "Hindi" , "English"]);

// console.log(Student1 , Student2 , Student3, Student4)
// console.log(Student1.lang )
Student1.display();
Student2.display();
Student3.display();