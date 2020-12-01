import getInput from "./input";

const inputData = getInput();

console.log("calculating sum problem...");

const isSumMatch = (a: number, b: number, c: number): boolean => {
  return a + b + c === 2020;
};

const findMatch = (): [number, number, number] => {
  for (const numA of inputData) {
    for (const numB of inputData) {
      for (const numC of inputData) {
        if (isSumMatch(numA, numB, numC)) {
          return [numA, numB, numC];
        }
      }
    }
  }
};

const [matchA, matchB, matchC] = findMatch();

const multiplied = matchA * matchB * matchC;
console.log("multiplied", multiplied);
