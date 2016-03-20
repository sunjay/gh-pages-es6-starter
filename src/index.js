// Test Script of ES6 syntax

const {index} = require('../scss/index.scss');

const arrowFunction = () => {
  return foo();
};

function foo(bar = {a: 3, b: {c: '4', d: '42'}}) {
  return {
    ...bar,
    q: 3,
  };
}

let obj = {
  x: 3,
  rest(...args) {
    return [1, ...args, 3, 4];
  },
};

obj = 4;

class FancyClass {
  static ORG = 3;
}

class EvenFancierClass extends FancyClass {
  get awesomeLevel() {
    return 'over 9000';
  }

  set awesomeLevel(value) {
    throw new Error(`Nice try! Can't set to ${value} since it doesn't get more awesome than this!`);
  }

  method() {
    const {a, b} = {a: 3, b: 4};
    return {a, b, c: [a, b]};
  }

  *generator() {
    // imagine a world without loops...
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
  }

  render() {
    return (
      <div className={index}>Hello, World! {this.awesomeLevel}</div>
    );
  }
}

