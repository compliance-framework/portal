/* eslint-disable @typescript-eslint/no-explicit-any */
import * as configurationService from "./services/configuration-service";

let runtimeEnv: Record<string, string> = {};
try {
  runtimeEnv = JSON.parse((window as any).RUNTIME_ENV ?? "{}");
} catch {
  // do nothing
}

export const ConfigurationApiConfig = new configurationService.Configuration({
  basePath: runtimeEnv["CONFIGURATION_SERVICE_URL"] ?? import.meta.env.VITE_CONFIGURATION_SERVICE_URL,
});

export const API = {
  configurationService: {
    plan: new configurationService.PlanApi(ConfigurationApiConfig),
  },
};
