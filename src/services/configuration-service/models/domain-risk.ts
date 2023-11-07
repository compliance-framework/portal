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
import { DomainCharacterization } from './domain-characterization';
import { DomainLink } from './domain-link';
import { DomainProperty } from './domain-property';
/**
 * 
 * @export
 * @interface DomainRisk
 */
export interface DomainRisk {
    /**
     * 
     * @type {Array<DomainCharacterization>}
     * @memberof DomainRisk
     */
    characterizations?: Array<DomainCharacterization>;
    /**
     * 
     * @type {string}
     * @memberof DomainRisk
     */
    deadline?: string;
    /**
     * 
     * @type {string}
     * @memberof DomainRisk
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof DomainRisk
     */
    id?: string;
    /**
     * 
     * @type {Array<DomainLink>}
     * @memberof DomainRisk
     */
    links?: Array<DomainLink>;
    /**
     * 
     * @type {Array<DomainProperty>}
     * @memberof DomainRisk
     */
    props?: Array<DomainProperty>;
    /**
     * 
     * @type {string}
     * @memberof DomainRisk
     */
    remarks?: string;
    /**
     * 
     * @type {string}
     * @memberof DomainRisk
     */
    title?: string;
}