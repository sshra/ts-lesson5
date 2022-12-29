
interface Goods2 {
  id: number,
  title: string,
  count?: number,
  readonly price: number;
}

type partialGoods = Partial<Goods2>;

type requiredGoods = Required<Goods2>;

type readonlyGoods = Readonly<Goods2>;

type readonlyRequiredGoods = Readonly<Required<Goods2>>;

type partialRequiredGoods = Partial<Required<Goods2>>;

const title = ['notebook', 'e-book', 'monitor', 'smartphone', 'book', 'pen'] as const;
type categoryTypes2 = typeof title[number]

type recordGoods = Record<categoryTypes2, Goods2>

/*
const listGoods: recordGoods = {
  'book': {
    id: 546546,
    price: 5000,
    title: 'book',
  },
  'notebook': {
    id: 5446,
    price: 100,
    title: 'pen',
  }
}
*/
type omitGoods = Omit<Goods, 'id'>;
type pickGoods = Pick<Goods2, 'title' | 'price'>
const getGoods = ({title, price, count}: omitGoods): Goods2 => {
  return {
    id: Math.floor(Math.random() * 10e8),
    title,
    price,
    count
  };
}

type goods = ReturnType<typeof Math.floor>

const goodsRes = getGoods({
  title: 'barrary',
  price: 200,
  count: 200
});

console.log(goodsRes);

type p = Parameters<typeof getGoods>;

const getGoods2 = ():Promise<Goods[]> => fetch('https://api.com')
.then((response: Response) => response.json());

type P = ReturnType<typeof getGoods2>;
type R = Awaited<ReturnType<typeof getGoods2>>
