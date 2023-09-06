function getChain<T>(
  objects: T[],
  predicate: (o1: T, o2: T) => boolean,
  take:T[] = []
):T[] {
  if(!objects.length) return take;
  for (let i = 0; i < objects.length; i += 1) {
    const val = objects[i];
    const last = take.at(-1);
    if (last != undefined && !predicate(last, val)) continue;
    const newObjs = [...objects]
    newObjs.splice(i,1)
    const newTake = [...take,val]
    const res = getChain(newObjs,predicate,newTake);
    if(res.length) return res
  }
  return [];
}

console.log(getChain([[7,3],[4,6],[5,3],[1,0],[1,2],[4,6]],
  (a,b)=>a[1]+b[0]==7))