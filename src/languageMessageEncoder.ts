import { CaesarCipher } from "./contracts/implemented/caesarCipher";
import { PartialMessageEncoder } from "./contracts/implemented/partialMessageEncoder";
import { Language } from "./contracts/language";
import { MessageEncoder } from "./contracts/messageEncoder";

export class LanguageMessageEncoder<
    TLang extends Language,
    TCipher extends CaesarCipher<TLang>
  >
  extends PartialMessageEncoder
  implements MessageEncoder
{
  private encodedCount = 0;
  private decodedCount = 0;

  constructor(lang: TLang, cipher: TCipher) {
    super(lang, cipher);
  }

  public encodeMessage(secretMessage: unknown) {
    if (typeof secretMessage !== "string" || secretMessage.length === 0) {
      return "No message.";
    }

    const strippedMessage = this.stripForbiddenSymbols(secretMessage);

    const isCompatible = this.language.isCompatibleToCharset(strippedMessage);

    if (!isCompatible) {
      return "Message not compatible.";
    }

    const encodeMessage = this.cipher.encipher(strippedMessage);
    this.encodedCount += encodeMessage.length;
    return encodeMessage;
  }

  public decodeMessage(secretMessage: unknown): string {
    if (typeof secretMessage !== "string" || secretMessage.length === 0) {
      return "No message.";
    }
    const isCompatible = this.language.isCompatibleToCharset(secretMessage);

    if (!isCompatible) {
      return "Message not compatible.";
    }

    const decodedMessage = this.cipher.decipher(secretMessage);
    this.decodedCount += decodedMessage.length;
    return decodedMessage;
  }
}
