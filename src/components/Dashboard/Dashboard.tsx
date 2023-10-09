import {observer} from "mobx-react-lite";
import {AppContainer} from "../AppContainer/AppContainer";
import {Summary} from "../Assessment/Result/Summary.tsx";
import {List} from "../Assessment/Result/List.tsx";
import {Findings} from "../Assessment/Result/Findings.tsx";

export const Dashboard = observer(() => {
    return (
        <AppContainer>
            <div className="grid gap-8 grid-cols-2">
                <Summary />
                <Findings />
                <List />
            </div>
        </AppContainer>
    );
});
