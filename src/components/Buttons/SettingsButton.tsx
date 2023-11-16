import { useTranslation } from "react-i18next";
import { Button } from "../Common/Button";
import icon from "./icons/settings.png";

interface SettingsButtonProps {
  onClick: () => void;
}

export function SettingsButton({ onClick }: SettingsButtonProps) {
  const { t } = useTranslation();
  return <Button icon={icon} label={t("Settings")} onClick={onClick} />;
}
