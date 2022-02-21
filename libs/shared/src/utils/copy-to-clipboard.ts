export const copyToClipboard = (text: string, onSuccess?: () => void, onFail?: () => void) => {
  return navigator.clipboard.writeText(text).then(onSuccess, onFail);
};
