import PlayMode from "../mode";

describe('PlayMode', () => {
  test('constructor should set the correct mode for "3players"', () => {
    const playMode = new PlayMode('3players');
    expect(playMode.getMode()).toBe('3players');
  });

  test('constructor should throw an error for an invalid mode', () => {
    expect(() => new PlayMode('')).toThrow('Invalid mode: . Mode must be "3players" or "4players".');
  });
});
