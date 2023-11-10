import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import GaugeChart from "react-gauge-chart";
import { useTranslation } from "react-i18next";
import { SettingsButton } from "../../../components/Buttons/SettingsButton";
import { Field } from "../../../components/Common/Field";
import { Loader } from "../../../components/Common/Loader";
import { ValueField } from "../../../components/Common/ValueField";
import { Widget } from "../../../components/Common/Widget";
import { WidgetContent } from "../../../components/Common/WidgetContent";
import { API } from "../../../config";
import * as configurationService from "../../../services/configuration-service";
import { RiskLevels } from "./RiskLevels";
import { RiskScore } from "./RiskScore";

interface SummaryProps {
  id: string;
  resultId: string;
}
const toolbar = <SettingsButton onClick={() => console.log("summary clicked")} />;
export const Summary = observer<SummaryProps>(({ id, resultId }) => {
  const { t } = useTranslation();

  const [data, setData] = useState<configurationService.ServicePlanSummary | null>(null);
  useEffect(() => {
    (async () => {
      const response = await API.configurationService.plan.planIdResultsResultIdSummaryGet(id, resultId);
      setData(response.data);
    })();
  }, [id, resultId]);

  if (!data) return <Loader />;
  return (
    <Widget title={t("Summary")} toolbar={toolbar}>
      <WidgetContent>
        <div>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col space-y-2">
              <ValueField label={t("Published")} value={data.published} />
              <ValueField label={t("End Date")} value={data.endDate} />
              <ValueField label={t("Description")} value={data.description} />
            </div>

            <div className="flex flex-row">
              <div className="flex-grow">
                <ValueField label={t("# of Controls Tested")} value={data.numControls} />
                <ValueField label={t("# of Subjects Tested")} value={data.numSubjects} />
                <ValueField label={t("# of Observations")} value={data.numObservations} />
                <ValueField label={t("# of Risks")} value={data.numRisks} />
              </div>
              <RiskScore {...data.riskScore} />
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="grid grid-cols-2 gap-8">
            <Field label={t("Compliance Status")} className="pt-4">
              <GaugeChart id="gauge-chart2" nrOfLevels={3} percent={data.complianceStatus} />
            </Field>
            <Field label={t("Risk Levels")}>
              <RiskLevels {...data.riskLevels} />
            </Field>
          </div>
        </div>
      </WidgetContent>
    </Widget>
  );
});
