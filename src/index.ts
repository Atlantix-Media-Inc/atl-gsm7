import { GSM7_CHARS, GSM7_CHARS_EXTENDED, KNOWN_CHAR_TO_GSM_MAP } from "./constants";

export default function encodeGSM7(text: string, allowExtended = true) {
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


// console.log(fillDynamicValues("{$cleanFirstName} {$messageName}", leaddata ,'', message.messageName));
// leaddata.firstName= "first Name"
// console.log(fillDynamicValues("{$firstName} ::: {$cleanFirstName}", leaddata ,'', message.messageName));
// leaddata.firstName = "ĂŃĎŘĒŞ alcaraz"
// console.log(fillDynamicValues("{$firstName} ::: {$cleanFirstName}", leaddata ,'', message.messageName));
// leaddata.firstName = "PĂŘimŁ donga"
// console.log(fillDynamicValues("{$firstName} ::: {$cleanFirstName}", leaddata ,'', message.messageName));
// leaddata.firstName = "PǻŘimŁ donga"
// console.log(fillDynamicValues("{$firstName} ::: {$cleanFirstName}", leaddata ,'', message.messageName));
