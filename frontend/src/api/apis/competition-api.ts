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

import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { Competition } from '../models';
import { PrecompetitionInfo } from '../models';
/**
 * CompetitionApi - axios parameter creator
 * @export
 */
export const CompetitionApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a new competition
         * @param {string} quizId The ID of the quiz
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCompetition: async (quizId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'quizId' is not null or undefined
            if (quizId === null || quizId === undefined) {
                throw new RequiredError('quizId','Required parameter quizId was null or undefined when calling createCompetition.');
            }
            const localVarPath = `/quiz/{quizId}/competition`
                .replace(`{${"quizId"}}`, encodeURIComponent(String(quizId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
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
         * Get a competition
         * @param {number} joinCode The join code
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCompetition: async (joinCode: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'joinCode' is not null or undefined
            if (joinCode === null || joinCode === undefined) {
                throw new RequiredError('joinCode','Required parameter joinCode was null or undefined when calling getCompetition.');
            }
            const localVarPath = `/competition/{joinCode}`
                .replace(`{${"joinCode"}}`, encodeURIComponent(String(joinCode)));
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
        /**
         * Join a competition
         * @param {number} joinCode The join code
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        joinCompetition: async (joinCode: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'joinCode' is not null or undefined
            if (joinCode === null || joinCode === undefined) {
                throw new RequiredError('joinCode','Required parameter joinCode was null or undefined when calling joinCompetition.');
            }
            const localVarPath = `/competition/{joinCode}`
                .replace(`{${"joinCode"}}`, encodeURIComponent(String(joinCode)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
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
         * Start a competition
         * @param {number} joinCode The join code
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        startCompetition: async (joinCode: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'joinCode' is not null or undefined
            if (joinCode === null || joinCode === undefined) {
                throw new RequiredError('joinCode','Required parameter joinCode was null or undefined when calling startCompetition.');
            }
            const localVarPath = `/competition/{joinCode}`
                .replace(`{${"joinCode"}}`, encodeURIComponent(String(joinCode)));
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
    }
};

/**
 * CompetitionApi - functional programming interface
 * @export
 */
export const CompetitionApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Create a new competition
         * @param {string} quizId The ID of the quiz
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createCompetition(quizId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Competition>>> {
            const localVarAxiosArgs = await CompetitionApiAxiosParamCreator(configuration).createCompetition(quizId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get a competition
         * @param {number} joinCode The join code
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCompetition(joinCode: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Competition>>> {
            const localVarAxiosArgs = await CompetitionApiAxiosParamCreator(configuration).getCompetition(joinCode, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Join a competition
         * @param {number} joinCode The join code
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async joinCompetition(joinCode: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<PrecompetitionInfo>>> {
            const localVarAxiosArgs = await CompetitionApiAxiosParamCreator(configuration).joinCompetition(joinCode, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Start a competition
         * @param {number} joinCode The join code
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async startCompetition(joinCode: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await CompetitionApiAxiosParamCreator(configuration).startCompetition(joinCode, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * CompetitionApi - factory interface
 * @export
 */
export const CompetitionApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Create a new competition
         * @param {string} quizId The ID of the quiz
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createCompetition(quizId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Competition>> {
            return CompetitionApiFp(configuration).createCompetition(quizId, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a competition
         * @param {number} joinCode The join code
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCompetition(joinCode: number, options?: AxiosRequestConfig): Promise<AxiosResponse<Competition>> {
            return CompetitionApiFp(configuration).getCompetition(joinCode, options).then((request) => request(axios, basePath));
        },
        /**
         * Join a competition
         * @param {number} joinCode The join code
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async joinCompetition(joinCode: number, options?: AxiosRequestConfig): Promise<AxiosResponse<PrecompetitionInfo>> {
            return CompetitionApiFp(configuration).joinCompetition(joinCode, options).then((request) => request(axios, basePath));
        },
        /**
         * Start a competition
         * @param {number} joinCode The join code
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async startCompetition(joinCode: number, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return CompetitionApiFp(configuration).startCompetition(joinCode, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CompetitionApi - object-oriented interface
 * @export
 * @class CompetitionApi
 * @extends {BaseAPI}
 */
export class CompetitionApi extends BaseAPI {
    /**
     * Create a new competition
     * @param {string} quizId The ID of the quiz
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompetitionApi
     */
    public async createCompetition(quizId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<Competition>> {
        return CompetitionApiFp(this.configuration).createCompetition(quizId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get a competition
     * @param {number} joinCode The join code
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompetitionApi
     */
    public async getCompetition(joinCode: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<Competition>> {
        return CompetitionApiFp(this.configuration).getCompetition(joinCode, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Join a competition
     * @param {number} joinCode The join code
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompetitionApi
     */
    public async joinCompetition(joinCode: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<PrecompetitionInfo>> {
        return CompetitionApiFp(this.configuration).joinCompetition(joinCode, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Start a competition
     * @param {number} joinCode The join code
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompetitionApi
     */
    public async startCompetition(joinCode: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return CompetitionApiFp(this.configuration).startCompetition(joinCode, options).then((request) => request(this.axios, this.basePath));
    }
}
