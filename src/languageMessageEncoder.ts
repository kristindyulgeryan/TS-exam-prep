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
}
