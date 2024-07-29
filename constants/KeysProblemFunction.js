function KeysProblemFunction(Dictionary) {
  let MajorOrMinor = Math.round(Math.random());
  let keys = Object.keys(Dictionary);
  let problemKey = keys[Math.round((keys.length - 1) * Math.random())];
  let correctAnswer = Dictionary[problemKey][MajorOrMinor][0];
  let wrongAnswer1 = Dictionary[problemKey][MajorOrMinor][1];
  let wrongAnswer2 = Dictionary[problemKey][MajorOrMinor][2];
  let wrongAnswer3 = Dictionary[problemKey][MajorOrMinor][3];
  let problem = [
    problemKey,
    correctAnswer,
    wrongAnswer1,
    wrongAnswer2,
    wrongAnswer3,
  ];
  return problem;
}

export default KeysProblemFunction;