export const drawLighting = (lighting, x, y) => {
  x = x + 117;
  y = y + 68;
  lighting.beginPath();
  lighting.moveTo(x + 43, y + 67);
  lighting.lineWidth = 2;
  lighting.lineJoin = 'round';
  lighting.lineCap = 'round';
  lighting.lineTo(x + 48, y + 72);
  lighting.lineTo(x + 53, y + 82);
  lighting.lineTo(x + 56, y + 81);
  lighting.lineTo(x + 63, y + 85);
  lighting.lineTo(x + 67, y + 91);
  lighting.lineTo(x + 73, y + 87);
  lighting.lineTo(x + 78, y + 87);
  lighting.lineTo(x + 83, y + 97);
  lighting.lineTo(x + 78, y + 102);
  lighting.lineTo(x + 93, y + 107);
  lighting.lineTo(x + 103, y + 127);
  lighting.strokeStyle = '#BEDFFE';
  lighting.stroke(); /*Правая часть молнии сверху*/

  lighting.beginPath();
  lighting.moveTo(x + 23, y + 112);
  lighting.lineWidth = 2;
  lighting.lineJoin = 'round';
  lighting.lineCap = 'round';
  lighting.lineTo(x + 13, y + 122);
  lighting.lineTo(x + 11, y + 129);
  lighting.lineTo(x + 3, y + 133);
  lighting.lineTo(x - 7, y + 131);
  lighting.lineTo(x - 17, y + 137);
  lighting.lineTo(x - 15, y + 147);
  lighting.lineTo(x - 27, y + 152);
  lighting.lineTo(x - 32, y + 150);
  lighting.lineTo(x - 42, y + 155);
  lighting.lineTo(x - 47, y + 172);
  lighting.strokeStyle = '#BEDFFE';
  lighting.stroke(); /*Левая часть молнии середина*/
  lighting.beginPath();
  lighting.moveTo(x - 17, y + 137);
  lighting.lineWidth = 2;
  lighting.lineJoin = 'round';
  lighting.lineCap = 'round';
  lighting.lineTo(x - 27, y + 132);
  lighting.lineTo(x - 37, y + 137);
  lighting.lineTo(x - 37, y + 132);
  lighting.lineTo(x - 47, y + 130);
  lighting.lineTo(x - 57, y + 135);
  lighting.lineTo(x - 67, y + 127);
  lighting.strokeStyle = '#BEDFFE';
  lighting.stroke(); /*Левая часть молнии сверху*/
  lighting.beginPath();
  lighting.moveTo(x - 27, y + 152);
  lighting.lineWidth = 2;
  lighting.lineJoin = 'round';
  lighting.lineCap = 'round';
  lighting.lineTo(x - 22, y + 167);
  lighting.lineTo(x - 12, y + 172);
  lighting.lineTo(x - 15, y + 182);
  lighting.lineTo(x - 22, y + 192);
  lighting.lineTo(x - 27, y + 192);
  lighting.lineTo(x - 32, y + 207);
  lighting.lineTo(x - 42, y + 212);
  lighting.strokeStyle = '#BEDFFE';
  lighting.stroke(); /*Левая часть молнии снизу*/
  lighting.beginPath();
  lighting.moveTo(x + 26, y + 209);
  lighting.lineWidth = 2;
  lighting.lineJoin = 'round';
  lighting.lineCap = 'round';
  lighting.lineTo(x + 38, y + 215);
  lighting.lineTo(x + 48, y + 212);
  lighting.lineTo(x + 48, y + 219);
  lighting.lineTo(x + 58, y + 217);
  lighting.lineTo(x + 68, y + 222);
  lighting.lineTo(x + 78, y + 242);
  lighting.lineTo(x + 83, y + 234);
  lighting.lineTo(x + 87, y + 234);
  lighting.lineTo(x + 93, y + 252);
  lighting.strokeStyle = '#BEDFFE';
  lighting.stroke(); /*Правя часть молнии снизу*/
  lighting.beginPath();
  lighting.moveTo(x + 53, y + 42);
  lighting.lineWidth = 5;
  lighting.lineJoin = 'round';
  lighting.lineCap = 'round';
  lighting.lineTo(x + 43, y + 67);
  lighting.lineTo(x + 33, y + 72);
  lighting.lineTo(x + 28, y + 87);
  lighting.lineTo(x + 27, y + 107);
  lighting.lineTo(x + 23, y + 112);
  lighting.lineTo(x + 27, y + 127);
  lighting.lineTo(x + 23, y + 137);
  lighting.lineTo(x + 30, y + 152);
  lighting.lineTo(x + 28, y + 167);
  lighting.lineTo(x + 31, y + 177);
  lighting.lineTo(x + 18, y + 197);
  lighting.lineTo(x + 23, y + 197);
  lighting.lineTo(x + 18, y + 207);
  lighting.lineTo(x + 26, y + 209);
  lighting.lineTo(x + 17, y + 222);
  lighting.lineTo(x + 13, y + 242);
  lighting.lineTo(x + 3, y + 250);
  lighting.lineTo(x - 2, y + 267);
  lighting.strokeStyle = '#CAF2FE';
  lighting.stroke(); /*Основная часть молнии*/
  lighting.beginPath();
  lighting.moveTo(x + 21, y + 49);
  lighting.lineWidth = 1;
  lighting.bezierCurveTo(x + 19, y + 35, x + 10, 95, x + 4, y + 22);
  lighting.bezierCurveTo(x + 13, y + 12, x + 13, 73, x, y);
  lighting.bezierCurveTo(x + 13, y - 48, x + 49, 28, x + 73, y);
  lighting.bezierCurveTo(x + 163, y + 12, x + 168, 165, x + 88, y + 47);
  lighting.bezierCurveTo(x + 73, y + 44, x + 33, 112, x + 21, y + 49);
  lighting.fillStyle = '#8795A5';
  lighting.fill();
  lighting.strokeStyle = '#8795A5';
  lighting.stroke();
  lighting.beginPath();
  lighting.moveTo(x, y);
  lighting.bezierCurveTo(x - 7, y - 3, x - 7, y - 8, x - 2, y - 15);
  lighting.bezierCurveTo(x - 4, y - 25, x + 2, y - 29, x + 8, y - 30);
  lighting.bezierCurveTo(x + 10, y - 38, x + 17, y - 38, x + 19, y - 33);
  lighting.bezierCurveTo(x + 23, y - 24, x + 18, y - 23, x + 11, y - 20);
  lighting.bezierCurveTo(x + 23, y - 18, x + 13, y - 3, x, y);
  lighting.fillStyle = '#C5C8CB';
  lighting.fill();
  lighting.strokeStyle = '#C5C8CB';
  lighting.stroke();
  lighting.beginPath();
  lighting.moveTo(x - 3, y);
  lighting.bezierCurveTo(x + 1, y - 5, x + 2, y - 11, x - 1, y - 15);
  lighting.bezierCurveTo(x + 2, y - 21, x + 9, y - 26, x + 8, y - 30);
  lighting.bezierCurveTo(x - 2, y - 25, x - 6, y - 18, x - 2, y - 15);
  lighting.bezierCurveTo(x - 5, y - 12, x - 7, y - 5, x - 3, y);
  lighting.fillStyle = '#58687F';
  lighting.fill();
  lighting.strokeStyle = '#58687F';
  lighting.stroke();
  lighting.beginPath();
  lighting.moveTo(x + 8, y - 30);
  lighting.bezierCurveTo(x + 8, y - 51, x + 21, y - 47, x + 32, y - 38);
  lighting.bezierCurveTo(x + 26, y - 26, x + 13, y - 26, x + 8, y - 30);
  lighting.fillStyle = '#C5C8CB';
  lighting.fill();
  lighting.strokeStyle = '#C5C8CB';
  lighting.stroke();
  lighting.beginPath();
  lighting.moveTo(x + 9, y - 38);
  lighting.bezierCurveTo(x + 10, y - 33, x + 12, y - 35, x + 13, y - 43);
  lighting.bezierCurveTo(x + 12, y - 41, x + 10, y - 40, x + 9, y - 38);
  lighting.fillStyle = '#5E6C81';
  lighting.fill();
  lighting.strokeStyle = '#5E6C81';
  lighting.stroke();
  lighting.beginPath();
  lighting.moveTo(x + 32, y - 38);
  lighting.bezierCurveTo(x + 34, y - 43, x + 50, y - 38, x + 40, y - 33);
  lighting.bezierCurveTo(x + 50, y - 37, x + 55, y - 32, x + 51, y - 26);
  lighting.bezierCurveTo(x + 70, y - 25, x + 60, y - 23, x + 57, y - 16);
  lighting.bezierCurveTo(x + 65, y - 17, x + 46, y - 13, x + 48, y - 25);
  lighting.bezierCurveTo(x + 55, y - 24, x + 36, y - 25, x + 38, y - 30);
  lighting.bezierCurveTo(x + 46, y - 28, x + 28, y - 27, x + 32, y - 38);
  lighting.fillStyle = '#C5C8CB';
  lighting.fill();
  lighting.strokeStyle = '#C5C8CB';
  lighting.stroke();
  lighting.beginPath();
  lighting.moveTo(x + 32, y - 38);
  lighting.bezierCurveTo(x + 30, y - 24, x + 38, y - 25, x + 38, y - 30);
  lighting.bezierCurveTo(x + 39, y - 38, x + 34, y - 38, x + 32, y - 38);
  lighting.fillStyle = '#8D98A3';
  lighting.fill();
  lighting.strokeStyle = '#8D98A3';
  lighting.stroke();
  lighting.beginPath();
  lighting.moveTo(x + 51, y - 26);
  lighting.bezierCurveTo(x + 59, y - 18, x + 59, y - 10, x + 57, y - 8);
  lighting.bezierCurveTo(x + 48, y - 13, x + 26, y - 18, x + 51, y - 26);
  lighting.fillStyle = '#7D8897';
  lighting.fill();
  lighting.strokeStyle = '#7D8897';
  lighting.stroke();
  lighting.beginPath();
  lighting.moveTo(x + 57, y - 16);
  lighting.bezierCurveTo(x + 63, y - 18, x + 68, y - 18, x + 76, y - 15);
  lighting.bezierCurveTo(x + 80, y - 23, x + 91, y - 31, x + 87, y - 24);
  lighting.bezierCurveTo(x + 90, y - 25, x + 89, y - 25, x + 91, y - 26);
  lighting.bezierCurveTo(x + 93, y - 33, x + 95, y - 33, x + 97, y - 28);
  lighting.bezierCurveTo(x + 103, y - 31, x + 128, y - 31, x + 116, y - 26);
  lighting.bezierCurveTo(x + 120, y - 28, x + 128, y - 26, x + 123, y - 23);
  lighting.bezierCurveTo(x + 130, y - 21, x + 130, y - 19, x + 128, y - 16);
  lighting.bezierCurveTo(x + 141, y - 9, x + 145, y - 8, x + 138, y + 2);
  lighting.bezierCurveTo(x + 130, y + 17, x + 115, y + 18, x + 110, y + 10);
  lighting.bezierCurveTo(x + 108, y + 17, x + 93, y + 18, x + 101, y + 7);
  lighting.bezierCurveTo(x + 98, y + 5, x + 95, y + 4, x + 88, y + 9);
  lighting.bezierCurveTo(x + 84, y + 9, x + 80, y + 7, x + 81, y + 5);
  lighting.bezierCurveTo(x + 73, y + 9, x + 60, y + 7, x + 57, y - 16);
  lighting.fillStyle = '#C5C8CB';
  lighting.fill();
  lighting.strokeStyle = '#C5C8CB';
  lighting.stroke();
  lighting.beginPath();
  lighting.moveTo(x + 60, y - 8);
  lighting.bezierCurveTo(x + 59, y + 4, x + 66, y + 9, x + 88, y + 2);
  lighting.bezierCurveTo(x + 84, y + 9, x + 73, y + 3, x + 60, y - 8);
  lighting.fillStyle = '#959EAA';
  lighting.fill();
  lighting.strokeStyle = '959EAA';
  lighting.stroke();
  lighting.beginPath();
  lighting.moveTo(x + 110, y + 10);
  lighting.bezierCurveTo(x + 113, y + 12, x + 120, y + 18, x + 131, y - 1);
  lighting.bezierCurveTo(x + 138, y - 4, x + 134, y - 7, x + 130, y - 8);
  lighting.bezierCurveTo(x + 134, y - 14, x + 136, y - 20, x + 123, y - 21);
  lighting.bezierCurveTo(x + 120, y - 18, x + 117, y - 8, x + 123, y + 14);
  lighting.bezierCurveTo(x + 101, y + 29, x + 106, y + 32, x + 110, y + 10);
  lighting.fillStyle = '#9BA3AD';
  lighting.fill();
  lighting.strokeStyle = '#9BA3AD';
  lighting.stroke();
  lighting.beginPath();
  lighting.moveTo(x + 138, y + 2);
  lighting.bezierCurveTo(x + 156, y + 1, x + 154, y + 10, x + 149, y + 13);
  lighting.bezierCurveTo(x + 164, y + 15, x + 163, y + 20, x + 157, y + 25);
  lighting.bezierCurveTo(x + 166, y + 27, x + 169, y + 33, x + 155, y + 37);
  lighting.bezierCurveTo(x + 151, y + 40, x + 151, y + 43, x + 168, y + 50);
  lighting.bezierCurveTo(x + 173, y + 52, x + 173, y + 54, x + 168, y + 56);
  lighting.bezierCurveTo(x + 163, y + 72, x + 128, y + 82, x + 120, y + 62);
  lighting.bezierCurveTo(x + 113, y + 57, x + 116, y + 32, x + 136, y + 35);
  lighting.bezierCurveTo(x + 118, y + 32, x + 98, y + 12, x + 111, y + 11);
  lighting.bezierCurveTo(x + 118, y + 15, x + 133, y + 13, x + 138, y + 2);
  lighting.fillStyle = '#C5C8CB';
  lighting.fill();
  lighting.strokeStyle = '#C5C8CB';
  lighting.stroke();
  lighting.beginPath();
  lighting.moveTo(x + 140, y + 5);
  lighting.bezierCurveTo(x + 160, y + 13, x + 156, y + 20, x + 153, y + 27);
  lighting.bezierCurveTo(x + 144, y + 33, x + 138, y + 35, x + 138, y + 26);
  lighting.bezierCurveTo(x + 131, y + 15, x + 140, y + 12, x + 131, y + 5);
  lighting.bezierCurveTo(x + 133, y + 12, x + 140, y + 12, x + 140, y + 5);
  lighting.fillStyle = '#959EAA';
  lighting.fill();
  lighting.strokeStyle = '#959EAA';
  lighting.stroke();
  lighting.beginPath();
  lighting.moveTo(x + 121, y + 52);
  lighting.bezierCurveTo(x + 128, y + 42, x + 148, y + 45, x + 153, y + 59);
  lighting.bezierCurveTo(x + 153, y + 46, x + 161, y + 45, x + 158, y + 57);
  lighting.bezierCurveTo(x + 153, y + 57, x + 134, y + 59, x + 126, y + 67);
  lighting.bezierCurveTo(x + 107, y + 62, x + 127, y + 63, x + 128, y + 37);
  lighting.bezierCurveTo(x + 116, y + 39, x + 113, y + 42, x + 121, y + 52);
  lighting.fillStyle = '#959EAA';
  lighting.fill();
  lighting.strokeStyle = '#959EAA';
  lighting.stroke();
  lighting.beginPath();
  lighting.moveTo(x + 120, y + 62);
  lighting.bezierCurveTo(x + 113, y + 61, x + 103, y + 69, x + 95, y + 50);
  lighting.bezierCurveTo(x + 83, y + 55, x + 63, y + 62, x + 53, y + 45);
  lighting.bezierCurveTo(x + 65, y + 37, x + 89, y + 35, x + 98, y + 44);
  lighting.bezierCurveTo(x + 101, y + 42, x + 113, y + 45, x + 120, y + 62);
  lighting.fillStyle = '#69778A';
  lighting.fill();
  lighting.strokeStyle = '#69778A';
  lighting.stroke();
  lighting.beginPath();
  lighting.moveTo(x + 53, y + 45);
  lighting.bezierCurveTo(x + 39, y + 56, x + 33, y + 59, x + 21, y + 49);
  lighting.bezierCurveTo(x + 28, y + 37, x + 48, y + 35, x + 53, y + 45);
  lighting.fillStyle = '#69778A';
  lighting.fill();
  lighting.strokeStyle = '#69778A';
  lighting.stroke();
  lighting.beginPath();
  lighting.moveTo(x + 21, y + 49);
  lighting.bezierCurveTo(x + 33, y + 62, x - 47, y + 82, x - 46, y + 67);
  lighting.bezierCurveTo(x - 53, y + 64, x - 53, y + 62, x - 45, y + 60);
  lighting.bezierCurveTo(x - 57, y + 57, x - 57, y + 39, x - 44, y + 37);
  lighting.bezierCurveTo(x - 57, y + 32, x - 52, y + 25, x - 34, y + 23);
  lighting.bezierCurveTo(x - 42, y + 21, x - 42, y + 7, x - 12, y + 10);
  lighting.bezierCurveTo(x - 32, y + 5, x - 22, y - 13, x, y);
  lighting.bezierCurveTo(x + 13, y + 5, x + 14, y + 13, x + 4, y + 22);
  lighting.bezierCurveTo(x + 10, y + 27, x + 19, y + 35, x + 21, y + 49);
  lighting.fillStyle = '#C5C8CB';
  lighting.fill();
  lighting.strokeStyle = '#C5C8CB';
  lighting.stroke();
  lighting.beginPath();
  lighting.moveTo(x + 21, y + 49);
  lighting.bezierCurveTo(x + 16, y + 57, x + 14, y + 55, x + 8, y + 6);
  lighting.bezierCurveTo(x + 8, y + 57, x - 22, y + 55, x - 27, y + 72);
  lighting.bezierCurveTo(x - 19, y + 42, x - 26, y + 44, x - 37, y + 42);
  lighting.bezierCurveTo(x - 26, y + 29, x - 24, y + 30, x - 12, y + 27);
  lighting.bezierCurveTo(x - 8, y + 29, x, y + 30, x + 3, y + 32);
  lighting.bezierCurveTo(x + 6, y + 42, x + 14, y + 51, x + 21, y + 49);
  lighting.bezierCurveTo(x + 13, y + 62, x - 27, y + 63, x - 37, y + 57);
  lighting.bezierCurveTo(x - 17, y + 42, x + 3, y + 37, x + 21, y + 49);
  lighting.fillStyle = '#959EAA';
  lighting.fill();
  lighting.strokeStyle = '#959EAA';
  lighting.stroke();
  lighting.beginPath();
  lighting.moveTo(x + 3, y + 2);
  lighting.bezierCurveTo(x + 3, y + 12, x + 3, y + 17, x - 12, y + 18);
  lighting.bezierCurveTo(x - 10, y + 37, x + 12, y + 35, x + 21, y + 32);
  lighting.bezierCurveTo(x + 63, y + 30, x + 64, y + 27, x + 53, y + 25);
  lighting.bezierCurveTo(x + 63, y + 33, x + 64, y + 19, x + 50, y + 17);
  lighting.bezierCurveTo(x + 49, y + 11, x + 49, y + 10, x + 40, y + 20);
  lighting.bezierCurveTo(x + 37, y + 19, x + 30, y + 22, x + 23, y + 12);
  lighting.bezierCurveTo(x + 18, y - 18, x + 13, y - 18, x + 3, y + 2);
  lighting.fillStyle = '#58687F';
  lighting.fill();
  lighting.strokeStyle = '#58687F';
  lighting.stroke();
  lighting.beginPath();
  lighting.moveTo(x + 53, y + 25);
  lighting.bezierCurveTo(x + 43, y + 27, x + 38, y + 29, x + 58, y + 37);
  lighting.bezierCurveTo(x + 46, y + 32, x + 40, y + 47, x + 63, y + 39);
  lighting.bezierCurveTo(x + 73, y + 47, x + 83, y + 46, x + 93, y + 39);
  lighting.bezierCurveTo(x + 98, y + 47, x + 103, y + 46, x + 118, y + 33);
  lighting.bezierCurveTo(x + 125, y + 27, x + 123, y + 19, x + 110, y + 27);
  lighting.bezierCurveTo(x + 109, y + 14, x + 108, y + 14, x + 98, y + 29);
  lighting.bezierCurveTo(x + 103, y + 15, x + 98, y + 20, x + 94, y + 24);
  lighting.bezierCurveTo(x + 96, y + 13, x + 88, y + 15, x + 83, y + 22);
  lighting.bezierCurveTo(x + 77, y + 17, x + 72, y + 19, x + 63, y + 25);
  lighting.bezierCurveTo(x + 62, y + 14, x + 61, y + 13, x + 53, y + 25);
  lighting.fillStyle = '#58687F';
  lighting.fill();
  lighting.strokeStyle = '#58687F';
  lighting.stroke();
  lighting.beginPath();
  lighting.moveTo(x + 21, y + 49);
  lighting.bezierCurveTo(x - 27, y + 67, x - 28, y + 31, x - 7, y + 27);
  lighting.bezierCurveTo(x + 13, y + 22, x + 43, y + 22, x + 63, y + 27);
  lighting.bezierCurveTo(x + 53, y + 52, x + 33, y + 57, x + 21, y + 49);
  lighting.fillStyle = '#58687F';
  lighting.fill();
  lighting.strokeStyle = '#58687F';
  lighting.stroke();
  lighting.beginPath();
  lighting.moveTo(x + 113, y + 32);
  lighting.bezierCurveTo(x + 143, y + 22, x + 151, y + 22, x + 143, y + 37);
  lighting.bezierCurveTo(x + 150, y + 40, x + 151, y + 45, x + 145, y + 47);
  lighting.bezierCurveTo(x + 150, y + 45, x + 151, y + 49, x + 145, y + 51);
  lighting.bezierCurveTo(x + 133, y + 57, x + 123, y + 59, x + 103, y + 50);
  lighting.bezierCurveTo(x + 93, y + 51, x + 93, y + 51, x + 113, y + 32);
  lighting.fillStyle = '#58687F';
  lighting.fill();
  lighting.strokeStyle = '#58687F';
  lighting.stroke();
  lighting.beginPath();
  lighting.moveTo(x - 17, y + 40);
  lighting.bezierCurveTo(x - 27, y + 33, x - 37, y + 35, x - 42, y + 45);
  lighting.bezierCurveTo(x - 53, y + 43, x - 52, y + 47, x - 44, y + 50);
  lighting.bezierCurveTo(x - 50, y + 53, x - 50, y + 60, x - 44, y + 59);
  lighting.bezierCurveTo(x - 52, y + 70, x + 8, y + 52, x - 17, y + 40);
  lighting.fillStyle = '#58687F';
  lighting.fill();
  lighting.strokeStyle = '#58687F';
  lighting.stroke();

  lighting.font = 'bold oblique 16px Times New Roman';
  lighting.fillStyle = 'black';
  lighting.fillText('Явление природы:', x - 109, y - 53);
  lighting.font = 'oblique 16px Times New Roman';
  lighting.fillText('молния', x + 21, y - 53);

  lighting.font = 'bold oblique 16px Times New Roman';
  lighting.fillText('Соответствующие физические явления:', x - 109, y + 312);
  lighting.font = 'oblique 16px Times New Roman';
  lighting.fillText('световое (вспышка)', x - 109, y + 332);
  lighting.fillText('звуковое (гром)', x - 109, y + 352);
  lighting.fillText('тепловое (высокая температура)', x - 109, y + 372);
  lighting.fillText(
    'электромагнитное (выход из строя электроники)',
    x - 109,
    y + 392
  );
  lighting.fillText('механическое (движение облака)', x - 109, y + 412);
}
