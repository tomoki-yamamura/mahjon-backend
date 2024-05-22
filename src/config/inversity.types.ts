const TYPES = {
  SheetRepository: Symbol.for("SheetRepository"),
  PlayerRepository: Symbol.for("PlayerRepository"),
  ScoreRepository: Symbol.for("ScoreRepository"),
  HanchanRepository: Symbol.for("HanchanRepository"),
  SheetInteractor: Symbol.for("SheetInteractor"),
  PlayerInteractor: Symbol.for("PlayerInteractor"),
  LineInteractor: Symbol.for("LineInteractor"),
  HanchanInteractor: Symbol.for("HanchanInteractor"),
  gsDoc: Symbol.for("gsDoc"),
  SheetController: Symbol.for("SheetController"),
  LineController: Symbol.for("LineController"),
  HealthController: Symbol.for("HealthController"),

  // DB
  ScoreModel: Symbol.for("ScoreModel"),
  PlayerModel: Symbol.for("PlayerModel")
};

export default TYPES;
