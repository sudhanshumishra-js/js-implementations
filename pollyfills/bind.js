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

const bindVar = returnName.bind(obj);
console.log(bindVar(["sudhanshu", "mishra"]));

Function.prototype.myBind = function (context = {}, ...args) {};
