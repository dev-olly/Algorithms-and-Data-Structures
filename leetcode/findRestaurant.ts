function findRestaurant(list1: string[], list2: string[]): string[] {
  const list = [];
  const hashmap = new Map<string, number>();
  let min = Number.MAX_SAFE_INTEGER;

  for (let i: number = 0; i < list1.length; i++) {
    hashmap.set(list1[i], i);
  }

  for (let i: number = 0; i < list2.length; i++) {
    if (hashmap.has(list2[i])) {
      const newIndex = hashmap.get(list2[i]) + i;
      if (newIndex < min) {
        min = newIndex;
        list.length = 0;
        list.push(list2[i]);
      } else if (newIndex === min) {
        list.push(list2[i]);
      }
    }
  }

  return list;
}

const list1 = ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'];
const list2 = [
  'Piatti',
  'The Grill at Torrey Pines',
  'Hungry Hunter Steakhouse',
  'Shogun',
];

console.log(findRestaurant(list1, list2));
