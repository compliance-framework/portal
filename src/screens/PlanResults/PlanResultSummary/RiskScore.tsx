import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
import * as configurationService from "../../../services/configuration-service";

interface RiskScoreProps extends configurationService.ServiceRiskScore {
  className?: string;
}

const RISK_CLASSES: Record<configurationService.ServiceRiskSeverity, string> = {
  low: "text-low",
  medium: "text-medium",
  high: "text-high",
};

export const RiskScore = observer<RiskScoreProps>(({ score = 0, severity = "low", className }) => {
  const { t } = useTranslation();

  const riskClass = RISK_CLASSES[severity ?? "low"];
  return (
    <div className={`flex flex-col items-end space-y-3 ${className}`}>
      <span className="w-24 text-right text-xs text-dim">{t("Risk Score")}</span>
      <span className={`text-4xl font-bold leading-4 ${riskClass}`}>{score}</span>
      <span className="text-sm">{t(severity ?? "low")}</span>
    </div>
  );
});
