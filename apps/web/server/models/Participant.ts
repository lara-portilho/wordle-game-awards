import mongoose, { Schema, model } from "mongoose";

export type IParticipant = {
  id: string;
  name: string;
};

export const participantSchema = new Schema<IParticipant>({
  id: String,
  name: String,
});

export const Participant =
  (mongoose.models.Participant as mongoose.Model<IParticipant>) ??
  model<IParticipant>("Participant", participantSchema);
