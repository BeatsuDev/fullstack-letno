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
import { User } from '../models';
import { UserLogin } from '../models';
/**
 * UserSessionApi - axios parameter creator
 * @export
 */
export const UserSessionApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get logged in user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        loggedInUser: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/user/session`;
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
         * Log in with credentials
         * @param {UserLogin} [body] Login credentials
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        login: async (body?: UserLogin, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/user/session`;
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
        /**
         * Log out User
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        logout: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/user/session`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
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
         * Refresh token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        refreshToken: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/user/session`;
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
 * UserSessionApi - functional programming interface
 * @export
 */
export const UserSessionApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Get logged in user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async loggedInUser(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<User>>> {
            const localVarAxiosArgs = await UserSessionApiAxiosParamCreator(configuration).loggedInUser(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Log in with credentials
         * @param {UserLogin} [body] Login credentials
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async login(body?: UserLogin, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<User>>> {
            const localVarAxiosArgs = await UserSessionApiAxiosParamCreator(configuration).login(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Log out User
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async logout(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await UserSessionApiAxiosParamCreator(configuration).logout(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Refresh token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async refreshToken(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await UserSessionApiAxiosParamCreator(configuration).refreshToken(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * UserSessionApi - factory interface
 * @export
 */
export const UserSessionApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Get logged in user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async loggedInUser(options?: AxiosRequestConfig): Promise<AxiosResponse<User>> {
            return UserSessionApiFp(configuration).loggedInUser(options).then((request) => request(axios, basePath));
        },
        /**
         * Log in with credentials
         * @param {UserLogin} [body] Login credentials
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async login(body?: UserLogin, options?: AxiosRequestConfig): Promise<AxiosResponse<User>> {
            return UserSessionApiFp(configuration).login(body, options).then((request) => request(axios, basePath));
        },
        /**
         * Log out User
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async logout(options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return UserSessionApiFp(configuration).logout(options).then((request) => request(axios, basePath));
        },
        /**
         * Refresh token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async refreshToken(options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return UserSessionApiFp(configuration).refreshToken(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UserSessionApi - object-oriented interface
 * @export
 * @class UserSessionApi
 * @extends {BaseAPI}
 */
export class UserSessionApi extends BaseAPI {
    /**
     * Get logged in user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserSessionApi
     */
    public async loggedInUser(options?: AxiosRequestConfig) : Promise<AxiosResponse<User>> {
        return UserSessionApiFp(this.configuration).loggedInUser(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Log in with credentials
     * @param {UserLogin} [body] Login credentials
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserSessionApi
     */
    public async login(body?: UserLogin, options?: AxiosRequestConfig) : Promise<AxiosResponse<User>> {
        return UserSessionApiFp(this.configuration).login(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Log out User
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserSessionApi
     */
    public async logout(options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return UserSessionApiFp(this.configuration).logout(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Refresh token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserSessionApi
     */
    public async refreshToken(options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return UserSessionApiFp(this.configuration).refreshToken(options).then((request) => request(this.axios, this.basePath));
    }
}
