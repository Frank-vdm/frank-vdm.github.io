export const classNames = (
  ...classnames: Array<string | undefined | false>
): string | undefined => {
  //@ts-ignore because this should work no problem the first check will return true only if the value is a string, if its false or undefined the only response are strings of undefined
  return classnames.reduce(
    (c1, c2) => (c1 ? (c2 ? `${c1} ${c2} ` : c1) : c2 ? `${c2} ` : undefined),
    '',
  )
}
