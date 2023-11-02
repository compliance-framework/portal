import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
import { Col } from "../../../components/Common/Col";

type Risk = "Low" | "Medium" | "High";
interface RiskScoreProps {
  score: number;
  risk: Risk;
}

const RISK_CLASSES: Record<Risk, string> = {
  Low: "text-risk-low",
  Medium: "text-risk-medium",
  High: "text-risk-high",
};

export const RiskScore = observer<RiskScoreProps>(({ score, risk }) => {
  const { t } = useTranslation();

  const riskClass = RISK_CLASSES[risk];
  return (
    <Col className="w-24 items-end">
      <span className="text-xs text-neutral-350">{t("Risk Score")}</span>
      <span className={`text-4xl font-bold  ${riskClass}`}>{score}</span>
      <span>{t(risk)}</span>
    </Col>
  );
});
