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
 * @interface QuestionCreate
 */
export interface QuestionCreate {
    /**
     * @type {string}
     * @memberof QuestionCreate
     */
    quizId: string;

    /**
     * @type {string}
     * @memberof QuestionCreate
     */
    question: string;

    /**
     * @type {string}
     * @memberof QuestionCreate
     */
    answer?: string;

    /**
     * @type {Array<string>}
     * @memberof QuestionCreate
     */
    options?: Array<string>;
}
