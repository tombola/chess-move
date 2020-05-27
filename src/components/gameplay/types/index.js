import { number, shape, string } from "prop-types";

function isFunction(functionToCheck) {
  return (
    functionToCheck && {}.toString.call(functionToCheck) === "[object Function]"
  );
}

export const positionType = shape({
  column: string.isRequired,
  row: number.isRequired,
});

export const moveType = shape({
  from: positionType.isRequired,
  to: positionType.isRequired,
});

export const chessPieceType = shape({
  side: string.isRequired,
  piece: string.isRequired,
});

// Dispatch function passed from a reducer hook on another component
export function dispatchType(props, propName, componentName) {
  if (!isFunction(props[propName])) {
    return new Error(
      "Invalid prop `" +
        propName +
        "` supplied to" +
        " `" +
        componentName +
        "`. Validation failed."
    );
  }
}
