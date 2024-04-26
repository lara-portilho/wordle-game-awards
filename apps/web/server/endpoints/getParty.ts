"use server";

import { Party } from "../models/Party";
import { connect, connection } from "mongoose";

export async function getParty() {
  console.log("adwu1");
  const party = await getPartyService();
  console.log("adwu");
  console.log("adw", party);
}

async function getPartyService() {
  try {
    await connect("mongodb://localhost:27017/test", {
      user: "root",
      pass: "123",
    });
    const doc = await Party.find().exec();
    return doc;
  } finally {
    await connection.close();
  }
}
