"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API = exports.ConfigurationApiConfig = void 0;
var configurationService = require("./services/configuration-service");
exports.ConfigurationApiConfig = new configurationService.Configuration({
  basePath: "http://localhost:8080/api",
});
exports.API = {
  configurationService: {
    plan: new configurationService.PlanApi(exports.ConfigurationApiConfig),
  },
};
