export class AutoFillConstants {
  static readonly IdentityAttributes: string[] = [
    "autoCompleteType",
    "data-stripe",
    "htmlName",
    "htmlID",
    "label-tag",
    "placeholder",
    "label-left",
    "label-top",
    "data-recurly",
  ];

  static readonly UsernameFieldNames: string[] = [
    // English
    "username",
    "user name",
    "email",
    "email address",
    "e-mail",
    "e-mail address",
    "userid",
    "user id",
    "customer id",
    "login id",
    // German
    "benutzername",
    "benutzer name",
    "email adresse",
    "e-mail adresse",
    "benutzerid",
    "benutzer id",
  ];

  static readonly FirstnameFieldNames: string[] = [
    // English
    "f-name",
    "first-name",
    "given-name",
    "first-n",
    // German
    "vorname",
  ];

  static readonly LastnameFieldNames: string[] = [
    // English
    "l-name",
    "last-name",
    "s-name",
    "surname",
    "family-name",
    "family-n",
    "last-n",
    // German
    "nachname",
    "familienname",
  ];

  static readonly ExcludedAutofillTypes: string[] = [
    "radio",
    "checkbox",
    "hidden",
    "file",
    "button",
    "image",
    "reset",
    "search",
  ];

  static readonly OperationDelays = new Map<string, number>([["buzzsprout.com", 100]]);

