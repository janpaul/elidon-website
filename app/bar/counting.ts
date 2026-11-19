import { Language } from "@/app/bar/dict";

export const countingColumns = [
  "0-10",
  "11-20",
  "30-90",
  "100/1000",
  "21special",
] as const;
type CountingEntry = Record<(typeof countingColumns)[number], string>;

export const counting: Record<Language, CountingEntry> = {
  nl: {
    "0-10": "nul, een, twee, drie, vier, vijf, zes, zeven, acht, negen, tien",
    "11-20":
      "elf, twaalf, dertien, veertien, vijftien, zestien, zeventien, achttien, negentien, twintig",
    "30-90": "dertig, veertig, vijftig, zestig, zeventig, tachtig, negentig",
    "100/1000": "honderd, duizend",
    "21special": "eenentwintig",
  },
  en: {
    "0-10": "zero, one, two, three, four, five, six, seven, eight, nine, ten",
    "11-20":
      "eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty",
    "30-90": "thirty, forty, fifty, sixty, seventy, eighty, ninety",
    "100/1000": "hundred, thousand",
    "21special":
      "twenty-one (tiental eerst). Let op: thirty/forty/fifty zijn onregelmatig",
  },
  de: {
    "0-10":
      "null, eins, zwei, drei, vier, fünf, sechs, sieben, acht, neun, zehn",
    "11-20":
      "elf, zwölf, dreizehn, vierzehn, fünfzehn, sechzehn, siebzehn, achtzehn, neunzehn, zwanzig",
    "30-90": "dreißig, vierzig, fünfzig, sechzig, siebzig, achtzig, neunzig",
    "100/1000": "hundert, tausend",
    "21special": "einundzwanzig",
  },
  fr: {
    "0-10": "zéro, un, deux, trois, quatre, cinq, six, sept, huit, neuf, dix",
    "11-20":
      "onze, douze, treize, quatorze, quinze, seize, dix-sept, dix-huit, dix-neuf, vingt",
    "30-90":
      "trente, quarante, cinquante, soixante, soixante-dix, quatre-vingt, quatre-vingt-dix",
    "100/1000": "cent, mille",
    "21special":
      "vingt et un (21), vingt-deux (22). Let op: 70 = 60+10, 80 = 4×20, 90 = 4×20+10",
  },
  es: {
    "0-10":
      "cero, uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez",
    "11-20":
      "once, doce, trece, catorce, quince, dieciséis, diecisiete, dieciocho, diecinueve, veinte",
    "30-90": "treinta, cuarenta, cincuenta, sesenta, setenta, ochenta, noventa",
    "100/1000": "cien, mil",
    "21special": 'veintiuno (21, aan elkaar), treinta y uno (31, met "y")',
  },
  it: {
    "0-10":
      "zero, uno, due, tre, quattro, cinque, sei, sette, otto, nove, dieci",
    "11-20":
      "undici, dodici, tredici, quattordici, quindici, sedici, diciassette, diciotto, diciannove, venti",
    "30-90":
      "trenta, quaranta, cinquanta, sessanta, settanta, ottanta, novanta",
    "100/1000": "cento, mille",
    "21special":
      "ventuno (21), ventidue (22), trentuno (31). Alles aan elkaar, de laatste klinker van het tiental valt weg bij 1 en 8",
  },
  pt: {
    "0-10": "zero, um, dois, três, quatro, cinco, seis, sete, oito, nove, dez",
    "11-20":
      "onze, doze, treze, quatorze, quinze, dezesseis, dezessete, dezoito, dezenove, vinte",
    "30-90": "trinta, quarenta, cinquenta, sessenta, setenta, oitenta, noventa",
    "100/1000": "cem, mil",
    "21special": 'vinte e um (tiental + "e" + eenheid)',
  },
  tr: {
    "0-10": "sıfır bir iki üç dört beş altı yedi sekiz dokuz on",
    "11-20":
      "on bir, on iki, on üç, on dört, on beş, on altı, on yedi, on sekiz, on dokuz, yirmi",
    "30-90": "otuz, kırk, elli, altmış, yetmiş, seksen, doksan",
    "100/1000": "yüz, bin",
    "21special":
      "yirmi bir (tiental + eenheid, los van elkaar). Heel regelmatig",
  },
  pl: {
    "0-10":
      "zero, jeden, dwa, trzy, cztery, pięć, sześć, siedem, osiem, dziewięć, dziesięć",
    "11-20":
      "jedenaście, dwanaście, trzynaście, czternaście, piętnaście, szesnaście, siedemnaście, osiemnaście, dziewiętnaście, dwadzieścia",
    "30-90":
      "trzydzieści, czterdzieści, pięćdziesiąt, sześćdziesiąt, siedemdziesiąt, osiemdziesiąt, dziewięćdziesiąt",
    "100/1000": "sto, tysiąc",
    "21special":
      "dwadzieścia jeden (21), dwadzieścia dwa (22). Let op: 70 = 60+10, 80 = 4×20, 90 = 4×20+10",
  },
  dk: {
    "0-10": "nul, en, to, tre, fire, fem, seks, syv, otte, ni, ti",
    "11-20":
      "elleve, tolv, tretten, fjorten, femten, seksten, sytten, atten, nitten, tyve",
    "30-90": "tredive, fyrre, halvtreds, tres, halvfjerds, firs, halvfems",
    "100/1000": "hundrede, tusind",
    "21special":
      "enogtyve (één-en-twintig). Let op: 50 t/m 90 zijn halve twintigtallen: halvtreds = 2,5×20, halvfjerds = 3,5×20, firs = 4×20, halvfems = 4,5×20",
  },
  se: {
    "0-10": "noll, ett, två, tre, fyra, fem, sex, sju, åtta, nio, tio",
    "11-20":
      "elva, tolv, tretton, fjorton, femton, sexton, sjutton, arton, nitton, tjugo",
    "30-90": "trettio, fyrtio, femtio, sextio, sjuttio, åttio, nittio",
    "100/1000": "hundra, tusen",
    "21special": "tjugoett (tiental + eenheid, aan elkaar). Heel regelmatig",
  },
  no: {
    "0-10": "null en to tre fire fem seks sju åtte ni ti",
    "11-20":
      "elleve, tolv, tretten, fjorten, femten, seksten, sytten, atten, nitten, tjue",
    "30-90": "tretti, førti, femti, seksti, sytti, åtti, nitti",
    "100/1000": "hundre, tusen",
    "21special": "tjueen (tiental + eenheid, aan elkaar). Regelmatig",
  },
  fi: {
    "0-10":
      "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän kymmenen",
    "11-20":
      "yksitoista, kaksitoista, kolmetoista, neljätoista, viisitoista, kuusitoista, seitsemäntoista, kahdeksantoista, yhdeksäntoista, kaksikymmentä",
    "30-90":
      "kolmekymmentä, neljäkymmentä, viisikymmentä, kuusikymmentä, seitsemänkymmentä, kahdeksankymmentä, yhdeksänkymmentä",
    "100/1000": "sata, tuhat",
    "21special":
      'kaksikymmentäyksi (twee-tien-een). Handig: 11 t/m 19 = eenheid + "toista", tientallen = eenheid + "kymmentä"',
  },
};
