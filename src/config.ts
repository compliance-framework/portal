import * as configurationService from "./services/configuration-service";

export const ConfigurationApiConfig = new configurationService.Configuration({
  basePath: "http://localhost:8080/api",
});

export const API = {
  configurationService: {
    plan: new configurationService.PlanApi(ConfigurationApiConfig),
  },
};
