const array = [0, 2, 3, 4, 5];
// const initialValue = 0;
const res1 = array.reduce(
  (accumulator, currentValue, currentIndex, array) => {
    return accumulator + currentValue;
  }
  // initialValue
);
console.log(res1);

Array.prototype.myReduce = function (cb, initialValue) {
  var accumulator = initialValue;
  for (let i = 0; i < this.length; ++i) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};

const res2 = array.myReduce(
  (accumulator, currentValue, currentIndex, array) => {
    return accumulator + currentValue;
  }
  //   initialValue
);
console.log(res2);
