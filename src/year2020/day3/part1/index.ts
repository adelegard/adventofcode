import inputStrings from "../input";

console.log("calculating tree sledding problem...");

interface Position {
  row: number;
  column: number;
}

const isDone = ({ row }: Position): boolean => {
  return inputStrings.length - 1 < row;
};

const getInputValue = ({ row, column }: Position): string => {
  return inputStrings[row][column];
};

const isTreeCollision = (position: Position): boolean => {
  return getInputValue(position) === "#";
};

const replacePositionWithChar = (
  debugInput: string[],
  position: Position,
  char: string
) => {
  if (Boolean(debugInput[position.row])) {
    debugInput[position.row] =
      debugInput[position.row].substring(0, position.column) +
      char +
      debugInput[position.row].substring(position.column + 1);
  } else {
    console.log('position not valid row: ', position.row)
  }
};

interface Collisions {
  [row: number]: number;
}

interface Move {
  right: number;
  down: number;
}

const findTreeCollisions = ({right, down}: Move): Collisions => {
  let treeCollisions: Collisions = {};
  const position: Position = {
    row: 0,
    column: 0,
  };
  const debugInput = [...inputStrings];
  while (!isDone(position)) {
    let positionChar = null;
    if (isTreeCollision(position)) {
      treeCollisions[position.row] = position.column;
      positionChar = "O";
    } else {
      positionChar = "*";
    }
    replacePositionWithChar(debugInput, position, positionChar);
    const canStayOnSameRow = Boolean(
      inputStrings[position.row][position.column + right]
    );
    if (canStayOnSameRow) {
      position.column += right;
    } else {
      position.column =
        position.column + right - inputStrings[position.row].length;
    }
    position.row += down;
  }
  // debugInput.map((line, i) => {
  //   console.log(`${line} ${i}`);
  // })
  return treeCollisions;
};

const moves: Move[] = [
  {right: 1, down: 1},
  {right: 3, down: 1},
  {right: 5, down: 1},
  {right: 7, down: 1},
  {right: 1, down: 2},
];

const allCollisions = moves.map(findTreeCollisions);

const multiplied = allCollisions.reduce((prev, curr) => {
  const count = Object.keys(curr).length;
  console.log('count', count);
  
  return prev * count;
}, 1);

console.log('multiplied', multiplied);
