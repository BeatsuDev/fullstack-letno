// @ts-nocheck
/* tslint:disable */
/* eslint-disable */
/**
 * Kazoot
 * An application
 *
 * OpenAPI spec version: 1.0.0
 * Contact: vkbugge@hotmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { Competitor } from "./competitor";

/**
 *
 *
 * @export
 * @interface Competition
 */
export interface Competition {

    /**
     * @type {Array<Competitor>}
     * @memberof Competition
     */
    competitors: Array<Competitor>;

    /**
     * @type {number}
     * @memberof Competition
     */
    joinCode: number;
}
