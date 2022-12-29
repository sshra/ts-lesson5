const log = <T,B>(val: T, val2: B): T => {
  console.log(val);
  console.log(val2);
  return val;
}


log<string, number>('строка', 10);
log(5, 10);

function log2<T>(val: T): T {
  console.log(val);
  return val;
}

log2<string>('строка');
log2<boolean>(true);

const logFoo = (val: number | string): number | string => {
  console.log(val);
  return val;
}

const arr: Array<string> = ['a', 'b', 'c'];

type filterArray = <T>(arr: T[], exclude: T[]) => T[];

const filterArr:filterArray = (arr, exclude) =>
  arr.filter(item => !exclude.includes(item));

const result = filterArr<number>([1,2,3,4,5], [2,4]);
console.log(result);

interface HttpResponseError {
  success: false;
  error: string;
}

interface HttpResponseSuccess<T> {
  success: true;
  data: T
}

type HttpResponse<T> = HttpResponseError | HttpResponseSuccess<T>;

interface product {
  id: number,
  title: string,
  count: number
}

interface person {
  name: string,
  post: string
}

const response: HttpResponse<product[]> = {
  success: true,
  data: [{
    id: 21,
    title: 'Cabbotage',
    count: 30,
  },{
    id: 11,
    title: 'Carrot',
    count: 50,
  }]
}

const response2: HttpResponse<person[]> = {
  success: true,
  data: [
    {
      name: 'Ivan',
      post: 'StoreKeeper'
    },
    {
      name: 'Petr',
      post: 'NightGuard'
    },
  ]
}

const response3: HttpResponse<string> = {
  success: true,
  data: 'Order deployed, #23132'
}
