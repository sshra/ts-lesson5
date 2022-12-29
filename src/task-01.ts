import { Students, Employees } from "./classes/Users";

const employees:Employees = new Employees()
.add({
  id: 1,
  firstname: 'Leonid',
  surname: 'Golubkov',
  age: 55,
  post: 'executive director',
})
.add({
  id: 2,
  firstname: 'Arkadiy',
  surname: 'Paravozoff',
  age: 35,
  post: 'superviser',
});

const students:Students = new Students()
.add({
  id: 1,
  firstname: 'Petr',
  surname: 'Ivanoff',
  age: 25,
  year: 2020,
  speciality: 'React',
})
.add({
  id: 2,
  firstname: 'Evgeniy',
  surname: 'Arashukoff',
  age: 22,
  year: 2021,
  speciality: 'JS',
})
.add({
  id: 3,
  firstname: 'Petr',
  surname: 'Vorobyoff',
  age: 25,
  year: 2020,
  speciality: 'React',
})
.add({
  id: 4,
  firstname: 'Evgeniy',
  surname: 'Samsonoff',
  age: 20,
  year: 2021,
  speciality: 'JS',
})
.add({
  id: 5,
  firstname: 'Aleksey',
  surname: 'Samsonoff',
  age: 19,
  year: 2022,
  speciality: 'JS',
});


students.remove(2);
console.log(employees.get(2));
console.log(students);
