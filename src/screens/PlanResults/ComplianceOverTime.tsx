import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Widget } from "../../components/Common/Widget";
import { WidgetContent } from "../../components/Common/WidgetContent";
import { API } from "../../config";
import * as configurationService from "../../services/configuration-service";

interface ComplianceOverTimeProps {
  id: string;
  resultId: string;
}
export const ComplianceOverTime = observer<ComplianceOverTimeProps>(({ id, resultId }) => {
  const { t } = useTranslation();

  const [data, setData] = useState<configurationService.ServiceComplianceStatusOverTime[] | null>(null);
  useEffect(() => {
    (async () => {
      const response = await API.configurationService.plan.planIdResultsResultIdComplianceOverTimeGet(id, resultId);
      setData(response.data);
    })();
  }, [id, resultId]);

  return (
    <Widget title={t("Compliance over Time")}>
      <WidgetContent>
        <pre className="max-h-60 overflow-x-auto text-xs">{JSON.stringify(data, null, 2)}</pre>
      </WidgetContent>
    </Widget>
  );
});
