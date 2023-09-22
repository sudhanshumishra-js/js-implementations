const obj = {
  name: "sudhanshu",
};

function returnName(...args) {
  return (
    "My name is " +
    this.name +
    " and full name is " +
    args.toString().replace(/,/g, " ")
  );
}
console.log(returnName.apply(obj, ["sudhnashu", "mishra"]));

Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error(this + " not callable");
  }
  context.fn = this;
  return context.fn(...args);
};

console.log(returnName.myApply(obj, ["sudhnashu", "mishra"]));
