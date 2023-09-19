import { observer } from "mobx-react-lite";
import { store } from "../state";

export const App = observer(() => {
  const { test } = store;
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <p className="m-10 bg-black text-white">Click on the Vite and React logos to learn more</p>
      <p>{test.no}</p>
      <button className="btn" onClick={() => test.increment()}>
        Inc
      </button>
    </>
  );
});

export default App;
