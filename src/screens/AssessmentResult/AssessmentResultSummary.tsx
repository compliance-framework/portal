import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
import { Widget } from "../../components/Common/Widget";
import { WidgetContent } from "../../components/Common/WidgetContent";

interface AssessmentResultSummaryProps {
  id: string;
}
export const AssessmentResultSummary = observer<AssessmentResultSummaryProps>(({ id }) => {
  const { t } = useTranslation();
  return (
    <Widget title={t("Summary")}>
      <WidgetContent>{id} [content]</WidgetContent>
    </Widget>
  );
});
