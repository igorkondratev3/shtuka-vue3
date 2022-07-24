export function calculateCoordinatesForLine(
  areaForLinesBetweenWords,
  beginPoint,
  endPoint
) {
  let coordinatesAreaForLinesBetweenWords =
    areaForLinesBetweenWords.value.getBoundingClientRect();
  return {
    x1:
      beginPoint.value.getBoundingClientRect().x -
      coordinatesAreaForLinesBetweenWords.x,
    y1: 0,
    x2:
      endPoint.value.getBoundingClientRect().x -
      coordinatesAreaForLinesBetweenWords.x,
    y2: coordinatesAreaForLinesBetweenWords.height,
  };
}

export function drawLinesBetweenWords(areaForLines, coordinates) {
  areaForLines.beginPath();
  areaForLines.moveTo(coordinates.x1, coordinates.y1);
  areaForLines.lineTo(coordinates.x2, coordinates.y2);
  areaForLines.stroke();
}

export function setWidthAreaForLinesBetweenWords(
  AreaForLinesBetweenWords,
  leftPoint,
  rightPoint
) {
  AreaForLinesBetweenWords.value.width =
    rightPoint.value.getBoundingClientRect().right -
    leftPoint.value.getBoundingClientRect().x;
}
