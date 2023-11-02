import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
import { Widget } from "../../../components/Common/Widget";
import { WidgetContent } from "../../../components/Common/WidgetContent";
import { StatusRow, StatusRowDataItem } from "./StatusRow";

interface ComplianceStatusProps {
  id: string;
}

const DUMMY_ROWS: { label: string; data: StatusRowDataItem[] }[] = [
  {
    label: "Comprehensive Network Security",
    data: [{ state: "good" }, { state: "bad" }, { state: "medium" }, { state: "unknown" }],
  },
  {
    label: "Cloud Infrastructure Protection",
    data: [{ state: "good" }, { state: "bad" }, { state: "medium" }, { state: "unknown" }],
  },
];
export const ComplianceStatus = observer<ComplianceStatusProps>(({ id }) => {
  const { t } = useTranslation();
  return (
    <Widget title={t("Compliance Status of Controls Across Targets")}>
      <WidgetContent>
        {id}
        <table className="">
          <tbody>
            {DUMMY_ROWS.map((row, idx) => (
              <StatusRow key={idx} label={row.label} data={row.data} />
            ))}
          </tbody>
        </table>
      </WidgetContent>
    </Widget>
  );
});
