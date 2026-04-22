class EventEmitter {
  constructor() {
    this.events = [];
  }

  on(eventName, callBack) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callBack);
  }
  emit(eventName, data) {
    const listener = this.events[eventName];
    if (!listener) return;
    listener.forEach((callBack) => callBack(data));
  }

  off(eventName, callbackToRemove) {
    const listeners = this.events[eventName];
    if (!listeners) {
      return;
    }
    this.events[eventName] = listeners.filter(
      (callBack) => callBack !== callbackToRemove,
    );
  }
}

const emitter = new EventEmitter();

// Create named functions so we can remove them later
const onClick1 = (data) => console.log("Click 1:", data);
const onClick2 = (data) => console.log("Click 2:", data);

// Subscribe
emitter.on("click", onClick1);
emitter.on("click", onClick2);

// Broadcast
emitter.emit("click", { x: 100, y: 200 });
// Output:
// Click 1: { x: 100, y: 200 }
// Click 2: { x: 100, y: 200 }

// Unsubscribe
emitter.off("click", onClick1);

emitter.emit("click", { x: 50, y: 50 });
// Output:
// Click 2: { x: 50, y: 50 }
// (onClick1 is gone!)
