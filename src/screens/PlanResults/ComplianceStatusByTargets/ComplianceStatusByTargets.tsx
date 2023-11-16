import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Loader } from "../../../components/Common/Loader";
import { Widget } from "../../../components/Common/Widget";
import { WidgetContent } from "../../../components/Common/WidgetContent";
import { API } from "../../../config";
import * as configurationService from "../../../services/configuration-service";
import { StatusRow } from "./StatusRow";

interface ComplianceStatusByTargetsProps {
  id: string;
  resultId: string;
}

export const ComplianceStatusByTargets = observer<ComplianceStatusByTargetsProps>(({ id, resultId }) => {
  const { t } = useTranslation();

  const [data, setData] = useState<configurationService.ServiceComplianceStatusByTargets[]>([]);
  useEffect(() => {
    (async () => {
      const response = await API.configurationService.plan.planIdResultsResultIdComplianceStatusByTargetsGet(
        id,
        resultId,
      );
      setData(response.data);
    })();
  }, [id, resultId]);

  if (!data) return <Loader />;
  return (
    <Widget title={t("Compliance Status of Controls Across Targets")}>
      <WidgetContent>
        <table className="">
          <tbody>
            {data.map((row, idx) => (
              <StatusRow key={idx} {...row} />
            ))}
          </tbody>
        </table>
      </WidgetContent>
    </Widget>
  );
});
