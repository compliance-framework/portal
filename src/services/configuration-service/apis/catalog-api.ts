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
import { HandlerCatalogIdResponse } from '../models';
import { HandlerCreateCatalogRequest } from '../models';
/**
 * CatalogApi - axios parameter creator
 * @export
 */
export const CatalogApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a catalog with the given title
         * @summary Create a catalog
         * @param {HandlerCreateCatalogRequest} body Catalog to add
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCatalogPost: async (body: HandlerCreateCatalogRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling apiCatalogPost.');
            }
            const localVarPath = `/api/catalog`;
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
 * CatalogApi - functional programming interface
 * @export
 */
export const CatalogApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Create a catalog with the given title
         * @summary Create a catalog
         * @param {HandlerCreateCatalogRequest} body Catalog to add
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCatalogPost(body: HandlerCreateCatalogRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<HandlerCatalogIdResponse>>> {
            const localVarAxiosArgs = await CatalogApiAxiosParamCreator(configuration).apiCatalogPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * CatalogApi - factory interface
 * @export
 */
export const CatalogApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Create a catalog with the given title
         * @summary Create a catalog
         * @param {HandlerCreateCatalogRequest} body Catalog to add
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCatalogPost(body: HandlerCreateCatalogRequest, options?: AxiosRequestConfig): Promise<AxiosResponse<HandlerCatalogIdResponse>> {
            return CatalogApiFp(configuration).apiCatalogPost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CatalogApi - object-oriented interface
 * @export
 * @class CatalogApi
 * @extends {BaseAPI}
 */
export class CatalogApi extends BaseAPI {
    /**
     * Create a catalog with the given title
     * @summary Create a catalog
     * @param {HandlerCreateCatalogRequest} body Catalog to add
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CatalogApi
     */
    public async apiCatalogPost(body: HandlerCreateCatalogRequest, options?: AxiosRequestConfig) : Promise<AxiosResponse<HandlerCatalogIdResponse>> {
        return CatalogApiFp(this.configuration).apiCatalogPost(body, options).then((request) => request(this.axios, this.basePath));
    }
}
