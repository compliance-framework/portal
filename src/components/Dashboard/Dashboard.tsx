import { observer } from "mobx-react-lite";
import { useStore } from "../../state";
import { AppContainer } from "../AppContainer/AppContainer";

export const Dashboard = observer(() => {
  const { test } = useStore();
  return (
    <AppContainer>
      <div>
        <h1 className="text-3xl font-bold ">Hello world!</h1>
        <button className="btn btn-primary" onClick={() => test.increment()}>
          {test.no}++
        </button>
      </div>
    </AppContainer>
  );
});
