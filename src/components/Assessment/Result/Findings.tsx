import {observer} from "mobx-react-lite";
import {Widget} from "../../Common/Widget.tsx";
import {useTranslation} from "react-i18next";

export const Findings = observer(() => {
    const {t} = useTranslation();

    const toolbar = (
        <a href={""} className="underline">See All</a>
    )

    const items = [{
        id: '1',
        compliant: true,
        title: 'Network Vulnerability Scan Result',
        origin: 'CF Assessment Runtime',
        description: 'This report outlines the findings from the conducted network vulnerability scan. Solutions have been proposed for all identified vulnerabilities to mitigate potential risks.',
        observations: 30,
        risks: 12
    }, {
        id: '1',
        compliant: false,
        title: 'Network Vulnerability Scan Result',
        origin: 'CF Assessment Runtime',
        activityTitle: 'System Configuration Check',
        description: 'Solutions have been proposed for all identified vulnerabilities to mitigate potential risks.',
        observations: 10,
        risks: 1
    }]

    return (
        <Widget title={t('widgets.assessment.finding.list')} toolbar={toolbar}>
            <div className="flex flex-col">
                {items.map(item => (
                    <div className="flex flex-row border-b border-gray-500 py-2">
                        <div className="w-1/2 mr-4">
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                        <div className="w-1/4">
                            <span className="text-sm">Origin: </span>
                            <span className="text-lg text-bright">{item.origin}</span>
                        </div>
                        <div className="flex flex-col w-64 text-right">
                            <a className="underline text-neutral"> Related {item.observations} Observation(s)</a>
                            <a className="underline text-high"> Related {item.risks} Risks(s)</a>
                        </div>
                    </div>
                ))}
            </div>
        </Widget>
    );
});