  static readonly IsoCountries: { [id: string]: string } = {
    afghanistan: "AF",
    "aland islands": "AX",
    albania: "AL",
    algeria: "DZ",
    "american samoa": "AS",
    andorra: "AD",
    angola: "AO",
    anguilla: "AI",
    antarctica: "AQ",
    "antigua and barbuda": "AG",
    argentina: "AR",
    armenia: "AM",
    aruba: "AW",
    australia: "AU",
    austria: "AT",
    azerbaijan: "AZ",
    bahamas: "BS",
    bahrain: "BH",
    bangladesh: "BD",
    barbados: "BB",
    belarus: "BY",
    belgium: "BE",
    belize: "BZ",
    benin: "BJ",
    bermuda: "BM",
    bhutan: "BT",
    bolivia: "BO",
    "bosnia and herzegovina": "BA",
    botswana: "BW",
    "bouvet island": "BV",
    brazil: "BR",
    "british indian ocean territory": "IO",
    "brunei darussalam": "BN",
    bulgaria: "BG",
    "burkina faso": "BF",
    burundi: "BI",
    cambodia: "KH",
    cameroon: "CM",
    canada: "CA",
    "cape verde": "CV",
    "cayman islands": "KY",
    "central african republic": "CF",
    chad: "TD",
    chile: "CL",
    china: "CN",
    "christmas island": "CX",
    "cocos (keeling) islands": "CC",
    colombia: "CO",
    comoros: "KM",
    congo: "CG",
    "congo, democratic republic": "CD",
    "cook islands": "CK",
    "costa rica": "CR",
    "cote d'ivoire": "CI",
    croatia: "HR",
    cuba: "CU",
    cyprus: "CY",
    "czech republic": "CZ",
    denmark: "DK",
    djibouti: "DJ",
    dominica: "DM",
    "dominican republic": "DO",
    ecuador: "EC",
    egypt: "EG",
    "el salvador": "SV",
    "equatorial guinea": "GQ",
    eritrea: "ER",
    estonia: "EE",
    ethiopia: "ET",
    "falkland islands": "FK",
    "faroe islands": "FO",
    fiji: "FJ",
    finland: "FI",
    france: "FR",
    "french guiana": "GF",
    "french polynesia": "PF",
    "french southern territories": "TF",
    gabon: "GA",
    gambia: "GM",
    georgia: "GE",
    germany: "DE",
    ghana: "GH",
    gibraltar: "GI",
    greece: "GR",
    greenland: "GL",
    grenada: "GD",
    guadeloupe: "GP",
    guam: "GU",
    guatemala: "GT",
    guernsey: "GG",
    guinea: "GN",
    "guinea-bissau": "GW",
    guyana: "GY",
    haiti: "HT",
    "heard island & mcdonald islands": "HM",
    "holy see (vatican city state)": "VA",
    honduras: "HN",
    "hong kong": "HK",
    hungary: "HU",
    iceland: "IS",
    india: "IN",
    indonesia: "ID",
    "iran, islamic republic of": "IR",
    iraq: "IQ",
    ireland: "IE",
    "isle of man": "IM",
    israel: "IL",
    italy: "IT",
    jamaica: "JM",
    japan: "JP",
    jersey: "JE",
    jordan: "JO",
    kazakhstan: "KZ",
    kenya: "KE",
    kiribati: "KI",
    "republic of korea": "KR",
    "south korea": "KR",
    "democratic people's republic of korea": "KP",
    "north korea": "KP",
    kuwait: "KW",
    kyrgyzstan: "KG",
    "lao people's democratic republic": "LA",
    latvia: "LV",
    lebanon: "LB",
    lesotho: "LS",
    liberia: "LR",
    "libyan arab jamahiriya": "LY",
    liechtenstein: "LI",
    lithuania: "LT",
    luxembourg: "LU",
    macao: "MO",
    macedonia: "MK",
    madagascar: "MG",
    malawi: "MW",
    malaysia: "MY",
    maldives: "MV",
    mali: "ML",
    malta: "MT",
    "marshall islands": "MH",
    martinique: "MQ",
    mauritania: "MR",
    mauritius: "MU",
    mayotte: "YT",
    mexico: "MX",
    "micronesia, federated states of": "FM",
    moldova: "MD",
    monaco: "MC",
    mongolia: "MN",
    montenegro: "ME",
    montserrat: "MS",
    morocco: "MA",
    mozambique: "MZ",
    myanmar: "MM",
    namibia: "NA",
    nauru: "NR",
    nepal: "NP",
    netherlands: "NL",
    "netherlands antilles": "AN",
    "new caledonia": "NC",
    "new zealand": "NZ",
    nicaragua: "NI",
    niger: "NE",
    nigeria: "NG",
    niue: "NU",
    "norfolk island": "NF",
    "northern mariana islands": "MP",
    norway: "NO",
    oman: "OM",
    pakistan: "PK",
    palau: "PW",
    "palestinian territory, occupied": "PS",
    panama: "PA",
    "papua new guinea": "PG",
    paraguay: "PY",
    peru: "PE",
    philippines: "PH",
    pitcairn: "PN",
    poland: "PL",
    portugal: "PT",
    "puerto rico": "PR",
    qatar: "QA",
    reunion: "RE",
    romania: "RO",
    "russian federation": "RU",
    rwanda: "RW",
    "saint barthelemy": "BL",
    "saint helena": "SH",
    "saint kitts and nevis": "KN",
    "saint lucia": "LC",
    "saint martin": "MF",
    "saint pierre and miquelon": "PM",
    "saint vincent and grenadines": "VC",
    samoa: "WS",
    "san marino": "SM",
    "sao tome and principe": "ST",
    "saudi arabia": "SA",
    senegal: "SN",
    serbia: "RS",
    seychelles: "SC",
    "sierra leone": "SL",
    singapore: "SG",
    slovakia: "SK",
    slovenia: "SI",
    "solomon islands": "SB",
    somalia: "SO",
    "south africa": "ZA",
    "south georgia and sandwich isl.": "GS",
    spain: "ES",
    "sri lanka": "LK",
    sudan: "SD",
    suriname: "SR",
    "svalbard and jan mayen": "SJ",
    swaziland: "SZ",
    sweden: "SE",
    switzerland: "CH",
    "syrian arab republic": "SY",
    taiwan: "TW",
    tajikistan: "TJ",
    tanzania: "TZ",
    thailand: "TH",
    "timor-leste": "TL",
    togo: "TG",
    tokelau: "TK",
    tonga: "TO",
    "trinidad and tobago": "TT",
    tunisia: "TN",
    turkey: "TR",
    turkmenistan: "TM",
    "turks and caicos islands": "TC",
    tuvalu: "TV",
    uganda: "UG",
    ukraine: "UA",
    "united arab emirates": "AE",
    "united kingdom": "GB",
    "united states": "US",
    "united states outlying islands": "UM",
    uruguay: "UY",
    uzbekistan: "UZ",
    vanuatu: "VU",
    venezuela: "VE",
    vietnam: "VN",
    "virgin islands, british": "VG",
    "virgin islands, u.s.": "VI",
    "wallis and futuna": "WF",
    "western sahara": "EH",
    yemen: "YE",
    zambia: "ZM",
    zimbabwe: "ZW",
  };

