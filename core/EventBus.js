class EventBus {
  #events = {};

  constructor(middleware = []) {
    this.dispatch = this.#dispatchWithMiddleware(middleware);
  }

  #dispatchWithMiddleware(middleware) {
    const dispatch = event => {
      if (this.#events[event.type]) {
        this.#events[event.type].forEach(handler => handler(event));
      }
  
      return this;
    };

    return middleware.reduce(
      (composedMiddleware, middleware) => event => middleware(composedMiddleware(event)),
      dispatch
    );
  }

  subscribe(type, handler) {
    if (!this.#events[type]) {
      this.#events[type] = [];
    }

    this.#events[type].push(handler);

    return this;
  }
}
