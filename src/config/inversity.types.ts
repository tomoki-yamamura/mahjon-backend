const TYPES = {
  SheetRepository: Symbol.for("SheetRepository"),
  PlayerRepository: Symbol.for("PlayerRepository"),
  SheetInteractor: Symbol.for("SheetInteractor"),
  PlayerInteractor: Symbol.for("PlayerInteractor"),
  gsDoc: Symbol.for("gsDoc"),
  SheetController: Symbol.for("SheetController"),
  PlayerController: Symbol.for("PlayerController"),
  HealthController: Symbol.for("HealthController"),

  // DB
  HanchanModel: Symbol.for("HanchanModel"),
  PlayerModel: Symbol.for("PlayerModel")
};

export default TYPES;
