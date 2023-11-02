import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
import { Widget } from "../../components/Common/Widget";
import { WidgetContent } from "../../components/Common/WidgetContent";

interface AssessmentResultComplianceTargetsProps {
  id: string;
}
export const AssessmentResultComplianceTargets = observer<AssessmentResultComplianceTargetsProps>(({ id }) => {
  const { t } = useTranslation();
  return (
    <Widget title={t("Distribution of Time Taken to Remediate Failed Controls")}>
      <WidgetContent>{id} [content]</WidgetContent>
    </Widget>
  );
});
