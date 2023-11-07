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
/**
 * 
 * @export
 * @interface HandlerCreateTaskRequest
 */
export interface HandlerCreateTaskRequest {
    /**
     * 
     * @type {string}
     * @memberof HandlerCreateTaskRequest
     */
    description?: string;
    /**
     * TODO: We are keeping it minimal for now for the demo
     * @type {string}
     * @memberof HandlerCreateTaskRequest
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof HandlerCreateTaskRequest
     */
    type: string;
}
