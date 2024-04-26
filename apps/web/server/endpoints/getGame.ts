"use server";

import { Game } from "../models/Game";
import { connect, connection } from "mongoose";

export async function getGame() {
  console.log("a");
}

async function getGameService() {
  try {
    await connect("mongodb://localhost:27017/test");
    const doc = Game.findOne();
    return doc;
  } finally {
    await connection.close();
  }
}
