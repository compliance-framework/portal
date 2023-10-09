import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";

interface HeaderProps {}

export const Header = observer<HeaderProps>(() => {
  const { t } = useTranslation();
  return (
      <header className="flex flex-row items-center bg-cloud-burst-600 h-20 rounded-lg p-2">
          <div className="flex flex-row items-start">
              <h1 className="text-3xl font-bold">{t("productName")}</h1>
              <span className="text-sm ml-2">BETA</span>
          </div>
      </header>
  );
});
