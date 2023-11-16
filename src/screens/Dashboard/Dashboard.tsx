import { observer } from "mobx-react-lite";
import { ReactNode } from "react";
import { useParams } from "react-router-dom";
import { AppContainer } from "../../components/AppContainer/AppContainer";
import { ComplianceOverTime } from "../PlanResults/ComplianceOverTime";
import { ComplianceStatusByTargets } from "../PlanResults/ComplianceStatusByTargets/ComplianceStatusByTargets";
import { FindingList } from "../PlanResults/FindingList";
import { Summary } from "../PlanResults/PlanResultSummary/Summary";

interface DashboardProps {
  children?: ReactNode;
}
export const Dashboard = observer<DashboardProps>(() => {
  const { id = "todo", resultId = "todo" } = useParams();

  return (
    <AppContainer>
      <div className="m-0 grid grid-cols-2 gap-2 p-0">
        <Summary id={id} resultId={resultId} />
        <ComplianceStatusByTargets id={id} resultId={resultId} />
        <FindingList id={id} resultId={resultId} />
        <ComplianceOverTime id={id} resultId={resultId} />
      </div>
    </AppContainer>
  );
});
