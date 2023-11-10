import { observer } from "mobx-react-lite";

interface RiskLevelsProps {
  low?: number;
  medium?: number;
  high?: number;
}

export const RiskLevels = observer<RiskLevelsProps>(({ low, medium, high }) => {
  return (
    <ul>
      <li>Low: {low}</li>
      <li>Medium: {medium}</li>
      <li>High: {high}</li>
    </ul>
  );
});
