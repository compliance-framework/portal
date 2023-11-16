import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Widget } from "../../components/Common/Widget";
import { WidgetContent } from "../../components/Common/WidgetContent";
import { API } from "../../config";
import * as configurationService from "../../services/configuration-service";

interface RemediationTimeProps {
  id: string;
  resultId: string;
}
export const RemediationTime = observer<RemediationTimeProps>(({ id, resultId }) => {
  const { t } = useTranslation();
  const [data, setData] = useState<configurationService.ServiceRemediationVsTime[] | null>(null);
  useEffect(() => {
    (async () => {
      const response = await API.configurationService.plan.planIdResultsResultIdRemediationVsTimeGet(id, resultId);
      setData(response.data);
    })();
  }, [id, resultId]);

  return (
    <Widget title={t("Distribution of Time Taken to Remediate Failed Controls")}>
      <WidgetContent>
        {id} <pre className="max-h-60 overflow-x-auto text-xs">{JSON.stringify(data, null, 2)}</pre>
      </WidgetContent>
    </Widget>
  );
});
