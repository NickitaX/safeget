module.exports = function safeget(func, defaultValue) {
  try {
    return func();
  } catch (e) {
    return defaultValue;
  }
}