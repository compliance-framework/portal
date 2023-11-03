import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
import { Widget } from "../../components/Common/Widget";
import { WidgetContent } from "../../components/Common/WidgetContent";

export const ResultList = observer(() => {
  const { t } = useTranslation();

  const toolbar = (
    <a href={""} className="underline">
      See All
    </a>
  );

  const items = [
    {
      id: "1",
      compliant: true,
      title: "Network Vulnerability Scan Result",
      activityTitle: "System Configuration Check",
      description:
        "This report outlines the findings from the conducted network vulnerability scan. Solutions have been proposed for all identified vulnerabilities to mitigate potential risks.",
      observations: 30,
      risks: 12,
    },
    {
      id: "1",
      compliant: false,
      title: "Network Vulnerability Scan Result",
      activityTitle: "System Configuration Check",
      description: "Solutions have been proposed for all identified vulnerabilities to mitigate potential risks.",
      observations: 10,
      risks: 1,
    },
  ];

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
});
