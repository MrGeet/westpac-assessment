export const hasNumber = (str: string) => {
  return /\d/.test(str);
};

export const hasTwoSpecialCharacters = (str: string) => {
  const specialChars = /[!@#$%^&*()\-=_+[\]{};':"\\|,.<>/?]/g;
  const matches = str.match(specialChars);
  return matches && matches.length >= 2;
};
