import { observer } from "mobx-react-lite";
import { store } from "../state";

export const App = observer(() => {
  const { test } = store;
  return (
    <>
      <h1 className="text-3xl font-bold ">Hello world!</h1>
      <button className="btn btn-primary" onClick={() => test.increment()}>
        {test.no}++
      </button>
    </>
  );
});

export default App;
