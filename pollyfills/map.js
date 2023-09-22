const array = [1, 2, 3, 4, 5];

const map = array.map((item, currentIndex, array) => {
  console.log(item);
  return item;
});
console.log(map);

Array.prototype.myMap = function (cb) {
  const tempArray = [];
  for (let i = 0; i < this.length; ++i) {
    tempArray.push(cb(this[i], i, this));
  }
  return tempArray;
};

const map2 = array.myMap((item, currentIndex, array) => {
  console.log(item);
  return item;
});
console.log(map2);
