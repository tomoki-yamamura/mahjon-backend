import mongoose, { Model, Schema, Types } from "mongoose";
import { Score } from "./score";

type mode = "3player" | "4player";

export interface IHanchan {
  _id: Types.ObjectId;
  date: Date;
  mode: mode;
  scores: Score[];
}

const hanchanSchema = new Schema<IHanchan>({
  date: {
    type: Date,
    required: true,
  },
  mode: {
    type: String,
    enum: ["3player", "4player"],
    required: true,
  },
  scores: [
    {
      playerId: { type: Schema.Types.ObjectId, ref: "Player", required: true },
      point: { type: Number, required: true },
    },
  ],
});

export const HanchanModel: Model<IHanchan> = mongoose.model(
  "Hanchan",
  hanchanSchema
);
