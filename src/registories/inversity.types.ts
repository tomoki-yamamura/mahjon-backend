const TYPES = {
  RowRepository: Symbol.for('RowRepository'),
  RowInteractor: Symbol.for('RowInteractor'),
  RowController: Symbol.for('RowController')
} as const;

export default TYPES;