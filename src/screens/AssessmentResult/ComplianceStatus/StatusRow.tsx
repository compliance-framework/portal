import { useTranslation } from "react-i18next";
import { Row } from "../../../components/Common/Row";

type State = "good" | "medium" | "bad" | "unknown";

export interface StatusRowDataItem {
  state: State;
}

interface StatusRowProps {
  label: string;
  data: StatusRowDataItem[];
}

const STATE_CLASS: Record<State, string> = {
  good: "bg-compliance-good",
  medium: "bg-compliance-medium",
  bad: "bg-compliance-bad",
  unknown: "bg-compliance-unknown",
};

export function StatusRow({ label, data }: StatusRowProps) {
  const { t } = useTranslation();
  return (
    <tr>
      <td className="w-64 pr-2 text-right text-neutral-content">{t(label)}</td>
      <td className="pt-1">
        <Row className="space-x-1">
          {data.map((item, idx) => (
            <div className={`${STATE_CLASS[item.state]} h-6 w-6 rounded`} key={idx} />
          ))}
        </Row>
      </td>
    </tr>
  );
}
