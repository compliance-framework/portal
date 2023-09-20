import { observer } from "mobx-react-lite";
import { useStore } from "../../state";

export const Dashboard = observer(() => {
  const { test } = useStore();
  return (
    <>
      <h1 className="text-3xl font-bold ">Hello world!</h1>
      <button className="btn btn-primary" onClick={() => test.increment()}>
        {test.no}++
      </button>
    </>
  );
});
