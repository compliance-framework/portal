import { observer } from "mobx-react-lite";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { AppContainer } from "../../components/AppContainer/AppContainer.tsx";
import { Widget } from "../../components/Common/Widget.tsx";

interface DashboardProps {
  children?: ReactNode;
}

const buttonConfigs = [{ id: "settings", icon: "/settings.png", title: "Settings" }];

export const Dashboard = observer<DashboardProps>(({ children }) => {
  const { t } = useTranslation();

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
