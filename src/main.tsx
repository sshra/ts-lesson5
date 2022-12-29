{
  const log = <T,>(val: T): T => {
    console.log(val);
    return val;
  }
  log<string>('строка');
  log(5);

  function log2<T>(val: T): T {
    console.log(val);
    return val;
  }

  log2<string>('строка');
  log2<boolean>(true);
}