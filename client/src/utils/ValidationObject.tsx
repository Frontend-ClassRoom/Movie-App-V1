//
export function validation<T>(obj: T) {
  const checkValidation = Object.values(obj)
    .map((value) => {
      return value.trim().length;
    })
    .find((value: number) => value === 0);
  return checkValidation === 0 ? false : true;
}
