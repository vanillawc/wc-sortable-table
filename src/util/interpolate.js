/* eslint-disable no-new-func */
/**
 * Interpolate a tagged template literal from the inputs
 *
 * @param {*} template the template literal string
 * @param {*} [tags] the tagged values in the template
 * @returns the template output with the tagged literals applied
 */
export default function interpolate (template, tags = {}) {
  const keys = Object.keys(tags);
  const values = Object.values(tags);
  return new Function(...keys, `return \`${template}\`;`)(...values);
}
