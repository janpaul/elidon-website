export type AnyObject = { [key: string]: any };

export function flattenObject(obj: AnyObject, prefix: string = ``): AnyObject {
  return obj
    ? Object.keys(obj).reduce((acc: AnyObject, key: string) => {
        const pre = prefix.length ? prefix + `.` : ``;
        if (
          typeof obj[key] === `object` &&
          obj[key] !== null &&
          !Array.isArray(obj[key])
        ) {
          Object.assign(acc, flattenObject(obj[key], pre + key));
        } else {
          acc[pre + key] = obj[key];
        }
        return acc;
      }, {})
    : {};
}
