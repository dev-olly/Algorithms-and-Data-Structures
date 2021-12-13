function sockMerchant(n, ar) {
    // Write your code here
    const uniqueItems = ar.filter(onlyUnique)
    const itemsCount = []

    uniqueItems.forEach(element => {
        itemsCount.push(ar.filter(item => item === element).length)
    });
    let numOfPairs = 0
    itemsCount.forEach(item => numOfPairs = numOfPairs + Math.floor(item /2) )

    return numOfPairs
    
    
}

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

const ar = [1, 2, 1, 2, 1, 3, 2]
const n = 7

sockMerchant(n, ar)