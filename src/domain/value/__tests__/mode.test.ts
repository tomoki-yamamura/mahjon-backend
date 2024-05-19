import PlayMode from "../mode";

describe('PlayMode', () => {
  test('constructor should set the correct mode for "3player"', () => {
    const playMode = new PlayMode('3player');
    expect(playMode.getMode()).toBe('3player');
  });

  test('constructor should throw an error for an invalid mode', () => {
    expect(() => new PlayMode('')).toThrow('Invalid mode: . Mode must be "3player" or "4player".');
  });
});
