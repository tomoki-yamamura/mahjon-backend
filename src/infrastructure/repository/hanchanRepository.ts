// import { inject, injectable } from "inversify";
// import TYPES from "../config/inversity.types";
// import { IHanchanRepository, getHanchansByDateParams } from "../domain/repository/IHanchanRepository";
// import {  HanchanModel, IHanchan }  from "./db/model/hanchan";
// import { Model } from "mongoose";
// import HanchanList from "../domain/collection/hanchanList";
// import { convertToHanchanList } from "./factory/hanchan";

// @injectable()
// export class HanchanRepository implements IHanchanRepository {
//   private model: Model<IHanchan>;
//   constructor(@inject(TYPES.HanchanModel) model: Model<IHanchan>) {
//     this.model = model;
//   }
//   getAllHanchans(): Promise<HanchanList> {
//     throw new Error("Method not implemented.");
//   }
//   async getHanchansByDate({ mode, startDate, endDate }: getHanchansByDateParams): Promise<HanchanList> {
//     const queryMode = mode.getMode()
//     const queryStartDate = startDate.getDate()
//     const queryEndDate = endDate.getDate()
//     try {
//       const hanchans = await HanchanModel.find({ // HanchanModelを使用する
//         queryMode,
//         date: { $gte: queryStartDate, $lte: queryEndDate}
//       })
//       .populate({
//         path: 'scores.playerId',
//         select: 'name'
//       }).exec()
//       return convertToHanchanList(hanchans)
//     } catch (error) {
//       console.error("Error fetching Hanchans by date:", error);
//       throw new Error("Failed to fetch Hanchans by date");
//     }
//   }
// }
