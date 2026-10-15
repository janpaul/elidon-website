import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { QnhCalc } from "./qnh-calc";
import { QnhChart } from "./qnh-chart";
import { minMbar, maxMbar } from "@/app/qnh/helpers";

const QnhPage = () => (
  <div className="flex flex-col gap-4 lg:gap-8">
    <Card>
      <CardHeader>
        <CardDescription>QNH Calculator</CardDescription>
      </CardHeader>
      <CardContent>
        <QnhCalc />
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardDescription>QNH Chart</CardDescription>
      </CardHeader>
      <CardContent>
        <QnhChart min={minMbar} max={maxMbar} />
      </CardContent>
    </Card>
  </div>
);

export default QnhPage;
