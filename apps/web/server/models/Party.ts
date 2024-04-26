import mongoose, { Schema, model } from "mongoose";
import { IGame, gameSchema } from "./Game";
import { IParticipant, participantSchema } from "./Participant";

export type IParty = {
  id: string;
  name: string;
  participants: IParticipant[];
  games: IGame[];
};

export const partySchema = new Schema<IParty>({
  id: String,
  name: String,
  participants: [participantSchema],
  games: [gameSchema],
});

export const Party =
  (mongoose.models.Party as mongoose.Model<IParty>) ??
  model<IParty>("Party", partySchema);
