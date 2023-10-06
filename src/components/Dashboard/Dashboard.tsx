import {observer} from "mobx-react-lite";
import {AppContainer} from "../AppContainer/AppContainer";
import {Widget} from "../Common/Widget.tsx";
import { useTranslation } from "react-i18next";

export const Dashboard = observer(() => {
    const { t } = useTranslation();

    const buttonConfigs = [
        { id: 'settings', icon: "/settings.png", title: "Settings" },
    ];

    const handleButtonClick = (id: string) => {
        console.log(`Button ${id} clicked`);
    };

    return (
        <AppContainer>
            <div>
                <Widget title={t('widgets.summary')} buttonConfigs={buttonConfigs} onButtonClick={handleButtonClick}>
                    Children goes here...
                </Widget>
            </div>
        </AppContainer>
    );
});
