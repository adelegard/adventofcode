import getInput from "../input";

const inputData = getInput();

console.log("calculating sum problem...");

const countInStr = (match: string, fullStr: string): number => {
  let count = 0;
  for (
    let i = 0;
    i < fullStr.length;
    count += +(match === fullStr[i++])
  );
  return count;
};

const isValid = (policyAndPw: string): boolean => {
  const [range, letterColon, pw] = policyAndPw.split(' ');
  const [rangeLowStr, rangeHighStr] = range.split('-');
  const rangeLow = parseInt(rangeLowStr, 10);
  const rangeHigh = parseInt(rangeHighStr, 10);
  const letter = letterColon.replace(':', '');
  const numMatches = countInStr(letter, pw);
  return rangeLow <= numMatches && numMatches <= rangeHigh;
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

