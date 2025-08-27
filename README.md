## Atl GSM7 💬 ✨✨
This is a simple application to help us clean up string messages.
The idea is to generate clean messages that won't be wrongly formatted by messaging 
software.
 
### How to use it 🧑‍💻
In order to use this functions, u will have to:

### 1. Install package 📦️
```bash
  $ npm install atl-gsm7
```

### 2.1 Encoding strings 📱🏷️
```ts
import { encodeGSM7 } from 'atl-gsm7';

const originalMessage = 'ĂŃĎŘĒŞ alcaraz';
const encodedMessage = encodeGSM7(originalMessage); // ANDRÉS alcaraz

const regularMessage = 'regular text';
const encodedRegular = encodeGSM7(regularMessage); // regular text

// You can also disable extended characters
const encodedWithoutExtended = encodeGSM7(originalMessage, false);
```

### 2.2 Check if string is GSM7 compatible 🔍
```ts
import { getNonGsm7Chars } from 'atl-gsm7';

const message = 'Hello World! 🚀';
const nonGsm7Chars = getNonGsm7Chars(message); // Returns non-GSM7 characters

if (nonGsm7Chars.length > 0) {
  console.log(`Non-GSM7 characters found: ${nonGsm7Chars}`);
} else {
  console.log('Message is fully GSM7 compatible!');
}
```

### 3. Available Functions 📚

#### `encodeGSM7(text: string, allowExtended?: boolean): string`
Encodes a string to GSM7 format by:
- Keeping characters that are already GSM7 compatible
- Converting known characters to their GSM7 equivalents
- Removing characters that cannot be converted

**Parameters:**
- `text` (string): The text to encode
- `allowExtended` (boolean, optional): Whether to allow extended GSM7 characters. Defaults to `true`

**Returns:** The encoded text string

#### `getNonGsm7Chars(text: string): string`
Identifies characters in a string that are not GSM7 compatible.

**Parameters:**
- `text` (string): The text to check

**Returns:** A string containing all non-GSM7 characters found

### 4. Examples 💡

```ts
import { encodeGSM7, getNonGsm7Chars } from 'atl-gsm7';

// Example 1: Encoding accented characters
const spanishText = 'José María González';
const encoded = encodeGSM7(spanishText);
console.log(encoded); // "José María González"

// Example 2: Checking for non-GSM7 characters
const messageWithEmoji = 'Hello! How are you? 😊';
const nonCompatible = getNonGsm7Chars(messageWithEmoji);
console.log(nonCompatible); // "😊"

// Example 3: Encoding without extended characters
const textWithExtended = 'Price: €100';
const encodedBasic = encodeGSM7(textWithExtended, false);
console.log(encodedBasic); // "Price: 100" (€ removed)
```

That's it. ⚡️⚡️🚀🍻

Coded by [Atltantix Media Inc](https://github.com/Atlantix-Media-Inc) 📸
