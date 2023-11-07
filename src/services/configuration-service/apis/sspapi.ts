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
import { HandlerCreateSSPRequest } from '../models';
import { HandlerIdResponse } from '../models';
/**
 * SSPApi - axios parameter creator
 * @export
 */
export const SSPApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a SSP with the given title
         * @summary Create a SSP
         * @param {HandlerCreateSSPRequest} body SSP to add
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSspPost: async (body: HandlerCreateSSPRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling apiSspPost.');
            }
            const localVarPath = `/api/ssp`;
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
    }
};

/**
 * SSPApi - functional programming interface
 * @export
 */
export const SSPApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Create a SSP with the given title
         * @summary Create a SSP
         * @param {HandlerCreateSSPRequest} body SSP to add
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSspPost(body: HandlerCreateSSPRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<HandlerIdResponse>>> {
            const localVarAxiosArgs = await SSPApiAxiosParamCreator(configuration).apiSspPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SSPApi - factory interface
 * @export
 */
export const SSPApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Create a SSP with the given title
         * @summary Create a SSP
         * @param {HandlerCreateSSPRequest} body SSP to add
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSspPost(body: HandlerCreateSSPRequest, options?: AxiosRequestConfig): Promise<AxiosResponse<HandlerIdResponse>> {
            return SSPApiFp(configuration).apiSspPost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SSPApi - object-oriented interface
 * @export
 * @class SSPApi
 * @extends {BaseAPI}
 */
export class SSPApi extends BaseAPI {
    /**
     * Create a SSP with the given title
     * @summary Create a SSP
     * @param {HandlerCreateSSPRequest} body SSP to add
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SSPApi
     */
    public async apiSspPost(body: HandlerCreateSSPRequest, options?: AxiosRequestConfig) : Promise<AxiosResponse<HandlerIdResponse>> {
        return SSPApiFp(this.configuration).apiSspPost(body, options).then((request) => request(this.axios, this.basePath));
    }
}
