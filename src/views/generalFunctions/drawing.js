export const drawPlus = (plus) => {
  plus.beginPath();
  plus.lineWidth = 0.5;
  plus.moveTo(13, 5);
  plus.lineTo(21, 5);
  plus.lineTo(21, 12);
  plus.lineTo(29, 12);
  plus.lineTo(29, 19);
  plus.lineTo(21, 19);
  plus.lineTo(21, 26);
  plus.lineTo(13, 26);
  plus.lineTo(13, 19);
  plus.lineTo(5, 19);
  plus.lineTo(5, 12);
  plus.lineTo(13, 12);
  plus.lineTo(13, 5);
  plus.strokeStyle = 'black';
  plus.fillStyle = '#CAF2FE';
  plus.fill();
  plus.stroke();
}