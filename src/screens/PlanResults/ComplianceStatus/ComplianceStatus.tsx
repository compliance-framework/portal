import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
import { Widget } from "../../../components/Common/Widget";
import { WidgetContent } from "../../../components/Common/WidgetContent";
import { StatusRow } from "./StatusRow";

interface ComplianceStatusProps {
  id: string;
}

export const ComplianceStatus = observer<ComplianceStatusProps>(() => {
  const { t } = useTranslation();
  return (
    <Widget title={t("Compliance Status of Controls Across Targets")}>
      <WidgetContent>
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
