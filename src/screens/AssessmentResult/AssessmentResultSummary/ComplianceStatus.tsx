import { observer } from "mobx-react-lite";

interface ComplianceStatusProps {
  low: number;
  medium: number;
  high: number;
  status: number;
}

export const ComplianceStatus = observer<ComplianceStatusProps>(({ low, medium, high, status }) => {
  return (
    <ul>
      <li>Low: {low}</li>
      <li>Medium: {medium}</li>
      <li>High: {high}</li>
      <li>Status: {status}%</li>
    </ul>
  );
});
