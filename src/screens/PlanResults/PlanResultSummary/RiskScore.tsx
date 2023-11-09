import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";

type Risk = "Low" | "Medium" | "High";

interface RiskScoreProps {
  score: number;
  risk: Risk;
  className?: string;
}

const RISK_CLASSES: Record<Risk, string> = {
  Low: "text-low",
  Medium: "text-medium",
  High: "text-high",
};

export const RiskScore = observer<RiskScoreProps>(({ score, risk, className }) => {
  const { t } = useTranslation();

  const riskClass = RISK_CLASSES[risk];
  return (
    <div className={`flex flex-col items-end space-y-3 ${className}`}>
      <span className="w-24 text-right text-xs text-dim">{t("Risk Score")}</span>
      <span className={`text-4xl font-bold leading-4 ${riskClass}`}>{score}</span>
      <span className="text-sm">{t(risk)}</span>
    </div>
  );
});
