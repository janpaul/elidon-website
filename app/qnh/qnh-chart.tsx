"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ReferenceLine,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { STD, mbarToInHg } from "@/app/qnh/helpers";

const chartConfig = {
  inHg: {
    label: "inHg",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

type Props = {
  min: number;
  max: number;
};

export const QnhChart = ({ min, max }: Props) => {
  const rows = Array.from({ length: max - min + 1 }, (_, i) => {
    const mbar = min + i;
    return { mbar, inHg: Number(mbarToInHg(mbar).toFixed(2)) };
  });

  return (
    <ChartContainer config={chartConfig} className="min-h-75 w-full">
      <LineChart data={rows} margin={{ left: 12, right: 12 }}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="mbar" type="number" domain={[min, max]} tickCount={6} />
        <YAxis
          dataKey="inHg"
          domain={["auto", "auto"]}
          tickFormatter={(v) => v.toFixed(2)}
          width={48}
        />
        <ReferenceLine x={STD} strokeDasharray="4 4" label="STD" />
        <ChartTooltip content={<ChartTooltipContent labelKey="mbar" />} />
        <Line
          type="linear"
          dataKey="inHg"
          stroke="var(--color-inHg)"
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  );
};
