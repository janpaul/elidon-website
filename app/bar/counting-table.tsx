import { TableRow, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import type { Language } from "@/app/bar/types";
import { counting, countingColumns } from "@/app/bar/counting";
import { speak, price } from "@/app/bar/speak";

type Props = {
  language: Language;
};

export const CountingTable = ({ language }: Props) => (
  <>
    {countingColumns.map((column) => {
      const items = counting[language][column].split(",");
      return (
        <TableRow key={column}>
          <TableCell>
            <div className="text-xs text-muted-foreground">{column}</div>
            {column === "21special" ? (
              <span>{items.join(" ")}</span>
            ) : (
              <div className="text-inherit flex flex-row gap-2">
                {items.map((item) => {
                  const isNumber = Number.isInteger(parseInt(item));
                  return (
                    <div key={item}>
                      <Button
                        variant="outline"
                        size="lg"
                        onClick={() => {
                          if (isNumber) {
                            speak(price(parseInt(item), language), language);
                          } else {
                            speak(item, language);
                          }
                        }}
                      >
                        {isNumber ? price(parseInt(item), language) : item}
                      </Button>
                    </div>
                  );
                })}
              </div>
            )}
          </TableCell>
        </TableRow>
      );
    })}
  </>
);
