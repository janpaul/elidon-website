import { QnhTable } from "./qnh-table";
import { QnhCalc } from "./qnh-calc";
import { minMbar, maxMbar } from "@/app/qnh/helpers";

const QnhPage = () => (
  <div className="flex flex-col gap-2">
    <section>
      <QnhCalc />
    </section>
    <section>
      <QnhTable min={minMbar} max={maxMbar} />
    </section>
  </div>
);

export default QnhPage;
