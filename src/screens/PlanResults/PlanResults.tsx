import { observer } from "mobx-react-lite";
import { ReactNode } from "react";
import { useParams } from "react-router-dom";
import { AppContainer } from "../../components/AppContainer/AppContainer.tsx";
import { ComplianceStatusByTargets } from "./ComplianceStatusByTargets/ComplianceStatusByTargets.tsx";
import { Summary } from "./PlanResultSummary/Summary.tsx";

interface PlanResultsProps {
  children?: ReactNode;
}
export const PlanResults = observer<PlanResultsProps>(() => {
  const { id = "TODO", resultId = "TODO" } = useParams();

  return (
    <AppContainer>
      <div className="m-0 grid grid-cols-2 gap-2 p-0">
        {/* <pre className="text-xs">{JSON.stringify(data, null, 2)}</pre>*/}
        <Summary id={id} resultId={resultId} />
        <ComplianceStatusByTargets id={id} resultId={resultId} />
        {/* <FindingList id={id} resultId={resultId} />
        <ResultList id={id} resultId={resultId} />*/}
      </div>
    </AppContainer>
  );
});
