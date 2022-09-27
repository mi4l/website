class Sequencer {
  #eventBus;

  #state;

  #EVENT_TYPES = {
    TOGGLE_NOTE: 'sequencer.toggleNote',
    TRIGGER_NOTE: 'sequencer.triggerNote'
  };

  constructor(eventBus) {
    this.#eventBus = eventBus;

    this.#state = new Set();
  }

  toggleNote(note) {
    return (this.#state.has(note) ? this.#state.delete : this.#state.add)(note) && this;
  }

  triggerNote(note) {
    this.#eventBus.dispatch(this.#EVENT_TYPES.TRIGGER_NOTE, note);

    return this;
  }
}