import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";

const ITEMS = [
  {
    label: "Dashboard",
    icon: "dashboard",
    route: "/",
  },
  {
    label: "Catalogues",
    icon: "folder",
    route: "/catalogues",
  },
  {
    label: "Bundles",
    icon: "folder",
    route: "/bundles",
  },
  {
    label: "Profiles",
    icon: "folder",
    route: "/profiles",
  },
  {
    label: "Assessment Plans",
    icon: "folder",
    route: "/assessment-plans",
  },
];

export const Drawer = observer(() => {
  const { t } = useTranslation();
  return (
    <nav className="bg-base-200 p-2">
      logo
      <ul className="inherit menu rounded-box">
        {ITEMS.map(item => (
          <li key={item.route}>
            <a>{t(item.label)}</a>
          </li>
        ))}
      </ul>
      settings link
    </nav>
  );
});
