import { useTranslation } from "react-i18next";

import * as configurationService from "../../../services/configuration-service";
type State = "pass" | "warn" | "fail" | "indeterminate";

export interface StatusRowDataItem {
  state: State;
}

interface StatusRowProps extends configurationService.ServiceComplianceStatusByTargets {}

const STATE_CLASS: Record<configurationService.ServiceRiskState, string> = {
  pass: "bg-compliance-pass",
  warn: "bg-compliance-warn",
  fail: "bg-compliance-fail",
  indeterminate: "bg-compliance-indeterminate",
};

export function StatusRow({ control, compliance = [] }: StatusRowProps) {
  const { t } = useTranslation();
  console.log("row", compliance);
  return (
    <tr>
      <td className="w-64 pr-2 text-right text-dim">{t(control ?? "unknown")}</td>
      <td className="pt-1">
        <div className="flex flex-row space-x-1">
          {compliance.map((item, idx) => (
            <div className={`${STATE_CLASS[item]} h-6 w-6 rounded`} key={idx} />
          ))}
        </div>
      </td>
    </tr>
  );
}
