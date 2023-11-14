import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Loader } from "../../components/Common/Loader";
import { Widget } from "../../components/Common/Widget";
import { WidgetContent } from "../../components/Common/WidgetContent";
import { API } from "../../config";
import * as configurationService from "../../services/configuration-service";

interface ResultListProps {
  id: string;
}

interface Item {
  id: string;
  compliant: boolean;
  title: string;
  activityTitle: string;
  description: string;
  observations: number;
  risks: number;
}
export const ResultList = ({ id }: ResultListProps) => {
  const { t } = useTranslation();

  const [data, setData] = useState<configurationService.DomainResult[] | null>(null);
  useEffect(() => {
    (async () => {
      const response = await API.configurationService.plan.planIdResultsGet(id);
      setData(response.data);
    })();
  }, [id]);
  const toolbar = (
    <a href={""} className="underline">
      See All
    </a>
  );

  const items = useMemo(
    () =>
      data
        ? data.map(
            (result): Item => ({
              id: `${result.id}`,
              compliant: true, // TODO: calculate
              title: `${result.title}`,
              activityTitle: `TODO`,
              description: `${result.description}`,
              observations: result.observations?.length ?? 0, // TODO
              risks: result.risks?.length ?? 0, // TODO
            }),
          )
        : null,
    [data],
  );

  if (!items) return <Loader />;

  return (
    <Widget title={t("widgets.assessment.result.list")} toolbar={toolbar}>
      <WidgetContent>
        <div className="flex flex-col">
          {items.map(item => (
            <div className="flex flex-col border-b border-gray-500 py-4">
              <div className="flex flex-row justify-center">
                <div className={`rounded-badge ${item.compliant ? "bg-low" : "bg-high"} h-4 w-4`}></div>
                <div className="mx-2 flex-grow text-bright">{item.title}</div>
                <div className="text-right">
                  Activity: <span className="text-bright">{item.activityTitle}</span>
                </div>
              </div>
              <div key={item.id} className="mt-4 flex flex-row">
                <div className="mx-2 ml-6 flex-grow">{item.description}</div>
                <div className="flex w-64 flex-col text-right">
                  <a>
                    <span className="mr-1 text-dim">{item.observations}</span>
                    <span className="underline">{"Observation" + (item.observations > 1 ? "s" : "")}</span>
                  </a>
                  <a>
                    <span className="mr-1 text-dim">{item.risks}</span>
                    <span className="text-high underline">{"Risk" + (item.risks > 1 ? "s" : "")}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </WidgetContent>
    </Widget>
  );
};
