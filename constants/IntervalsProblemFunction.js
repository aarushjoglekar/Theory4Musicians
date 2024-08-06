export default function IntervalsProblemFunction(Dictionary) {
  let Intervals = Object.keys(Dictionary);
  let problemKey =
    Intervals[Math.round((Intervals.length - 1) * Math.random())];
  let correctAnswer = Dictionary[problemKey][0];
  let wrongAnswer1 = Dictionary[problemKey][1];
  let wrongAnswer2 = Dictionary[problemKey][2];
  let wrongAnswer3 = Dictionary[problemKey][3];
  let problem = [
    problemKey,
    correctAnswer,
    wrongAnswer1,
    wrongAnswer2,
    wrongAnswer3,
  ];
  return problem;
}
