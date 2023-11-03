import { observer } from "mobx-react-lite";
import { ReactNode } from "react";
import { useParams } from "react-router-dom";
import { AppContainer } from "../../components/AppContainer/AppContainer.tsx";
import { Summary } from "./AssessmentResultSummary/Summary.tsx";
import { ComplianceStatus } from "./ComplianceStatus/ComplianceStatus.tsx";
import { FindingList } from "./FindingList.tsx";
import { ResultList } from "./ResultList.tsx";

interface AssessmentResultProps {
  children?: ReactNode;
}

export const AssessmentResult = observer<AssessmentResultProps>(() => {
  const { id } = useParams();

  if (!id) return null;

  return (
    <AppContainer>
      <div className="m-0 grid grid-cols-2 gap-2 p-0">
        <Summary id={id} />
        <FindingList />
        <ComplianceStatus id={id} />
        <ResultList />
      </div>
    </AppContainer>
  );
});
