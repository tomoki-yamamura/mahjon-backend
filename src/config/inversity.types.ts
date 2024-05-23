const TYPES = {
  // controller
  SheetController: Symbol.for("SheetController"),
  HealthController: Symbol.for("HealthController"),
  LineController: Symbol.for("LineController"),
  PlayerController: Symbol.for("PlayerController"),

  //interactor
  SheetInteractor: Symbol.for("SheetInteractor"),
  PlayerInteractor: Symbol.for("PlayerInteractor"),
  HanchanInteractor: Symbol.for("HanchanInteractor"),
  LineInteractor: Symbol.for("LineInteractor"),

  // irepository
  SheetRepository: Symbol.for("SheetRepository"),
  PlayerRepository: Symbol.for("PlayerRepository"),

  // infra/line
  LineMessageSender: Symbol.for("LineMessageSender"),
  LineClient: Symbol.for("LineClient"),

  //infra/mongoDB/model
  ScoreModel: Symbol.for("ScoreModel"),
  PlayerModel: Symbol.for("PlayerModel"),

  // infra/GoogleSpreadSheet
  gsDoc: Symbol.for("gsDoc"),
};

export default TYPES;
