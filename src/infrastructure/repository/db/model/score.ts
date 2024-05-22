import mongoose, { Model, Schema } from "mongoose";
import { IPlayer } from "./player";

export type mode = "3players" | "4players"
export interface IScore {
  playerId: Schema.Types.ObjectId | IPlayer;
  point: number;
  date: Date;
  mode: mode;
}

const scoreSchema = new Schema<IScore>({
  playerId: {
    type: Schema.Types.ObjectId,
    ref: "Player",
    required: true,
  },
  point: {
    type: "Number",
    required: true,
  },
  date: {
    type: "Date",
    required: true,
  },
  mode: {
    type: "String",
    enum: ["3players", "4players"],
    required: true,
  },
});

export const ScoreModel: Model<IScore> = mongoose.model<IScore>(
  "Score",
  scoreSchema
);
