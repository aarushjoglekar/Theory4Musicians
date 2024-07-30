import { collection, addDoc } from "firebase/firestore";
import { db } from "./../config/firebase";

type ScoreType = "keys" | "scales" | "intervals" | "triads";
type ScoreRecord = {
  value: number;
  date: Date;
};

const SCORES = "scores";
const scoresCollectionRef = collection(db, SCORES);

async function storeScore(
  scoreType: ScoreType,
  scoreValue: number
): Promise<void> {
  try {
    const newScoreRef = await addDoc(scoresCollectionRef, {
      value: scoreValue,
      date: new Date(),
    });

    console.log("Document written with ID: ", newScoreRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}

async function getAllScores(scoreType: ScoreType): Promise<ScoreRecord[] | []> {
  return [];
}

async function getHighestScore(
  scoreType: ScoreType
): Promise<ScoreRecord | null> {
  const allScores = await getAllScores(scoreType);
  if (allScores.length <= 0) return null;

  const sortedScores = allScores.sort((a, b) => b.value - a.value);
  return sortedScores[0];
}
