
const categories = ['notebook', 'e-book', 'monitor', 'smartphone'] as const;
type categoryTypes = typeof categories[number]

interface Goods {
  title: string,
  count: number,
  price: number
}

type KeysOfGoods = keyof Goods;

const filter = <T, K extends keyof T>(arr: T[], key: K, value: T[K]) => {
  return arr.filter((item:T) => item[key] === value);
}

abstract class Cart<T extends Goods> {
  public goods: T[] = [];
  public add(item: T): void {
    this.goods.push(item);
  }

  public get(title: string): T | null {
    return this.goods.find(item => item.title === title) ?? null;
  }

  public get totalPrice(): number {
    return this.goods.reduce((acc, item) => acc + item.price * item.count, 0)
  }
}

interface TechGoods {
  title: string,
  count: number,
  price: number;
  type: categoryTypes;
  description: string;
}

class TechCart extends Cart<TechGoods> {}

const techCart = new TechCart();
techCart.add(
  {
    title: 'Display BenQ BL2783',
    price: 30_000,
    count: 1,
    description: '',
    type: 'monitor'
  }
);
techCart.add(
  {
    title: 'Notebook HP',
    price: 50_000,
    count: 2,
    description: '',
    type: 'notebook'
  }
);

const res = filter(techCart.goods, 'type', 'monitor');
console.log(res);

const goods: TechCart['goods'][number] = {
  title: 'Display BenQ BL2783',
  price: 30_000,
  count: 1,
  description: '',
  type: 'monitor'
}

const goods2: typeof goods = {
  title: 'Notebook HP',
  price: 50_000,
  count: 2,
  description: '',
  type: 'notebook'
}

type keysOfGoods = keyof typeof goods;

const keys: keysOfGoods = 'type';


