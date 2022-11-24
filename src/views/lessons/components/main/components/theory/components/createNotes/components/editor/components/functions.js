export const closeListOfPararmeterValues = (parameterTuningValues) => {
  parameterTuningValues.listOfValuesSeen = false;
  parameterTuningValues.choosenValueSeen = true;
  parameterTuningValues.arrowOpenListOfValues = true;
  parameterTuningValues.borderValue = '0.5px solid black';
}

export const changeSeenOfListOfParameterValues = async(parameterTuningValues) => {
  let changeSeen = new Promise((resolve) => {
    // убрать промис
    parameterTuningValues.listOfValuesSeen =
      !parameterTuningValues.listOfValuesSeen;
    parameterTuningValues.choosenValueSeen =
      !parameterTuningValues.choosenValueSeen;
    parameterTuningValues.arrowOpenListOfValues =
      !parameterTuningValues.arrowOpenListOfValues;
    resolve();
  });

  await changeSeen;

  if (parameterTuningValues.listOfValuesSeen) {
    parameterTuningValues.borderValue = 'none';
  } else {
    parameterTuningValues.borderValue = '0.5px solid black';
  }
}

export const changeListParameterValue = (
  parameterTuningValues,
  eventChangeParameter
) => {
  parameterTuningValues.choosenValueText =
    eventChangeParameter.target.textContent;
  changeSeenOfListOfParameterValues(parameterTuningValues);
  switch (eventChangeParameter.target.textContent) {
    case '-цвет-':
      return { color: 'black' };
    case 'черный':
      return { color: 'black' };
    case 'красный':
      return { color: 'red' };
    case 'синий':
      return { color: 'blue' };
    case 'зеленый':
      return { color: 'green' };
    case 'серый':
      return { color: 'gray' };
    case '-размер-':
      return {
        fontSize: '16px',
      };
    case '8pt':
      return {
        fontSize: 8 * 1.338307 + 'px',
      };
    case '10pt':
      return {
        fontSize: 10 * 1.338307 + 'px',
      };
    case '12pt':
      return {
        fontSize: 12 * 1.338307 + 'px',
      };
    case '14pt':
      return {
        fontSize: 14 * 1.338307 + 'px',
      };
    case '16pt':
      return {
        fontSize: 16 * 1.338307 + 'px',
      };
    case '18pt':
      return {
        fontSize: 18 * 1.338307 + 'px',
      };
    case '20pt':
      return {
        fontSize: 20 * 1.338307 + 'px',
      };
    case '22pt':
      return {
        fontSize: 22 * 1.338307 + 'px',
      };
    case '24pt':
      return {
        fontSize: 24 * 1.338307 + 'px',
      };
    case '-шрифт-':
      return { fontFamily: 'Times New Roman' };
    case 'Times New Roman':
      return { fontFamily: 'Times New Roman' };
    case 'Arial':
      return { fontFamily: 'Arial' };
    case 'Calibri':
      return { fontFamily: 'Calibri' };
    case 'Cambria':
      return { fontFamily: 'Cambria' };
  }
}

export const letterParameterDefinition = (parameter) => {
  switch (parameter) {
    case 'fontWeight':
      return 'ж';
    case 'fontStyle':
      return 'к';
    case 'textDecoration':
      return 'ч';
  }
}

export const drawArrowDown = (arrow) => {
  arrow.beginPath();
  arrow.moveTo(6, 11);
  arrow.lineTo(10, 7);
  arrow.moveTo(6, 11);
  arrow.lineTo(2, 7);
  arrow.moveTo(6, 10);
  arrow.lineTo(6, 3);
  arrow.strokeStyle = 'black';
  arrow.stroke();
}

export const parameterOver = (parameterTuningValues, parameterPressed) => {
  if (parameterPressed) {
    parameterTuningValues.backgroundColor = '#C5C8CB';
  } else {
    parameterTuningValues.backgroundColor = '#8795A5';
  }
}

export const parameterOut = (parameterTuningValues, parameterPressed) => {
  if (parameterPressed) {
    parameterTuningValues.backgroundColor = '#8795A5';
  } else {
    parameterTuningValues.backgroundColor = '#C5C8CB';
  }
}

export function changeButtonParameterValue(parameterTuningValues, parameterPressed) {
  //переработать
  this.parameterPressed = !this.parameterPressed;
  if (this.parameterPressed) {
    parameterTuningValues.backgroundColor = '#C5C8CB';
    parameterTuningValues.boxShadow = 'none';
  } else {
    parameterTuningValues.backgroundColor = '#8795A5';
    parameterTuningValues.boxShadow = '2px 0px 1px #454B4E';
  }
  switch (this.props.parameter) {
    case 'fontWeight': {
      if (this.parameterPressed) {
        parameterTuningValues.fontWeight = 'bold';
      } else {
        parameterTuningValues.fontWeight = 'normal';
      }
      return { fontWeight: parameterTuningValues.fontWeight };
    }
    case 'fontStyle': {
      if (this.parameterPressed) {
        parameterTuningValues.fontStyle = 'oblique';
      } else {
        parameterTuningValues.fontStyle = 'normal';
      }
      return { fontStyle: parameterTuningValues.fontStyle };
    }
    case 'textDecoration': {
      if (this.parameterPressed) {
        parameterTuningValues.textDecoration = 'underline';
      } else {
        parameterTuningValues.textDecoration = 'none';
      }
      return { textDecoration: parameterTuningValues.textDecoration };
    }
  }
}

export const drawClip = (clip) => {
  clip.moveTo(11, 2);
  clip.lineTo(2, 11);
  clip.bezierCurveTo(1, 17, 6, 17, 9, 15);
  clip.lineTo(18, 6);
  clip.bezierCurveTo(17, 0, 14, 2, 13, 3);
  clip.lineTo(5, 11);
  clip.bezierCurveTo(4, 16, 9, 13, 11, 10);
  clip.lineTo(15, 6);
  clip.strokeStyle = 'black';
  clip.stroke();
}