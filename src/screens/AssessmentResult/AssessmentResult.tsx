import { observer } from "mobx-react-lite";
import { ReactNode } from "react";
import { useParams } from "react-router-dom";
import { AppContainer } from "../../components/AppContainer/AppContainer.tsx";
import { DashboardColumn } from "../../components/Common/DashboardColumn.tsx";
import { DashboardRow } from "../../components/Common/DashboardRow.tsx";
import { AssessmentResultComplianceTime } from "./AssessmentResultComplianceTime.tsx";
import { AssessmentResultRemediationTime } from "./AssessmentResultRemediationTime.tsx";
import { AssessmentResultSummary } from "./AssessmentResultSummary/AssessmentResultSummary.tsx";
import { ComplianceStatus } from "./ComplianceStatus/ComplianceStatus.tsx";

interface AssessmentResultProps {
  children?: ReactNode;
}

export const AssessmentResult = observer<AssessmentResultProps>(() => {
  const { id } = useParams();

  if (!id) return null;

  return (
    <AppContainer>
      <DashboardRow>
        <DashboardColumn>
          <AssessmentResultSummary id={id} />
          <ComplianceStatus id={id} />
        </DashboardColumn>
        <DashboardColumn>
          <AssessmentResultComplianceTime id={id} />
          <AssessmentResultRemediationTime id={id} />
        </DashboardColumn>
      </DashboardRow>
    </AppContainer>
  );
});
