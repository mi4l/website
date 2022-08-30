class EventBus {
  #events = {};

  constructor(middlewares = []) {
    this.dispatch = this.#dispatchWithMiddleware(middlewares).bind(this);
  }

  #dispatchWithMiddleware(middlewares) {
    function dispatch(event) {
      if (this.#events[event.type]) {
        this.#events[event.type].forEach(handler => handler(event));
      }
  
      return this;
    };

    return middlewares.reduce(
      (composedMiddleware, middleware) => event => composedMiddleware(middleware(event)),
      dispatch.bind(this)
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
