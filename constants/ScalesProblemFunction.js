function ScalesProblemFunction(Dictionary){
  var scales = Object.keys(Dictionary);
  var problemKey = scales[Math.round((scales.length - 1) * Math.random())];
  var correctAnswer = Dictionary[problemKey][0]
  var wrongAnswer1 = Dictionary[problemKey][1]
  var wrongAnswer2 = Dictionary[problemKey][2]
  var wrongAnswer3 = Dictionary[problemKey][3]
  var problem = [problemKey,correctAnswer,wrongAnswer1,wrongAnswer2,wrongAnswer3]
  return problem
};

export default ScalesProblemFunction;