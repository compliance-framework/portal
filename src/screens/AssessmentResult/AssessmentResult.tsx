import { observer } from "mobx-react-lite";
import { ReactNode, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContainer } from "../../components/AppContainer/AppContainer.tsx";
import { PlanApi } from "../../services/configuration-service";
import { Summary } from "./AssessmentResultSummary/Summary.tsx";
import { ComplianceStatus } from "./ComplianceStatus/ComplianceStatus.tsx";
import { FindingList } from "./FindingList.tsx";
import { ResultList } from "./ResultList.tsx";

interface AssessmentResultProps {
  children?: ReactNode;
}

const planApi = new PlanApi({
  basePath: "http://localhost:8080/api",
});

export const AssessmentResult = observer<AssessmentResultProps>(() => {
  const { id } = useParams();

  const [data, setData] = useState<any>(null);
  if (!id) return null;
  useEffect(() => {
    (async () => {
      const result = await planApi.planIdResultsGet(id);
      setData(result.data);
    })();
  }, [id]);

  return (
    <AppContainer>
      <div className="m-0 grid grid-cols-2 gap-2 p-0">
        <pre className="text-xs">{JSON.stringify(data, null, 2)}</pre>
        <Summary id={id} />
        <FindingList />
        <ComplianceStatus id={id} />
        <ResultList />
      </div>
    </AppContainer>
  );
});
