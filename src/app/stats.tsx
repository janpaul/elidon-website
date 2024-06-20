import { getAge } from "@/lib";

type StatType = {
  name: string;
  value: string | number;
  unit?: string;
};
const _stats: StatType[] = [
  { name: `Age`, value: getAge("years"), unit: `years` },
  { name: `Age`, value: getAge("days"), unit: `days` },
  // { name: `Age`, value: getAge("minutes"), unit: `minutes` },
  { name: `Ex-wives`, value: 2, unit: `(sorry)` },
  { name: `Kids`, value: 3, unit: `(at least)` },
  { name: `Success rate`, value: `${(Math.random() * 100).toFixed(1)}%` },
];

export const Stats = () => (
  <div className="bg-transparent">
    <div className="max-w-7xl">
      <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4">
        {_stats.map((stat, index) => (
          <div key={index} className="opacity-100 px-4 py-6 sm:px-6 lg:px-8">
            <p className="text-sm font-medium leading-6 text-gray-800 dark:text-gray-400">
              {stat.name}
            </p>
            <p className="mt-2 flex items-baseline gap-x-2">
              <span className="text-4xl font-semibold tracking-tight text-gray-700 dark:text-gray-200">
                {stat.value}
              </span>
              {stat.unit ? (
                <span className="text-sm text-gray-400">{stat.unit}</span>
              ) : null}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);
