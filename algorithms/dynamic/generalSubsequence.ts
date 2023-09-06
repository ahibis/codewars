import { times, maxBy } from "lodash";
type cacheObj<T> = { len: number; objs: T[] };

function generalSubsequence<T>(item1: T[], item2: T[]) {
  const defaultCache = () => ({ len: 0, objs: [] })
  const size = item1.length;
  const cache1: cacheObj<T>[] = times(size, defaultCache);
  const cache2: cacheObj<T>[] = times(size, defaultCache);

  for (let obj2 of item2) {
    item1.forEach((obj1, i) => {
      if (obj1 == obj2) {
        if (i == 0) {
          cache2[i] = { len: 1, objs: [obj1] };
        }
        const prevObj = cache1[i - 1];
        cache2[i] = { len: prevObj.len + 1, objs: [...prevObj.objs, obj1] };
        return;
      }
      cache2[i] = maxBy([cache1[i], cache2[i-1] || defaultCache()],({len})=>len) || defaultCache()
    });

    Object.assign(cache1, cache2);
  }
  return cache1[size - 1].objs;
}
console.log(generalSubsequence([..."постройкабхуубй"], [..."строкахуй"]));
