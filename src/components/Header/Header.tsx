import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";

interface HeaderProps {}

export const Header = observer<HeaderProps>(() => {
  const { t } = useTranslation();
  return (
    <header className="flex h-20 flex-row items-center rounded-lg bg-base-200 p-2">
      <div className="flex flex-row items-start">
        <h1 className="text-3xl font-bold">{t("productName")}</h1>
        <span className="ml-2 text-sm">BETA</span>
      </div>
    </header>
  );
});
