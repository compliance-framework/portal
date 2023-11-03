import { observer } from "mobx-react-lite";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { AppContainer } from "../../components/AppContainer/AppContainer.tsx";
import { Widget } from "../../components/Common/Widget.tsx";

interface DashboardProps {
  children?: ReactNode;
}
const toolbar = (
  <button
    onClick={() => console.log("summary clicked")}
    className="flex flex-row items-center justify-center rounded border border-indigo-850 px-2 py-1">
    <img src={"/settings.png"} alt="Settings" className="mr-2 w-4" />
    Settings
  </button>
);

export const Dashboard = observer<DashboardProps>(({ children }) => {
  const { t } = useTranslation();

  return (
    <AppContainer>
      <Widget title={t("widgets.summary")} toolbar={toolbar}>
        {children}
      </Widget>
    </AppContainer>
  );
});
