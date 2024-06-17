class PlayMode {
  mode: '3players' | '4players'
  constructor(mode: string) {
    if (mode !== '3players' && mode !== '4players') {
      throw new Error(
        `Invalid mode: ${mode}. Mode must be "3player" or "4player".`,
      )
    }
    this.mode = mode
  }

  getMode(): string {
    return this.mode
  }

  isEqualTo(other: PlayMode): boolean {
    return this.mode === other.getMode()
  }
}

export default PlayMode
