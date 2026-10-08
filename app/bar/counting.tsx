import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHeader,
  TableHead,
} from "@/components/ui/table";

export const Counting = () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>Taal</TableHead>
        <TableHead>0 t/m 10</TableHead>
        <TableHead>11 t/m 20</TableHead>
        <TableHead>30 t/m 90</TableHead>
        <TableHead>100 / 1000</TableHead>
        <TableHead>LET OP!</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell>Engels</TableCell>
        <TableCell>
          zero, one, two, three, four, five, six, seven, eight, nine, ten
        </TableCell>
        <TableCell>
          eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen,
          eighteen, nineteen, twenty
        </TableCell>
        <TableCell>
          thirty, forty, fifty, sixty, seventy, eighty, ninet
        </TableCell>
        <TableCell>hundred / thousand</TableCell>
        <TableCell>
          twenty-one (tiental eerst). Let op: thirty/forty/fifty zijn
          onregelmatig
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Duits</TableCell>
        <TableCell>
          null, eins, zwei, drei, vier, fünf, sechs, sieben, acht, neun, zehn
        </TableCell>
        <TableCell>
          elf, zwölf, dreizehn, vierzehn, fünfzehn, sechzehn, siebzehn,
          achtzehn, neunzehn, zwanzig
        </TableCell>
        <TableCell>
          dreißig, vierzig, fünfzig, sechzig, siebzig, achtzig, neunzi
        </TableCell>
        <TableCell>hundert / tausend</TableCell>
        <TableCell>
          einundzwanzig (één- en-twintig, net als Nederlands)
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Frans</TableCell>
        <TableCell>
          zéro, un, deux, trois, quatre, cinq, six, sept, huit, neuf, dix
        </TableCell>
        <TableCell>
          onze, douze, treize, quatorze, quinze, seize, dix- sept, dix-huit,
          dix- neuf, vingt
        </TableCell>
        <TableCell>
          trente, quarante, cinquante, soixante, soixante-dix (70),
          quatre-vingts (80), quatre-vingt-dix (90)
        </TableCell>
        <TableCell>cent / mille</TableCell>
        <TableCell>
          vingt et un (21), vingt-deux (22). Let op: 70 = 60+10, 80 = 4×20, 90 =
          4×20+10
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Spaans</TableCell>
        <TableCell>
          cero, uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez
        </TableCell>
        <TableCell>
          once, doce, trece, catorce, quince, dieciséis, diecisiete, dieciocho,
          diecinueve, veinte
        </TableCell>
        <TableCell>
          treinta, cuarenta, cincuenta, sesenta, setenta, ochenta, noventa
        </TableCell>
        <TableCell>cien / mil </TableCell>
        <TableCell>
          veintiuno (21, aan elkaar), treinta y uno (31, met &quot;y&quot;").
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Italiaans</TableCell>
        <TableCell>
          zero, uno, due, tre, quattro, cinque, sei, sette, otto, nove, dieci
        </TableCell>
        <TableCell>
          undici, dodici, tredici, quattordici, quindici, sedici, diciassette,
          diciotto, diciannove, venti
        </TableCell>
        <TableCell>
          trenta, quaranta, cinquanta, sessanta, settanta, ottanta, novanta
        </TableCell>
        <TableCell>cento / mille</TableCell>
        <TableCell>
          ventuno (21), ventidue (22), trentuno (31). Alles aan elkaar, de
          laatste klinker van het tiental valt weg bij 1 en 8
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Portugees</TableCell>
        <TableCell>
          zero, um, dois, três, quatro, cinco, seis, sete, oito, nove, dez
        </TableCell>
        <TableCell>
          onze, doze, treze, catorze, quinze, dezasseis, dezassete, dezoito,
          dezanove, vinte
        </TableCell>
        <TableCell>
          trinta, quarenta, cinquenta, sessenta, setenta, oitenta, noventa
        </TableCell>
        <TableCell>cem / mil </TableCell>
        <TableCell>vinte e um (tiental + &quot;e&quot; + eenheid)</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Turks</TableCell>
        <TableCell>
          sıfır, bir, iki, üç, dört, beş, altı, yedi, sekiz, dokuz, on
        </TableCell>
        <TableCell>
          on bir, on iki, on üç, on dört, on beş, on altı, on yedi, on sekiz, on
          dokuz, yirmi
        </TableCell>
        <TableCell>otuz, kırk, elli, altmış, yetmiş, seksen, doksan</TableCell>
        <TableCell>yüz / bin </TableCell>
        <TableCell>
          yirmi bir (tiental + eenheid, los van elkaar). Heel regelmatig
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Pools</TableCell>
        <TableCell>
          zero, jeden, dwa, trzy, cztery, pięć, sześć, siedem, osiem, dziewięć,
          dziesięć
        </TableCell>
        <TableCell>
          jedenaście, dwanaście, trzynaście, czternaście, piętnaście,
          szesnaście, siedemnaście, osiemnaście, dziewiętnaście, dwadzieścia
        </TableCell>
        <TableCell>
          trzydzieści, czterdzieści, pięćdziesiąt, sześćdziesiąt,
          siedemdziesiąt, osiemdziesiąt, dziewięćdziesiąt
        </TableCell>
        <TableCell>sto / tysiąc</TableCell>
        <TableCell>
          dwadzieścia jeden (tiental + eenheid, los van elkaar)
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Zweeds</TableCell>
        <TableCell>
          noll, ett, två, tre, fyra, fem, sex, sju, åtta, nio, tio
        </TableCell>
        <TableCell>
          elva, tolv, tretton, fjorton, femton, sexton, sjutton, arton, nitton,
          tjugo
        </TableCell>
        <TableCell>
          trettio, fyrtio, femtio, sextio, sjuttio, åttio, nittio
        </TableCell>
        <TableCell>hundra / tusen</TableCell>
        <TableCell>
          tjugoett (tiental + eenheid, aan elkaar). Heel regelmatig
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Noors</TableCell>
        <TableCell>
          null, en, to, tre, fire, fem, seks, sju, åtte, ni, ti
        </TableCell>
        <TableCell>
          elleve, tolv, tretten, fjorten, femten, seksten, sytten, atten,
          nitten, tjue
        </TableCell>
        <TableCell>tretti, førti, femti, seksti, sytti, åtti, nitti</TableCell>
        <TableCell>hundre / tusen</TableCell>
        <TableCell>
          tjueen (tiental + eenheid, aan elkaar). Heel regelmatig
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Deens</TableCell>
        <TableCell>
          nul, en, to, tre, fire, fem, seks, syv, otte, ni, ti
        </TableCell>
        <TableCell>
          elleve, tolv, tretten, fjorten, femten, seksten, sytten, atten,
          nitten, tyve
        </TableCell>
        <TableCell>
          tredive, fyrre, halvtreds (50), tres (60), halvfjerds (70), firs (80),
          halvfems (90)
        </TableCell>
        <TableCell>hundrede / tusind</TableCell>
        <TableCell>
          enogtyve (één-en- twintig). Let op: 50 t/m 90 zijn halve
          twintigtallen: halvtreds = 2,5×20, halvfjerds = 3,5×20, halvfems =
          4,5×20
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Fins</TableCell>
        <TableCell>
          nolla, yksi, kaksi, kolme, neljä, viisi, kuusi, seitsemän, kahdeksan,
          yhdeksän, kymmenen
        </TableCell>
        <TableCell>
          yksitoista, kaksitoista, kolmetoista, neljätoista, viisitoista,
          kuusitoista, seitsemäntoista, kahdeksantoista, yhdeksäntoista,
          kaksikymmentä
        </TableCell>
        <TableCell>
          kolmekymmentä, neljäkymmentä, viisikymmentä, kuusikymmentä,
          seitsemänkymmentä, kahdeksankymmentä, yhdeksänkymmentä
        </TableCell>
        <TableCell>sata / tuhat</TableCell>
        <TableCell>
          kaksikymmentäyksi (twee-tien-een). Handig: 11 t/m 19 = eenheid +
          "toista" , tientallen = eenheid + "kymmentä"
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
);
