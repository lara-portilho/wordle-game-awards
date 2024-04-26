import mongoose, { Schema, model } from "mongoose";
import { ICompetitor, competitorSchema } from "./Competitor";

export type IGame = {
  id: String;
  date: Date;
  word: String;
  results: ICompetitor[];
};

export const gameSchema = new Schema<IGame>({
  id: String,
  date: Date,
  word: String,
  results: [competitorSchema],
});

export const Game =
  (mongoose.models.Game as mongoose.Model<IGame>) ??
  model<IGame>("Game", gameSchema);
