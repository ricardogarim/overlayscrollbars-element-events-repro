const live = new WeakMap();
const { addEventListener, removeEventListener } = EventTarget.prototype;

EventTarget.prototype.addEventListener = function (type, ...rest) {
  if (type === 'load') {
    live.set(this, (live.get(this) || 0) + 1);
  }
  return addEventListener.call(this, type, ...rest);
};

EventTarget.prototype.removeEventListener = function (type, ...rest) {
  if (type === 'load') {
    live.set(this, (live.get(this) || 0) - 1);
  }
  return removeEventListener.call(this, type, ...rest);
};

export const liveLoadListeners = (target) => live.get(target) || 0;
