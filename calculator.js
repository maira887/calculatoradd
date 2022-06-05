class calculator {
  constructor(num1 = 30, num2 = 20) {
    this.num1 = 30;
    this.num2 = 20;
  }
  Add() {
    console.log("Addition"),
    (this.add = this.num1 + this.num2);
    console.log(this.add);
    return {
      num1: this.num1,
      num2: this.num2,
      result: this.num1 + this.num2,
      type: "Add",
  
    };
  }
  

  Sub() {
    console.log("subtraction");
    this.sub = this.num1 - this.num2;
    console.log(this.sub);
       return {
         num1: this.num1,
         num2: this.num2,
         result: this.num1 - this.num2,
         type: "Sub",
       };
  }
  

  Multiply() {
    console.log("Multiplication");
    this.mul = this.num1 * this.num2;
    console.log(this.mul);
  
     return {
      num1: this.num1,
      num2: this.num2,
      result: this.num1 * this.num2,
      type: "mul",
  
    };
  }

  Divide() {
    console.log("divide");
    this.div = this.num1 / this.num2;
    console.log(this.div);
     return {
      num1: this.num1,
      num2: this.num2,
      result: this.num1 /this.num2,
      type: "div",
  
    };
  }
  }

class Calculation extends calculator {
  constructor() {
    super();
    this.myCalculation = [];
  }
  doAdd() {
    this.myCalculation.push(this.Add());
  }
  doSub() {
    this.myCalculation.push(this.Sub());
  }
  doMultiply() {
    this.myCalculation.push(this.Multiply());
  }
  doDivide() {
    this.myCalculation.push(this.Divide());
  }
}
const calculation = new Calculation();
add = calculation.doAdd();
sub = calculation.doSub()
mul = calculation.doMultiply();
div = calculation.doDivide();
getAllCalculation = calculation.myCalculation;
console.log(getAllCalculation);

