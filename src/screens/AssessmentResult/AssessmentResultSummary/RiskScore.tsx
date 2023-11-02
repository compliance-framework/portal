import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
import { Col } from "../../../components/Common/Col";

type Risk = "Low" | "Medium" | "High";

interface RiskScoreProps {
  score: number;
  risk: Risk;
  className?: string;
}

const RISK_CLASSES: Record<Risk, string> = {
  Low: "text-risk-low",
  Medium: "text-risk-medium",
  High: "text-risk-high",
};

export const RiskScore = observer<RiskScoreProps>(({ score, risk, className }) => {
  const { t } = useTranslation();

  const riskClass = RISK_CLASSES[risk];
  return (
    <Col className={`items-end ${className} space-y-3`}>
      <span className="w-24 text-right text-xs text-neutral-350">{t("Risk Score")}</span>
      <span className={`text-4xl font-bold leading-4 ${riskClass}`}>{score}</span>
      <span className="text-sm">{t(risk)}</span>
    </Col>
  );
});
