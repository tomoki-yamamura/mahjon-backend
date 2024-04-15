const TYPES = {
  SheetRepository: Symbol.for('SheetRepository'),
  SheetInteractor: Symbol.for('SheetInteractor'),
  SheetController: Symbol.for('SheetController')
} as const;

export default TYPES;