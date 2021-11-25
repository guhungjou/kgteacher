export function removeArrayIndex(array: any, index: number) {
  const t = [];
  for (let i = 0; i < array.length; i++) {
    if (i === index) {
      continue;
    }
    t.push(array[i]);
  }
  return t;
}
