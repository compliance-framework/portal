import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
import { Widget } from "../../components/Common/Widget";
import { WidgetContent } from "../../components/Common/WidgetContent";

interface ComplianceTimeProps {
  id: string;
}
export const ComplianceTime = observer<ComplianceTimeProps>(({ id }) => {
  const { t } = useTranslation();
  return (
    <Widget title={t("Compliance over Time")}>
      <WidgetContent>{id} [content]</WidgetContent>
    </Widget>
  );
});
