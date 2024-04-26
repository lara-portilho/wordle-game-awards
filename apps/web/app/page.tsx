import { Schema, connect } from "mongoose";

const competitorSchema = new Schema({
  idParticipant: String,
  position: Number,
});

const daySchema = new Schema({
  id: String,
  date: Date,
  word: String,
  results: [competitorSchema],
});

const participantSchema = new Schema({
  id: String,
  name: String,
});

const partySchema = new Schema({
  id: String,
  name: String,
  participants: [participantSchema],
  days: [daySchema],
});

async function main() {
  await connect("mongodb://localhost:27017/test");
}

export default async function Page() {
  await main();

  return <div>aaa</div>;
}
