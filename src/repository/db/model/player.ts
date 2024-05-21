import mongoose, { Document, Model, Schema, Types } from "mongoose";
export interface IPlayer extends Document  {
  _id: Types.ObjectId;
  name: string;
}

const playerSchema = new Schema<IPlayer>({
  name: {
    type: "String",
    required: true,
  },
});

export const PlayerModel: Model<IPlayer> = mongoose.model<IPlayer>(
  "Player",
  playerSchema
);
