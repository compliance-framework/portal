import { createContext } from "react";
import * as configurationService from "../../services/configuration-service";
const ResultContext = createContext({} as configurationService.DomainResult);

export const ResultContextProvider = ResultContext.Provider;

export function useResultContext() {}
