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

/**
 *
 *
 * @export
 * @interface Feedback
 */
export interface Feedback {

    /**
     * @type {number}
     * @memberof Feedback
     */
    id: number;

    /**
     * @type {string}
     * @memberof Feedback
     */
    quizId: string;

    /**
     * @type {string}
     * @memberof Feedback
     */
    username: string;

    /**
     * @type {string}
     * @memberof Feedback
     */
    feedback: string;

    /**
     * @type {Date}
     * @memberof Feedback
     */
    createdAt: Date;
}
