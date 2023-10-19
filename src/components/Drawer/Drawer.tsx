import { observer } from "mobx-react-lite";
import DrawerItem from "./DrawerItem";
import assessmentIcon from "./assessment.png";
import catalogueIcon from "./catalogue.png";
import dashboardIcon from "./dashboard.png";
import profileIcon from "./profile.png";
import settingsIcon from "./settings.png";

const ITEMS = [
  {
    label: "drawer.dashboard",
    icon: dashboardIcon,
    route: "/",
  },
  {
    label: "drawer.catalogues",
    icon: catalogueIcon,
    route: "/catalogues",
  },
  {
    label: "drawer.profiles",
    icon: profileIcon,
    route: "/profiles",
  },
  {
    label: "drawer.assessmentPlans",
    icon: assessmentIcon,
    route: "/assessment-plans",
  },
];

export const Drawer = observer(() => {
  return (
    <nav className="flex flex-col justify-between rounded-lg bg-base-200">
      <div>
        <div className="my-4 flex w-full flex-row items-center justify-center text-center">
          <img src={"/logo.png"} alt="Compliance Framework" />
        </div>
        <ul className="inherit menu rounded-box">
          {ITEMS.map(item => (
            <DrawerItem key={item.route} {...item} />
          ))}
        </ul>
      </div>
      <ul className="inherit menu rounded-box">
        <li>
          <a>
            <div className="flex w-16 flex-col items-center text-center">
              <img src={settingsIcon} alt="Settings" className="my-2 w-8" />
              <span>Settings</span>
            </div>
          </a>
        </li>
      </ul>
    </nav>
  );
});
