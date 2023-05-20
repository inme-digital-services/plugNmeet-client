export type SupportedLangs = {
  name: string;
  code: string;
};

const supportedSpeechToTextLangs = [
  { name: 'Afrikaans', code: 'af-ZA' },
  { name: 'Amharic', code: 'am-ET' },
  { name: 'Arabic', code: 'ar-SA' },
  { name: 'Azerbaijani', code: 'az-AZ' },
  { name: 'Bulgarian', code: 'bg-BG' },
  { name: 'Bengali (india)', code: 'bn-IN' },
  { name: 'Bosnian', code: 'bs-BA' },
  { name: 'Catalan', code: 'ca-ES' },
  { name: 'Czech', code: 'cs-CZ' },
  { name: 'Welsh', code: 'cy-GB' },
  { name: 'Greek', code: 'el-GR' },
  { name: 'Greek', code: 'el-GR' },
  { name: 'English (Australia)', code: 'en-AU' },
  { name: 'English (US)', code: 'en-US' },
  { name: 'English (UK)', code: 'en-GB' },
  { name: 'Spanish (Spain)', code: 'es-ES' },
  { name: 'Spanish (Mexico)', code: 'es-MX' },
  { name: 'Estonian', code: 'et-EE' },
  { name: 'Basque', code: 'eu-ES' },
  { name: 'Persian', code: 'fa-IR' },
  { name: 'Finnish', code: 'fi-FI' },
  { name: 'Filipino', code: 'fil-PH' },
  { name: 'Irish', code: 'ga-IE' },
  { name: 'Galician', code: 'gl-ES' },
  { name: 'Hebrew', code: 'he-IL' },
  { name: 'Hindi (India)', code: 'hi-IN' },
  { name: 'Croatian', code: 'hr-HR' },
  { name: 'Armenian', code: 'hy-AM' },
  { name: 'Indonesian', code: 'id-ID' },
  { name: 'Indonesian', code: 'id-ID' },
  { name: 'Icelandic', code: 'is-IS' },
  { name: 'Japanese', code: 'ja-JP' },
  { name: 'Javanese', code: 'jv-ID' },
  { name: 'Georgian', code: 'ka-GE' },
  { name: 'Kazakh', code: 'kk-KZ' },
  { name: 'Khmer', code: 'km-KH' },
  { name: 'Korean', code: 'ko-KR' },
  { name: 'Lao', code: 'lo-LA' },
  { name: 'Lithuanian', code: 'lt-LT' },
  { name: 'Latvian', code: 'lv-LV' },
  { name: 'Macedonian', code: 'mk-MK' },
  { name: 'Mongolian', code: 'mn-MN' },
  { name: 'Malay', code: 'ms-MY' },
  { name: 'Maltese', code: 'mt-MT' },
  { name: 'Burmese', code: 'my-MM' },
  { name: 'Norwegian Bokmål', code: 'nb-NO' },
  { name: 'Nepali', code: 'ne-NP' },
  { name: 'Dutch', code: 'nl-NL' },
  { name: 'Polish', code: 'pl-PL' },
  { name: 'Pashto', code: 'ps-AF' },
  { name: 'Portuguese', code: 'pt-BR' },
  { name: 'Romanian', code: 'ro-RO' },
  { name: 'Russian', code: 'ru-RU' },
  { name: 'Sinhala', code: 'si-LK' },
  { name: 'Slovak', code: 'sk-SK' },
  { name: 'Slovenian', code: 'sl-SI' },
  { name: 'Somali', code: 'so-SO' },
  { name: 'Albanian', code: 'sq-AL' },
  { name: 'Serbian', code: 'sr-RS' },
  { name: 'Swedish', code: 'sv-SE' },
  { name: 'Swahili', code: 'sw-KE' },
  { name: 'Thai', code: 'th-TH' },
  { name: 'Turkish', code: 'tr-TR' },
  { name: 'Ukrainian', code: 'uk-UA' },
  { name: 'Uzbek', code: 'uz-UZ' },
  { name: 'Vietnamese', code: 'vi-VN' },
  { name: 'Chinese (Mandarin, Simplified)', code: 'zh-CN' },
  { name: 'Chinese (Taiwanese Mandarin)', code: 'zh-TW' },
  { name: 'Zulu', code: 'zu-ZA' },
  { name: 'Danish', code: 'da-DK' },
  { name: 'German', code: 'de-DE' },
  { name: 'French', code: 'fr-FR' },
  { name: 'Italian', code: 'it-IT' },
];

