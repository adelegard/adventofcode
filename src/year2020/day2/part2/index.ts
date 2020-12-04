import getInput from "../input";

const inputData = getInput();

console.log("calculating sum problem...");

const isCharAtIndex = (indexMatch: number, char: string, fullStr: string): boolean => {
  return fullStr[indexMatch - 1] === char;
};

const isValid = (policyAndPw: string): boolean => {
  const [indexes, letterColon, pw] = policyAndPw.split(' ');
  const [indexLowStr, indexHighStr] = indexes.split("-");
  const indexLow = parseInt(indexLowStr, 10);
  const indexHigh = parseInt(indexHighStr, 10);
  const letter = letterColon.replace(':', '');
  const lowMatch = isCharAtIndex(indexLow, letter, pw);
  const highMatch = isCharAtIndex(indexHigh, letter, pw);
  const isMatchValid = !(lowMatch && highMatch) && (lowMatch || highMatch);
  console.log(policyAndPw, isMatchValid);
  return isMatchValid;
};

const findNumValid = (): number => {
  let numValid = 0;
  for (const policyAndPw of inputData) {
    const isSingleValid = isValid(policyAndPw);
    if (isSingleValid) {
      numValid++;
    }
  }
  return numValid;
};

const numValid = findNumValid();

console.log('numValid', numValid);

