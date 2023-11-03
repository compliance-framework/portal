import { observer } from "mobx-react-lite";
import GaugeChart from "react-gauge-chart";
import { useTranslation } from "react-i18next";
import { SettingsButton } from "../../../components/Buttons/SettingsButton";
import { Field } from "../../../components/Common/Field";
import { ValueField } from "../../../components/Common/ValueField";
import { Widget } from "../../../components/Common/Widget";
import { WidgetContent } from "../../../components/Common/WidgetContent";
import { RiskLevels } from "./RiskLevels";
import { RiskScore } from "./RiskScore";

interface SummaryProps {
  id: string;
}
const toolbar = <SettingsButton onClick={() => console.log("summary clicked")} />;
export const Summary = observer<SummaryProps>(() => {
  const { t } = useTranslation();

  return (
    <Widget title={t("Summary")} toolbar={toolbar}>
      <WidgetContent>
        <div>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col space-y-2">
              <ValueField label={t("Published")} value="09.01.2023 4:30 PM" />
              <ValueField label={t("End Date")} value="09.01.2023 4:30 PM" />
              <ValueField
                label={t("Description")}
                value="This assessment result discusses the findings of the 2021 OSCAL Assessment at XYZ Corporation. It focuses on the effectiveness of security controls, risk management, and compliance with industry standards."
              />
            </div>

            <div className="flex flex-row">
              <div className="flex-grow">
                <ValueField label={t("# of Controls Tested")} value="100" />
                <ValueField label={t("# of Subjects Tested")} value="100" />
                <ValueField label={t("# of Observations")} value="100" />
                <ValueField label={t("# of Risks")} value="100" />
              </div>
              <RiskScore score={76} risk={"Medium"} />
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="grid grid-cols-2 gap-8">
            <Field label={t("Compliance Status")} className="pt-4">
              <GaugeChart id="gauge-chart2" nrOfLevels={3} percent={0.75} />
            </Field>
            <Field label={t("Risk Levels")}>
              <RiskLevels low={23} medium={46} high={31} />
            </Field>
          </div>
        </div>
      </WidgetContent>
    </Widget>
  );
});
