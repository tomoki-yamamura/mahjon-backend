const TYPES = {
  SheetRepository: Symbol.for("SheetRepository"),
  PlayerRepository: Symbol.for("PlayerRepository"),
  HanchanRepository: Symbol.for("HanchanRepository"),
  SheetInteractor: Symbol.for("SheetInteractor"),
  PlayerInteractor: Symbol.for("PlayerInteractor"),
  LineInteractor: Symbol.for("LineInteractor"),
  HanchanInteractor: Symbol.for("HanchanInteractor"),
  gsDoc: Symbol.for("gsDoc"),
  SheetController: Symbol.for("SheetController"),
  PlayerController: Symbol.for("PlayerController"),
  LineController: Symbol.for("LineController"),
  HealthController: Symbol.for("HealthController"),

  // DB
  HanchanModel: Symbol.for("HanchanModel"),
  PlayerModel: Symbol.for("PlayerModel")
};

export default TYPES;
