class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (!this.items[pos]) {
      throw new Error("OutofBounds"); //Are all error messages initiated in this way?
    }

    return this.items[pos];
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }

    return Math.max(...this.items); //When exactly we should use ... before an array again?
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }

    return Math.min(...this.items);
  }

  sum() {
    if (this.items.length === 0) {
      return 0;
    }

    return this.items.reduce((a, v) => a + v);
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }

    return this.sum() / this.items.length;
    //return this.items.reduce((a, v) => a + v, 0) / this.items.length          //Why is this giving me an error? Is it the double use of this.items?
  }
}

module.exports = SortedList;
