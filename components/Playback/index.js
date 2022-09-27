export class PlaybackControls {
  #eventBus;

  #EVENT_TYPES = {
    PAUSE: 'playback.pause',
    PLAY: 'playback.play',
    STOP: 'playback.stop'
  };

  contructor(eventBus) {
    this.#eventBus = eventBus;
  }

  pause() {
    this.#eventBus.dispatch(this.#EVENT_TYPES.PAUSE);

    return this;
  }

  play() {
    this.#eventBus.dispatch(this.#EVENT_TYPES.PLAY);

    return this;
  }

  stop() {
    this.#eventBus.dispatch(this.#EVENT_TYPES.STOP);

    return this;
  }
}