  static readonly IsoStates: { [id: string]: string } = {
    alabama: "AL",
    alaska: "AK",
    "american samoa": "AS",
    arizona: "AZ",
    arkansas: "AR",
    california: "CA",
    colorado: "CO",
    connecticut: "CT",
    delaware: "DE",
    "district of columbia": "DC",
    "federated states of micronesia": "FM",
    florida: "FL",
    georgia: "GA",
    guam: "GU",
    hawaii: "HI",
    idaho: "ID",
    illinois: "IL",
    indiana: "IN",
    iowa: "IA",
    kansas: "KS",
    kentucky: "KY",
    louisiana: "LA",
    maine: "ME",
    "marshall islands": "MH",
    maryland: "MD",
    massachusetts: "MA",
    michigan: "MI",
    minnesota: "MN",
    mississippi: "MS",
    missouri: "MO",
    montana: "MT",
    nebraska: "NE",
    nevada: "NV",
    "new hampshire": "NH",
    "new jersey": "NJ",
    "new mexico": "NM",
    "new york": "NY",
    "north carolina": "NC",
    "north dakota": "ND",
    "northern mariana islands": "MP",
    ohio: "OH",
    oklahoma: "OK",
    oregon: "OR",
    palau: "PW",
    pennsylvania: "PA",
    "puerto rico": "PR",
    "rhode island": "RI",
    "south carolina": "SC",
    "south dakota": "SD",
    tennessee: "TN",
    texas: "TX",
    utah: "UT",
    vermont: "VT",
    "virgin islands": "VI",
    virginia: "VA",
    washington: "WA",
    "west virginia": "WV",
    wisconsin: "WI",
    wyoming: "WY",
  };

  static readonly IsoProvinces: { [id: string]: string } = {
    alberta: "AB",
    "british columbia": "BC",
    manitoba: "MB",
    "new brunswick": "NB",
    "newfoundland and labrador": "NL",
    "nova scotia": "NS",
    ontario: "ON",
    "prince edward island": "PE",
    quebec: "QC",
    saskatchewan: "SK",
  };
}

export class CreditCardAutoFillConstants {
  static readonly CardAttributes: string[] = [
    "autoCompleteType",
    "data-stripe",
    "htmlName",
    "htmlID",
    "label-tag",
    "placeholder",
    "label-left",
    "label-top",
    "data-recurly",
  ];

  static readonly CardAttributesExtended: string[] = [
    ...CreditCardAutoFillConstants.CardAttributes,
    "label-right",
  ];

  // Each index represents a language. These three arrays should all be the same length.
  // 0: English, 1: Danish, 2: German/Dutch, 3: French/Spanish/Italian, 4: Russian, 5: Portuguese
  static readonly MonthAbbr = ["mm", "mm", "mm", "mm", "mm", "mm"];
  static readonly YearAbbrShort = ["yy", "åå", "jj", "aa", "гг", "rr"];
  static readonly YearAbbrLong = ["yyyy", "åååå", "jjjj", "aa", "гггг", "rrrr"];
}
