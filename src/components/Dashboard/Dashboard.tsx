import { observer } from "mobx-react-lite";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { AppContainer } from "../AppContainer/AppContainer";
import { Widget } from "../Common/Widget.tsx";

interface DashboardProps {
  children?: ReactNode;
}

export const Dashboard = observer<DashboardProps>(({ children }) => {
  const { t } = useTranslation();

  const buttonConfigs = [{ id: "settings", icon: "/settings.png", title: "Settings" }];

  const handleButtonClick = (id: string) => {
    console.log(`Button ${id} clicked`);
  };

  return (
    <AppContainer>
      <div>
        <Widget title={t("widgets.summary")} buttonConfigs={buttonConfigs} onButtonClick={handleButtonClick}>
          {children}
        </Widget>
      </div>
    </AppContainer>
  );
});
