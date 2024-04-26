"use server";

import { IParty, Party } from "../models/Party";
import { connect, connection } from "mongoose";
import { v4 as uuid } from "uuid";

function valueToString(value?: FormDataEntryValue | null) {
  if (!value) throw new Error("String vazia");
  return value.toString();
}

function valueToStringArray(value?: FormDataEntryValue | null) {
  if (!value) throw new Error("String vazia");
  return value.toString().split(",");
}

export async function createParty(formData: FormData) {
  const participants = valueToStringArray(formData.get("participants")).map(
    (participant) => {
      return {
        id: uuid() as string,
        name: participant,
      };
    }
  );

  const data: IParty = {
    id: uuid(),
    name: valueToString(formData.get("name")),
    participants: participants,
    games: [],
  };
  await createPartyService(data);
}

async function createPartyService(data: IParty) {
  try {
    console.log(data);
    await connect("mongodb://localhost:27017/test");
    const party = new Party(data);
    await party.save();
  } finally {
    await connection.close();
  }
}
