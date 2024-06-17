import mongoose, { Model, Schema } from 'mongoose'
export interface IPlayer extends Document {
  name: string
}

const playerSchema = new Schema<IPlayer>({
  name: {
    type: 'String',
    required: true,
  },
})

export const PlayerModel: Model<IPlayer> = mongoose.model<IPlayer>(
  'Player',
  playerSchema,
)
