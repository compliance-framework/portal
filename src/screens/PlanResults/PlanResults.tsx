import { observer } from "mobx-react-lite";
import { ReactNode, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContainer } from "../../components/AppContainer/AppContainer.tsx";
import * as configurationService from "../../services/configuration-service/index.ts";
import { ComplianceStatus } from "./ComplianceStatus/ComplianceStatus.tsx";
import { FindingList } from "./FindingList.tsx";
import { Summary } from "./PlanResultSummary/Summary.tsx";
import { ResultList } from "./ResultList.tsx";

interface PlanResultsProps {
  children?: ReactNode;
}

const configuration = new configurationService.Configuration({
  basePath: "http://localhost:8080/api",
});
const planApi = new configurationService.PlanApi(configuration);

console.log("NEW CONFIG", configuration);
export const PlanResults = observer<PlanResultsProps>(() => {
  const { id } = useParams();

  // TODO: use a store tbd
  const [results, setResults] = useState<configurationService.DomainResult[]>([]);
  if (!id) return null;
  useEffect(() => {
    (async () => {
      const result = await planApi.planIdResultsGet(id);
      setResults(result.data);
    })();
  }, [id]);

  return (
    <AppContainer>
      <div className="m-0 grid grid-cols-2 gap-2 p-0">
        {/* <pre className="text-xs">{JSON.stringify(data, null, 2)}</pre>*/}
        <Summary id={id} />
        <FindingList />
        <ComplianceStatus id={id} />
        <ResultList results={results} />
      </div>
    </AppContainer>
  );
});
