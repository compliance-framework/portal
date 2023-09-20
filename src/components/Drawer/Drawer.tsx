import { observer } from "mobx-react-lite";

const ITEMS = [
  {
    label: "Dashboard",
    icon: "dashboard",
    route: "/",
  },
  {
    label: "Catalogs",
    icon: "folder",
    route: "/catalogs",
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
  return (
    <nav className="bg-base-200 p-2">
      logo
      <ul className="inherit menu rounded-box">
        {ITEMS.map(item => (
          <li key={item.label}>
            <a>{item.label}</a>
          </li>
        ))}
      </ul>
      settings link
    </nav>
  );
});
