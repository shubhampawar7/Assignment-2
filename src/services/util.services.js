export function classNames() {
  let classString = "";
  for (const argument of arguments) {
    if (argument) {
      if (classString === "") {
        classString = `${argument}`;
      } else {
        classString = classString + ` ${argument}`;
      }
    }
  }

  return classString;
}
