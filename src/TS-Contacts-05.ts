import { User, Admin, Person, isUser, isAdmin } from "./classes/contactUsers";
import { persons } from "./classes/contactData";

const logPerson = (person: Person) => {
  let information = '';

  if (isAdmin(person)) {
    information = person.role;
  }

  if (isUser(person)) {
    information = person.group;
  }

  console.log(` - ${person.name}, ${person.age}, ${information}`);
}

const filterUsers = <T extends Person, K extends keyof T>(persons: T[], criteria: Partial<T>): T[] =>
  persons.filter((user: T) => {
    const criteriaKeys = Object.keys(criteria);
    return criteriaKeys.every((fieldName: string) => user[fieldName as K] === criteria[fieldName as K]);
  });

console.log('Users of age 24:');
console.log(persons);

filterUsers(
  persons,
  {
      name: 'Аркадий Паравозов',
      age: 55
  }
).forEach(logPerson);