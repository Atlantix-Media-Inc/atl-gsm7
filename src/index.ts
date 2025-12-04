import { GSM7_CHARS, GSM7_CHARS_EXTENDED, KNOWN_CHAR_TO_GSM_MAP } from "./constants";

/**
 * Encode a string to GSM7
 * @param text - The text to encode
 * @param allowExtended - Whether to allow extended characters
 * @returns The encoded text
 */
const encodeGSM7 = (text: string, allowExtended = true) => {
  const allowedArray = [];
  for (const char of text) {
    if(GSM7_CHARS.includes(char) || (allowExtended && GSM7_CHARS_EXTENDED.includes(char))) {
      allowedArray.push(char);
      continue;
    }
    if (KNOWN_CHAR_TO_GSM_MAP[char as keyof typeof KNOWN_CHAR_TO_GSM_MAP]) {
      allowedArray.push(KNOWN_CHAR_TO_GSM_MAP[char as keyof typeof KNOWN_CHAR_TO_GSM_MAP]);
      continue;
    }
  }
  return allowedArray.join('');
}

/**
 * Get non GSM7 characters from a string
 * @param text - The text to check
 * @returns The non GSM7 characters
 */
const getNonGsm7Chars = (text: string): string => {
  let nonGsm7Char = "";
  for (const char of text) {
    if(!GSM7_CHARS.includes(char) && !GSM7_CHARS_EXTENDED.includes(char)) {
      nonGsm7Char += char;
    }
  }
  return nonGsm7Char;
}

export {getNonGsm7Chars, encodeGSM7}
