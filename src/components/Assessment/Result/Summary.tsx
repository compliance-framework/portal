import {observer} from "mobx-react-lite";
import {Widget} from "../../Common/Widget.tsx";
import {useTranslation} from "react-i18next";
import {ValueField} from "../../Common/Fields/ValueField.tsx";
import GaugeChart from 'react-gauge-chart';
import {Field} from "../../Common/Fields/Field.tsx";

export const Summary = observer(() => {
    const {t} = useTranslation();

    const toolbar = (
        <button onClick={() => console.log('summary clicked')} className="flex flex-row justify-center items-center border-[#303465] border px-2 py-1 rounded">
            <img src={"/settings.png"} alt="Settings" className="w-4 mr-2" />
            Settings
        </button>
    )

    return (
        <Widget title={t('widgets.summary')} toolbar={toolbar}>
            <div>
                <div className="grid gap-8 grid-cols-2">
                    <div className="flex flex-col space-y-2">
                        <ValueField label="Published" value="09.01.2023 4:30 PM"/>
                        <ValueField label="End Date" value="09.01.2023 4:30 PM"/>
                        <ValueField label="Description"
                                    value="This assessment result discusses the findings of the 2021 OSCAL Assessment at XYZ Corporation. It focuses on the effectiveness of security controls, risk management, and compliance with industry standards."/>
                    </div>
                    <div className="flex flex-row">
                        <div className="flex-grow">
                            <ValueField label="# of Controls Tested" value="100"/>
                            <ValueField label="# of Subjects Tested" value="100"/>
                            <ValueField label="# of Observations" value="100"/>
                            <ValueField label="# of Risks" value="100"/>
                        </div>
                        <div className="flex flex-col w-32 text-right leading-none">
                            <p className="text-sm">Risk Score</p>
                            <p className="text-[3rem] text-high">91</p>
                            <p className="text-s text-bright">High</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8">
                <div className="grid gap-8 grid-cols-2">
                    <Field label="Compliance Status" className="pt-4">
                        <GaugeChart id="gauge-chart2" nrOfLevels={3} percent={0.75}/>
                    </Field>
                </div>
            </div>
        </Widget>
    );
});
