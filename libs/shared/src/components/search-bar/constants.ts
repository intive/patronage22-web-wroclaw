/**
 * @argument minMath: The minimum number of chars in search string to trigger search
 * @argument limit: indicates the number of items to be return
 * @argument offset: indicates the number of items that should be skipped
 * @argument SEARCH_MAX_LENGTH: maximum number of characters that can be entered into input
 * @argument maxValidationLength: @argument SEARCH_MAX_LENGTH reduced by 1 to show error message
 */

const SEARCH_MAX_LENGTH = 30;

export const SEARCH_CONFIG = {
  limit: 5,
  offset: 0,
  minMatch: 3,
  maxLength: SEARCH_MAX_LENGTH,
  maxValidationLength: SEARCH_MAX_LENGTH - 1
};
