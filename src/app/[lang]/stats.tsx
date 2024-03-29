import type { ReactNode } from "react";
import { getAge } from "@/lib";
import type { TranslateFn } from "@/lib";

type StatType = {
  name: string;
  value: ReactNode;
  unit?: string;
};
const _stats: StatType[] = [
  { name: `Age`, value: getAge("years"), unit: `years` },
  { name: `Age`, value: getAge("days"), unit: `days` },
  { name: `Ex-wives`, value: 2, unit: `sorry` },
  { name: `Kids`, value: 3, unit: `at_least` },
  { name: `Success rate`, value: `43.5%` },
];

type Props = {
  t: TranslateFn;
};

export const Stats = ({ t }: Props) => (
  <div className="bg-transparent">
    <div className="max-w-7xl">
      <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4">
        {_stats.map((stat, index) => (
          <div key={index} className="opacity-100 px-4 py-6 sm:px-6 lg:px-8">
            <p className="text-sm font-medium leading-6 text-gray-800 dark:text-gray-400">
              {stat.name}
            </p>
            <p className="mt-2 flex items-baseline gap-x-2">
              <span className="text-4xl font-semibold tracking-tight text-gray-800 dark:text-gray-400">
                {stat.value}
              </span>
              {stat.unit ? (
                <span className="text-sm text-gray-400">
                  {t(`common.${stat.unit}`)}
                </span>
              ) : null}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);
