// import { inject, injectable } from "inversify";
// import { ISheetInteractor } from "../interface/ISheetInteractor";
// import { ISheetRepository } from "../domain/repository/ISheetRepository";
// import TYPES from "../config/inversity.types";
// import { Sheet } from "./dto/sheet";
// import { IHanchanInteractor } from "../interface/IHanchanInteractor";
// import HanchanList from "../domain/collection/hanchanList";
// import { PlayerTotalPointDTO } from "./dto/playerTotalPoint";
// import { IHanchanRepository } from "../domain/repository/IHanchanRepository";

// @injectable()
// export class HanchanInteractor implements IHanchanInteractor {
//   private repository: IHanchanRepository;
//   constructor(@inject(TYPES.HanchanRepository) repository: IHanchanRepository) {
//     this.repository = repository;
//   }
//   async getHanchansByDate(input: { mode: string; startDate: Date; endDate: Date; }): Promise<PlayerTotalPointDTO[]> {
//     throw new Error("Method not implemented.");
//   }
// }
