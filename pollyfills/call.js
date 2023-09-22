const obj = {
  name: "sudhanshu",
};

function returnName(args) {
  return this.name + " args " + args;
}
console.log(returnName.call(obj));

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + " not callable");
  }
  context.fn = this;
  return context.fn(...args);
};

console.log(returnName.myCall(obj, "arguments"));
