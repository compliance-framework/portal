import * as configurationService from "./services/configuration-service";

export const ConfigurationApiConfig = new configurationService.Configuration({
  basePath: "http://localhost:8080/api",
});
export const PlanApi = new configurationService.PlanApi(ConfigurationApiConfig);

export type API = typeof PlanApi;
