"use server";

import { IGame, Game } from "../models/Game";
import { connect, connection } from "mongoose";

export async function createGame(formData: FormData) {
  console.log(formData);
}

async function createGameService(data: IGame) {
  try {
    await connect("mongodb://localhost:27017/test");
    const game = new Game(data);
    await game.save();
  } finally {
    await connection.close();
  }
}