const supportedTranslationLangs = [
  { name: 'Afrikaans', code: 'af' },
  { name: 'Albanian', code: 'sq' },
  { name: 'Amharic', code: 'am' },
  { name: 'Arabic', code: 'ar' },
  { name: 'Armenian', code: 'hy' },
  { name: 'Assamese', code: 'as' },
  { name: 'Azerbaijani', code: 'az' },
  { name: 'Bangla', code: 'bn' },
  { name: 'Bosnian', code: 'bs' },
  { name: 'Bulgarian', code: 'bg' },
  { name: 'Cantonese', code: 'yue' },
  { name: 'Catalan', code: 'ca' },
  { name: 'Chinese Simplified', code: 'zh-Hans' },
  { name: 'Chinese Traditional', code: 'zh-Hant' },
  { name: 'Croatian', code: 'hr' },
  { name: 'Czech', code: 'cs' },
  { name: 'Danish', code: 'da' },
  { name: 'Dari', code: 'prs' },
  { name: 'Dutch', code: 'nl' },
  { name: 'English', code: 'en' },
  { name: 'Estonian', code: 'et' },
  { name: 'Fijian', code: 'fj' },
  { name: 'Filipino', code: 'fil' },
  { name: 'Finnish', code: 'fi' },
  { name: 'French', code: 'fr' },
  { name: 'German', code: 'de' },
  { name: 'Greek', code: 'el' },
  { name: 'Haitian Creole', code: 'ht' },
  { name: 'Hebrew', code: 'he' },
  { name: 'Hindi', code: 'hi' },
  { name: 'Hmong Daw', code: 'mww' },
  { name: 'Hungarian', code: 'hu' },
  { name: 'Icelandic', code: 'is' },
  { name: 'Indonesian', code: 'id' },
  { name: 'Inuktitut', code: 'iu' },
  { name: 'Irish', code: 'ga' },
  { name: 'Italian', code: 'it' },
  { name: 'Japanese', code: 'ja' },
  { name: 'Kannada', code: 'kn' },
  { name: 'Kazakh', code: 'kk' },
  { name: 'Khmer', code: 'km' },
  { name: 'Klingon', code: 'tlh-Latn' },
  { name: 'Korean', code: 'ko' },
  { name: 'Kurdish', code: 'ku' },
  { name: 'Lao', code: 'lo' },
  { name: 'Latvian', code: 'lv' },
  { name: 'Lithuanian', code: 'lt' },
  { name: 'Malagasy', code: 'mg' },
  { name: 'Malay', code: 'ms' },
  { name: 'Malayalam', code: 'ml' },
  { name: 'Maltese', code: 'mt' },
  { name: 'Maori', code: 'mi' },
  { name: 'Marathi', code: 'mr' },
  { name: 'Myanmar', code: 'my' },
  { name: 'Nepali', code: 'ne' },
  { name: 'Norwegian', code: 'nb' },
  { name: 'Odia', code: 'or' },
  { name: 'Pashto', code: 'ps' },
  { name: 'Persian', code: 'fa' },
  { name: 'Polish', code: 'pl' },
  { name: 'Portuguese', code: 'pt' },
  { name: 'Punjabi', code: 'pa' },
  { name: 'Queretaro Otomi', code: 'otq' },
  { name: 'Romanian', code: 'ro' },
  { name: 'Russian', code: 'ru' },
  { name: 'Samoan', code: 'sm' },
  { name: 'Serbian', code: 'sr-Cyrl' },
  { name: 'Slovak', code: 'sk' },
  { name: 'Slovenian', code: 'sl' },
  { name: 'Spanish', code: 'es' },
  { name: 'Swahili', code: 'sw' },
  { name: 'Swedish', code: 'sv' },
  { name: 'Tahitian', code: 'ty' },
  { name: 'Tamil', code: 'ta' },
  { name: 'Telugu', code: 'te' },
  { name: 'Thai', code: 'th' },
  { name: 'Tigrinya', code: 'ti' },
  { name: 'Tongan', code: 'to' },
  { name: 'Turkish', code: 'tr' },
  { name: 'Ukrainian', code: 'uk' },
  { name: 'Urdu', code: 'ur' },
  { name: 'Vietnamese', code: 'vi' },
  { name: 'Welsh', code: 'cy' },
  { name: 'Yucatec Maya	', code: 'yua' },
];

export { supportedSpeechToTextLangs, supportedTranslationLangs };
