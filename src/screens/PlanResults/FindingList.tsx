import { observer } from "mobx-react-lite";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Widget } from "../../components/Common/Widget";
import { WidgetContent } from "../../components/Common/WidgetContent";
import { API } from "../../config";
import * as configurationService from "../../services/configuration-service";

interface Finding {
  id: string;
  compliant: boolean;
  title: string;
  activityTitle?: string;
  origin: string;
  description: string;
  observations: number;
  risks: number;
}

interface FindingListProps {
  findings: configurationService.DomainFinding[];
  id: string;
  resultId: string;
}

export const FindingList = observer<FindingListProps>(({ id, resultId }) => {
  const { t } = useTranslation();

  console.log("render findings");

  const toolbar = (
    <a href={""} className="underline">
      See All
    </a>
  );

  const [data, setData] = useState<configurationService.DomainFinding[] | null>(null);
  useEffect(() => {
    (async () => {
      const response = await API.configurationService.plan.planIdResultsResultIdFindingsGet(id, resultId);
      setData(response.data);
    })();
  }, [id, resultId]);

  const items = useMemo(
    () =>
      data
        ? data.map(
            (finding): Finding => ({
              id: `${finding.id}`,
              compliant: true, // TODO: calculate
              title: `${finding.title}`,
              origin: `${finding.origins?.join(", ")}`,
              activityTitle: `TODO`,
              description: `${finding.description}`,
              observations: finding.relatedObservations?.length ?? 0,
              risks: finding.relatedRisks?.length ?? 0,
            }),
          )
        : [],
    [data],
  );

  return (
    <Widget title={t("widgets.assessment.finding.list")} toolbar={toolbar}>
      <WidgetContent>
        <div className="flex flex-col">
          {items.map(item => (
            <div className="flex flex-row border-b border-gray-500 py-2">
              <div className="mr-4 w-1/2">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
              <div className="w-1/4">
                <span className="text-sm">Origin: </span>
                <span className="text-lg text-bright">{item.origin}</span>
              </div>
              <div className="flex w-64 flex-col text-right">
                <a className="text-neutral underline"> Related {item.observations} Observation(s)</a>
                <a className="text-high underline"> Related {item.risks} Risks(s)</a>
              </div>
            </div>
          ))}
        </div>
      </WidgetContent>
    </Widget>
  );
});
