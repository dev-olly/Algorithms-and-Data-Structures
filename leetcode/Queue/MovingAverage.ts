class MovingAverage {
  queue: number[];
  index: number;
  tail: number;
  size: number;
  sum: number;
  constructor(size: number) {
    this.queue = new Array(size).fill(null);
    this.index = 0;
    this.tail = -1;
    this.size = size;
    this.sum = 0;
  }

  next(val: number): number {
    this.tail = (this.tail + 1) % this.size;
    if (this.queue[this.tail] !== null) {
      this.sum = this.sum - this.queue[this.tail];
    }
    this.queue[this.tail] = val;
    this.sum += val;
    if (this.index < this.size) {
      this.index++;
    }

    return this.sum / this.index;
  }
}
