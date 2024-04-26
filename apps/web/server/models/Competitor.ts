import mongoose, { Schema, model } from "mongoose";

export type ICompetitor = {
  idParticipant: string;
  position: number;
};

export const competitorSchema = new Schema<ICompetitor>({
  idParticipant: String,
  position: Number,
});

export const Competitor =
  (mongoose.models.Competitor as mongoose.Model<ICompetitor>) ??
  model<ICompetitor>("Competitor", competitorSchema);
