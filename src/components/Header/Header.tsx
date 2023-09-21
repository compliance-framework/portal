import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";

interface HeaderProps {}

export const Header = observer<HeaderProps>(() => {
  const { t } = useTranslation();
  return (
    <header className="flex-row bg-base-200">
      <h1 className="text-3xl font-bold ">{t("productName")}</h1>
    </header>
  );
});
