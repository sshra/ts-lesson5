/*
abstract class Person {
  private static lastID: number = 0;
  public id: number;
  constructor(
    public firstname: string,
    public surname: string,
    public age: number,
    public year: number,
    public speciality: string,
    public post: string
  ) {
    this.id = Person.getNextID();
  }
  private static getNextID(): number {
    return ++Person.lastID;
  }
}
*/

interface Person {
  id: number;
  firstname: string,
  surname: string,
  age: number,
  year: number,
  speciality: string,
  post: string
}

export type User = Omit<Person, 'year' | 'speciality' | 'post'>
export type Student = Omit<Person, 'post'>
export type Employee = Omit<Person, 'year' | 'speciality'>

export type allUsers = User | Student | Employee;