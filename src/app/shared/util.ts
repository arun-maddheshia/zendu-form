export const noSpecialCharacters = (text: string, replaceString: string) => {
  return text.replace(/[^a-zA-Z0-9 ]/g, replaceString);
};
