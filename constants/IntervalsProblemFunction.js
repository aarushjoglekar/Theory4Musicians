export default function IntervalsProblemFunction(Array, clef) {
  let randomProblem = Math.round((Array.length - 1) * Math.random());
  let problemKey = Array[randomProblem][clef + "URI"]
  let correctAnswer = Array[randomProblem]['answers'][0]
  let wrongAnswer1 = Array[randomProblem]['answers'][1]
  let wrongAnswer2 = Array[randomProblem]['answers'][2]
  let wrongAnswer3 = Array[randomProblem]['answers'][3]
  let problem = [
    problemKey,
    correctAnswer,
    wrongAnswer1,
    wrongAnswer2,
    wrongAnswer3,
  ];
  return problem;
}
