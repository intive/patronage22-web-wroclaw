/**
 * @property {number} limit - Indicates the number of items to be return
 * @property {number} offset - Indicates the number of items that should be skipped
 * @property {number} minMatch - The minimum number of chars in search string to trigger search
 * @property {number} maxLength - Maximum number of characters that can be entered into input
 */
export const SEARCH_CONFIG = Object.freeze({
  limit: 5,
  offset: 0,
  minMatch: 3,
  maxLength: 30
});
