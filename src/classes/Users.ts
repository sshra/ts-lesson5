import { AbstractUsers } from "./AbstractUsers";
import { Student, Employee } from './User';

export class Students extends AbstractUsers<Student> {};
export class Employees extends AbstractUsers<Employee> {};