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
 * @interface DomainSelection
 */
export interface DomainSelection {
    /**
     * 
     * @type {Array<string>}
     * @memberof DomainSelection
     */
    exclude?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof DomainSelection
     */
    include?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof DomainSelection
     */
    includeAll?: boolean;
}
