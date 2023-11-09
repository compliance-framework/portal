import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
import { Widget } from "../../components/Common/Widget";
import { WidgetContent } from "../../components/Common/WidgetContent";

export const FindingList = observer(() => {
  const { t } = useTranslation();

  console.log("render findings");

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
      origin: "CF Assessment Runtime",
      description:
        "This report outlines the findings from the conducted network vulnerability scan. Solutions have been proposed for all identified vulnerabilities to mitigate potential risks.",
      observations: 30,
      risks: 12,
    },
    {
      id: "1",
      compliant: false,
      title: "Network Vulnerability Scan Result",
      origin: "CF Assessment Runtime",
      activityTitle: "System Configuration Check",
      description: "Solutions have been proposed for all identified vulnerabilities to mitigate potential risks.",
      observations: 10,
      risks: 1,
    },
  ];

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
