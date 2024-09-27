// Traversing-Downwards
// 1. QuerySelector/QueryselectorAll()
/*

const studentList = document.querySelector(".student-list");
const studentA = studentList.querySelector(".student-a");

// 2.Children

const studentList = document.querySelector(".student-list");
const studentA = studentList.children[0];
const studentB = studentList.children[1];
*/

//Traversing-Upwards 

// 1.parentElement 
/*
const studentA = document.querySelector("li");
const studntList = studentA.parentElement;
*/

//Traversing-Sideways 
//1.nextElementSibling 
/*
const studentA = document.querySelector("li");
const studentB = studentA.nextElementSibling;
const studentC = studentB.nextElementSibling;

// 2.previousElementSibling
const studentC = document.querySelectorAll("li")[2];
const studentB = studentC.previousElementSibling;
*/

// 3.parentElement + Children + index 

/*

const studentA = document.querySelector("li");
const studentList = studentA.parentElement;
const studentB = studentList.children[1];
const studentC = studentList.children[2];
*/
