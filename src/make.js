function make(...args) {
  const result = [];
  function internal(...inArgs) {
    if (typeof inArgs[0] !== 'function') {
      result.push(...inArgs);
      return internal;
    }
    return result.reduce(inArgs[0]);
  }
  return internal(...args);
}
