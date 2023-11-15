import * as configurationService from "./services/configuration-service";

export const ConfigurationApiConfig = new configurationService.Configuration({
  basePath: import.meta.env.VITE_CONFIGURATION_SERVICE_URL,
});

export const API = {
  configurationService: {
    plan: new configurationService.PlanApi(ConfigurationApiConfig),
  },
};
