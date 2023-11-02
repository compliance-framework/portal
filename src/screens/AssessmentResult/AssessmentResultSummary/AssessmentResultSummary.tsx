import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
import { Row } from "../../../components/Common/Row";
import { Spacer } from "../../../components/Common/Spacer";
import { SummarySection } from "../../../components/Common/SummarySection";
import { SummarySectionItem } from "../../../components/Common/SummarySectionItem";
import { Widget } from "../../../components/Common/Widget";
import { WidgetContent } from "../../../components/Common/WidgetContent";
import { ComplianceStatus } from "./ComplianceStatus";
import { RiskLevels } from "./RiskLevels";
import { RiskScore } from "./RiskScore";

interface AssessmentResultSummaryProps {
  id: string;
}
export const AssessmentResultSummary = observer<AssessmentResultSummaryProps>(({ id }) => {
  const { t } = useTranslation();
  return (
    <Widget title={t("Summary")}>
      {id}
      <WidgetContent>
        <Row>
          <SummarySection>
            <SummarySectionItem label={t("Published")}>01/02/2345 4:30PM</SummarySectionItem>
            <SummarySectionItem label={t("End Date")}>01/02/2345 4:30PM</SummarySectionItem>
            <SummarySectionItem label={t("Description")}>
              <p>
                This assessment result discusses the findings of the 2021 OSCAL Assessment at XYZ Corporation. It
                focuses on the effectiveness of security controls, risk management, and compliance with industry
                standards.
              </p>
            </SummarySectionItem>
          </SummarySection>

          <Spacer />
          <SummarySection className="w-[300px]">
            <SummarySectionItem label={t("# of Controls Tested")}>1</SummarySectionItem>
            <SummarySectionItem label={t("# of Subjects Tested")}>2</SummarySectionItem>
            <SummarySectionItem label={t("# of Observations")}>3</SummarySectionItem>
            <SummarySectionItem label={t("# of Risks")}>4</SummarySectionItem>
          </SummarySection>
          <Spacer />
          <RiskScore score={76} risk={"Medium"} />
        </Row>
        <Row>
          <SummarySection>
            <SummarySectionItem label={t("Compliance Status")}>
              <ComplianceStatus low={23} medium={46} high={31} status={70} />
            </SummarySectionItem>
          </SummarySection>
          <Spacer />
          <SummarySection>
            <SummarySectionItem label={t("Risk Levels")}>
              <RiskLevels low={23} medium={46} high={31} />
            </SummarySectionItem>
          </SummarySection>
        </Row>
      </WidgetContent>
    </Widget>
  );
});
