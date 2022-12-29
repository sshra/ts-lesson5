import { sortTypes } from "./classes/AbstractUsers";
import { employees, students } from "./data";

console.log(students.sorted('firstname', sortTypes.DESC));
console.log(students.sorted('year'));