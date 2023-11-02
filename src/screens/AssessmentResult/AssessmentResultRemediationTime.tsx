import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
import { Widget } from "../../components/Common/Widget";
import { WidgetContent } from "../../components/Common/WidgetContent";

interface AssessmentResultRemediationTimeProps {
  id: string;
}
export const AssessmentResultRemediationTime = observer<AssessmentResultRemediationTimeProps>(({ id }) => {
  const { t } = useTranslation();
  return (
    <Widget title={t("Compliance Status of Controls Across Targets")}>
      <WidgetContent>{id} [content]</WidgetContent>
    </Widget>
  );
});
