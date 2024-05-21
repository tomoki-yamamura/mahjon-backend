import { inject, injectable } from "inversify";
import TYPES from "../config/inversity.types";
import { IHanchanRepository } from "../domain/repository/IHanchanRepository";
import PlayedDate from "../domain/value/date";
import PlayMode from "../domain/value/mode";
import {  Hanchan }  from "./db/model/hanchan";
import { Model } from "mongoose";
import HanchanList from "../domain/collection/hanchanList";

@injectable()
export class HanchanRepository implements IHanchanRepository {
  private model: Model<Hanchan>;
  constructor(@inject(TYPES.HanchanModel) model: Model<Hanchan>) {
    this.model = model;
  }
  getAllHanchans(): Promise<HanchanList> {
    throw new Error("Method not implemented.");
  }
  getHanchansByDate(input: { mode: PlayMode; startDate: PlayedDate; endDate: PlayedDate; }): Promise<HanchanList> {
    throw new Error("Method not implemented.");
  }
}
