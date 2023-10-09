import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
import {Link} from "react-router-dom";

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
    label: "drawer.assessments",
    icon: "/assessment.png",
    route: "/assessments",
  },
];

export const Drawer = observer(() => {
  const { t } = useTranslation();
  return (
      <nav className="bg-cloud-burst-600 flex flex-col justify-between rounded-lg">
        <div>
          <div className="flex flex-row items-center justify-center text-center w-full my-4">
            <img src={"/logo.png"} alt="Compliance Framework" />
          </div>
          <ul className="inherit menu rounded-box">
            {ITEMS.map(item => (
                <li key={item.route}>
                  <Link to={item.route}>
                    <div className="flex flex-col items-center text-center w-16">
                      <img src={item.icon} alt={item.label} className="my-2 w-8" />
                      <span>{t(item.label)}</span>
                    </div>
                  </Link>
                </li>
            ))}
          </ul>
        </div>
        <ul className="inherit menu rounded-box">
          <li>
            <a>
              <div className="flex flex-col items-center text-center w-16">
                <img src="/settings.png" alt="Settings" className="my-2 w-8" />
                <span>Settings</span>
              </div>
            </a>
          </li>
        </ul>
      </nav>
  );
});
