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
import { DomainLink } from './domain-link';
import { DomainProperty } from './domain-property';
/**
 * 
 * @export
 * @interface DomainFinding
 */
export interface DomainFinding {
    /**
     * 
     * @type {string}
     * @memberof DomainFinding
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof DomainFinding
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof DomainFinding
     */
    implementationStatementId?: string;
    /**
     * 
     * @type {Array<DomainLink>}
     * @memberof DomainFinding
     */
    links?: Array<DomainLink>;
    /**
     * 
     * @type {Array<string>}
     * @memberof DomainFinding
     */
    origins?: Array<string>;
    /**
     * 
     * @type {Array<DomainProperty>}
     * @memberof DomainFinding
     */
    props?: Array<DomainProperty>;
    /**
     * 
     * @type {Array<string>}
     * @memberof DomainFinding
     */
    relatedObservations?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof DomainFinding
     */
    relatedRisks?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof DomainFinding
     */
    remarks?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof DomainFinding
     */
    target?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof DomainFinding
     */
    title?: string;
}