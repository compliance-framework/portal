import {observer} from "mobx-react-lite";
import {AppContainer} from "../AppContainer/AppContainer";
import {Summary} from "./Result/Summary.tsx";
import {List} from "./Result/List.tsx";
import {Findings} from "./Result/Findings.tsx";

export const Assessment = observer(() => {
    return (
        <AppContainer>
            <div className="grid gap-2 grid-cols-2 m-0 p-0">
                <Summary />
                <Findings />
                <List />
            </div>
        </AppContainer>
    );
});
