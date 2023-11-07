/* tslint:disable */
/* eslint-disable */
/**
 * Compliance Framework Configuration Service API
 * This is the API for the Compliance Framework Configuration Service.
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { ApiError } from '../models';
import { DomainResult } from '../models';
import { HandlerCreateActivityRequest } from '../models';
import { HandlerCreatePlanRequest } from '../models';
import { HandlerCreateTaskRequest } from '../models';
import { HandlerIdResponse } from '../models';
/**
 * PlanApi - axios parameter creator
 * @export
 */
export const PlanApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This method creates a new task and adds it to a specific plan.
         * @summary Creates a new task for a specific plan
         * @param {HandlerCreateTaskRequest} body Task to add
         * @param {string} id Plan ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiPlanIdTasksPost: async (body: HandlerCreateTaskRequest, id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling apiPlanIdTasksPost.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling apiPlanIdTasksPost.');
            }
            const localVarPath = `/api/plan/{id}/tasks`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * This function is used to create an activity for a given task.
         * @summary Create activity
         * @param {HandlerCreateActivityRequest} body Activity
         * @param {number} id Plan ID
         * @param {number} taskId Task ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiPlanIdTasksTaskIdActivitiesPost: async (body: HandlerCreateActivityRequest, id: number, taskId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling apiPlanIdTasksTaskIdActivitiesPost.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling apiPlanIdTasksTaskIdActivitiesPost.');
            }
            // verify required parameter 'taskId' is not null or undefined
            if (taskId === null || taskId === undefined) {
                throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling apiPlanIdTasksTaskIdActivitiesPost.');
            }
            const localVarPath = `/api/plan/{id}/tasks/{taskId}/activities`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)))
                .replace(`{${"taskId"}}`, encodeURIComponent(String(taskId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates a new plan in the system
         * @summary Create a plan
         * @param {HandlerCreatePlanRequest} body Plan to add
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiPlanPost: async (body: HandlerCreatePlanRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling apiPlanPost.');
            }
            const localVarPath = `/api/plan`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Activate a plan by its ID. If the plan is already active, no action will be taken.
         * @summary Activate a plan
         * @param {string} id Plan ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        planIdActivatePut: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling planIdActivatePut.');
            }
            const localVarPath = `/plan/{id}/activate`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Return the assessment results related with the plan with the given ID.
         * @summary Return the assessment results
         * @param {string} id Plan ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        planIdResultsGet: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling planIdResultsGet.');
            }
            const localVarPath = `/plan/{id}/results`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PlanApi - functional programming interface
 * @export
 */
export const PlanApiFp = function(configuration?: Configuration) {
    return {
        /**
         * This method creates a new task and adds it to a specific plan.
         * @summary Creates a new task for a specific plan
         * @param {HandlerCreateTaskRequest} body Task to add
         * @param {string} id Plan ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiPlanIdTasksPost(body: HandlerCreateTaskRequest, id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<string>>> {
            const localVarAxiosArgs = await PlanApiAxiosParamCreator(configuration).apiPlanIdTasksPost(body, id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * This function is used to create an activity for a given task.
         * @summary Create activity
         * @param {HandlerCreateActivityRequest} body Activity
         * @param {number} id Plan ID
         * @param {number} taskId Task ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiPlanIdTasksTaskIdActivitiesPost(body: HandlerCreateActivityRequest, id: number, taskId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<HandlerIdResponse>>> {
            const localVarAxiosArgs = await PlanApiAxiosParamCreator(configuration).apiPlanIdTasksTaskIdActivitiesPost(body, id, taskId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Creates a new plan in the system
         * @summary Create a plan
         * @param {HandlerCreatePlanRequest} body Plan to add
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiPlanPost(body: HandlerCreatePlanRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<HandlerIdResponse>>> {
            const localVarAxiosArgs = await PlanApiAxiosParamCreator(configuration).apiPlanPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Activate a plan by its ID. If the plan is already active, no action will be taken.
         * @summary Activate a plan
         * @param {string} id Plan ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async planIdActivatePut(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await PlanApiAxiosParamCreator(configuration).planIdActivatePut(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Return the assessment results related with the plan with the given ID.
         * @summary Return the assessment results
         * @param {string} id Plan ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async planIdResultsGet(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<DomainResult>>>> {
            const localVarAxiosArgs = await PlanApiAxiosParamCreator(configuration).planIdResultsGet(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * PlanApi - factory interface
 * @export
 */
export const PlanApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * This method creates a new task and adds it to a specific plan.
         * @summary Creates a new task for a specific plan
         * @param {HandlerCreateTaskRequest} body Task to add
         * @param {string} id Plan ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiPlanIdTasksPost(body: HandlerCreateTaskRequest, id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<string>> {
            return PlanApiFp(configuration).apiPlanIdTasksPost(body, id, options).then((request) => request(axios, basePath));
        },
        /**
         * This function is used to create an activity for a given task.
         * @summary Create activity
         * @param {HandlerCreateActivityRequest} body Activity
         * @param {number} id Plan ID
         * @param {number} taskId Task ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiPlanIdTasksTaskIdActivitiesPost(body: HandlerCreateActivityRequest, id: number, taskId: number, options?: AxiosRequestConfig): Promise<AxiosResponse<HandlerIdResponse>> {
            return PlanApiFp(configuration).apiPlanIdTasksTaskIdActivitiesPost(body, id, taskId, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a new plan in the system
         * @summary Create a plan
         * @param {HandlerCreatePlanRequest} body Plan to add
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiPlanPost(body: HandlerCreatePlanRequest, options?: AxiosRequestConfig): Promise<AxiosResponse<HandlerIdResponse>> {
            return PlanApiFp(configuration).apiPlanPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * Activate a plan by its ID. If the plan is already active, no action will be taken.
         * @summary Activate a plan
         * @param {string} id Plan ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async planIdActivatePut(id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return PlanApiFp(configuration).planIdActivatePut(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Return the assessment results related with the plan with the given ID.
         * @summary Return the assessment results
         * @param {string} id Plan ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async planIdResultsGet(id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<DomainResult>>> {
            return PlanApiFp(configuration).planIdResultsGet(id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PlanApi - object-oriented interface
 * @export
 * @class PlanApi
 * @extends {BaseAPI}
 */
export class PlanApi extends BaseAPI {
    /**
     * This method creates a new task and adds it to a specific plan.
     * @summary Creates a new task for a specific plan
     * @param {HandlerCreateTaskRequest} body Task to add
     * @param {string} id Plan ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlanApi
     */
    public async apiPlanIdTasksPost(body: HandlerCreateTaskRequest, id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<string>> {
        return PlanApiFp(this.configuration).apiPlanIdTasksPost(body, id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * This function is used to create an activity for a given task.
     * @summary Create activity
     * @param {HandlerCreateActivityRequest} body Activity
     * @param {number} id Plan ID
     * @param {number} taskId Task ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlanApi
     */
    public async apiPlanIdTasksTaskIdActivitiesPost(body: HandlerCreateActivityRequest, id: number, taskId: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<HandlerIdResponse>> {
        return PlanApiFp(this.configuration).apiPlanIdTasksTaskIdActivitiesPost(body, id, taskId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Creates a new plan in the system
     * @summary Create a plan
     * @param {HandlerCreatePlanRequest} body Plan to add
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlanApi
     */
    public async apiPlanPost(body: HandlerCreatePlanRequest, options?: AxiosRequestConfig) : Promise<AxiosResponse<HandlerIdResponse>> {
        return PlanApiFp(this.configuration).apiPlanPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Activate a plan by its ID. If the plan is already active, no action will be taken.
     * @summary Activate a plan
     * @param {string} id Plan ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlanApi
     */
    public async planIdActivatePut(id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return PlanApiFp(this.configuration).planIdActivatePut(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Return the assessment results related with the plan with the given ID.
     * @summary Return the assessment results
     * @param {string} id Plan ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlanApi
     */
    public async planIdResultsGet(id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<DomainResult>>> {
        return PlanApiFp(this.configuration).planIdResultsGet(id, options).then((request) => request(this.axios, this.basePath));
    }
}
