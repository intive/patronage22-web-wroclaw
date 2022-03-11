const SEARCH_MAX_LENGTH = 30;

/**
 * @property {Object} SEARCH_CONFIG - The default values for searching functionality
 * @property {number} SEARCH_CONFIG.limit - Indicates the number of items to be return
 * @property {number} SEARCH_CONFIG.offset - Indicates the number of items that should be skipped
 * @property {number} SEARCH_CONFIG.minMatch - The minimum number of chars in search string to trigger search
 * @property {number} SEARCH_CONFIG.SEARCH_MAX_LENGTH - Maximum number of characters that can be entered into input
 * @property {number} SEARCH_CONFIG.maxValidationLength - SEARCH_MAX_LENGTH reduced by 1 to show error message
 */

export const SEARCH_CONFIG = Object.freeze({
  limit: 5,
  offset: 0,
  minMatch: 3,
  maxLength: SEARCH_MAX_LENGTH,
  maxValidationLength: SEARCH_MAX_LENGTH - 1
});
