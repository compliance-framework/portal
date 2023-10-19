import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";

interface DrawerItemProps {
  route: string;
  label: string;
  icon: string;
}

const DrawerItem = observer<DrawerItemProps>(({ route, label, icon }) => {
  const { t } = useTranslation();
  return (
    <li>
      <a href={route}>
        <div className="flex w-16 flex-col items-center text-center">
          <img src={icon} alt={label} className="my-2 w-8" />
          <span>{t(label)}</span>
        </div>
      </a>
    </li>
  );
});

export default DrawerItem;
