import { observer } from "mobx-react-lite";

interface HeaderProps {}

export const Header = observer<HeaderProps>(() => {
  return (
    <header className="flex-row bg-base-200">
      <h1 className="text-3xl font-bold ">HEADER!</h1>
    </header>
  );
});
