export default (old: any, updated: any) => {
  let isEqual = false;
  for (const key in updated) {
    isEqual = old[key] !== updated[key] ? true : false;
  }
  return isEqual;
};
