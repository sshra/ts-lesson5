import { Person } from "./contactUsers";
export const persons: Person[] = [
  {
    type: 'admin',
    name: 'Иван Петров',
    age: 27,
    role: 'Administrator',
  },
  {
    type: 'user',
    name: 'Марат Aляуддинов',
    age: 20,
    group: 'музыкант',
  },
  {
    type: 'user',
    name: 'Екатерина Попова',
    age: 24,
    group: 'дизайнер сайтов'
  },
  {
    type: 'admin',
    name: 'Аркадий Паравозов',
    age: 55,
    role: 'Системный администратор'
  },
  {
    type: 'user',
    name: 'Даня Поперечный',
    age: 28,
    group: 'Комик'
  },
  {
    type: 'admin',
    name: 'Олег',
    age: 44,
    role: 'Модератор'
  }
];
