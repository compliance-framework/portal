import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";

const ITEMS = [
  {
    label: "drawer.dashboard",
    icon: "/dashboard.png",
    route: "/",
  },
  {
    label: "drawer.catalogues",
    icon: "/catalogue.png",
    route: "/catalogues",
  },
  {
    label: "drawer.profiles",
    icon: "/profile.png",
    route: "/profiles",
  },
  {
    label: "drawer.assessmentPlans",
    icon: "/assessment.png",
    route: "/assessment-plans",
  },
];

export const Drawer = observer(() => {
  const { t } = useTranslation();
  return (
    <nav className="flex flex-col justify-between rounded-lg bg-base-200">
      <div>
        <div className="my-4 flex w-full flex-row items-center justify-center text-center">
          <img src={"/logo.png"} alt="Compliance Framework" />
        </div>
        <ul className="inherit menu rounded-box">
          {ITEMS.map(item => (
            <li key={item.route}>
              <a>
                <div className="flex w-16 flex-col items-center text-center">
                  <img src={item.icon} alt={item.label} className="my-2 w-8" />
                  <span>{t(item.label)}</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <ul className="inherit menu rounded-box">
        <li>
          <a>
            <div className="flex w-16 flex-col items-center text-center">
              <img src="/settings.png" alt="Settings" className="my-2 w-8" />
              <span>Settings</span>
            </div>
          </a>
        </li>
      </ul>
    </nav>
  );
});
