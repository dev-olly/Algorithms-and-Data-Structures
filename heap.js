class MaxHeap {
  constructor(values) {
    this.values = values;
  }
  parent(index) {
    return Math.floor((index - 1) / 2);
  }
  leftChild(index) {
    return index * 2 + 1;
  }
  rightChild(index) {
    return index * 2 + 2;
  }
  isLeaf(index) {
    return (
      index >= Math.floor(this.values.length / 2) &&
      index <= this.values.length - 1
    );
  }
  swap(index1, index2) {
    const temp = this.values[index1];
    this.values[index1] = this.values[index2];
    this.values[index2] = temp;
  }
  add(element) {
    this.values.push(element);
    this.heapifyUp(this.values.length - 1);
  }
  heapifyUp(index) {
    let currentIndex = index;
    let parentIndex = this.parent(currentIndex);

    while (
      currentIndex > 0 &&
      this.values[currentIndex] > this.values[parentIndex]
    ) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = this.parent(parentIndex);
    }

    console.log(this.values);
  }
}

const nums = [40, 30, 15, 10, 20];

const maxHeap = new MaxHeap(nums);
maxHeap.add(60);

// console.log(maxHeap);

// console.log(createHeap(nums));
