/** CSS Modules interop: class names become a string-keyed record. */
declare module '*.module.css' {
  const classes: Record<string, string>
  export default classes
}
