//
export function validation<T>(obj: T) {
  const checkValidation = Object.values(obj)
    .map((value) => {
      return value.trim().length;
    })
    .filter((value) => value === 0).length;
  return checkValidation > 0 ? false : true;
}
