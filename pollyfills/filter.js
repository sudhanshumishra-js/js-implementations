Array.prototype.myFilter = function (cb) {
  const tempArray = [];
  for (let i = 0; i < this.length; ++i) {
    if (cb(this[i], i, this)) {
      tempArray.push(this[i]);
    }
  }
  return tempArray;
};

const array = [1, 2, 3, 4, 5];
const res1 = array.filter((item, index, array) => {
  return item % 2 == 0;
});
console.log(res1);
const res2 = array.myFilter((item, index, array) => {
  return item % 2 == 0;
});

console.log(res2);
