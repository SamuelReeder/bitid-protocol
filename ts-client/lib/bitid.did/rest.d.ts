export interface Any {
    "@type"?: string;
}
export interface Status {
    /** @format int32 */
    code?: number;
    message?: string;
    details?: {
        "@type"?: string;
    }[];
}
export interface DIDDocument {
    context?: string;
    id?: string;
    authentication?: {
        id?: string;
        type?: string;
        controller?: string;
        publicKeyPem?: string;
    }[];
    service?: {
        id?: string;
        type?: string;
        serviceEndpoint?: string;
    }[];
    created?: string;
    updated?: string;
}
export type Params = object;
export interface QueryGetDIDResponse {
    DID?: {
        context?: string;
        id?: string;
        authentication?: {
            id?: string;
            type?: string;
            controller?: string;
            publicKeyPem?: string;
        }[];
        service?: {
            id?: string;
            type?: string;
            serviceEndpoint?: string;
        }[];
        created?: string;
        updated?: string;
    };
}
export interface QueryParamsResponse {
    params?: object;
}
export interface Service {
    id?: string;
    type?: string;
    serviceEndpoint?: string;
}
export interface VerificationMethod {
    id?: string;
    type?: string;
    controller?: string;
    publicKeyPem?: string;
}
export type MsgDefineDIDDocumentResponse = object;
export type MsgUpdateParamsResponse = object;
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";
export type QueryParamsType = Record<string | number, any>;
export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: ResponseType;
    /** request body */
    body?: unknown;
}
export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
    securityWorker?: (securityData: SecurityDataType | null) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
    secure?: boolean;
    format?: ResponseType;
}
export declare enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded"
}
export declare class HttpClient<SecurityDataType = unknown> {
    instance: AxiosInstance;
    private securityData;
    private securityWorker?;
    private secure?;
    private format?;
    constructor({ securityWorker, secure, format, ...axiosConfig }?: ApiConfig<SecurityDataType>);
    setSecurityData: (data: SecurityDataType | null) => void;
    private mergeRequestParams;
    private createFormData;
    request: <T = any, _E = any>({ secure, path, type, query, format, body, ...params }: FullRequestParams) => Promise<AxiosResponse<T>>;
}
/**
 * @title HTTP API Console bitid.did
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Query
     * @name QueryParams
     * @request GET:/SamuelReeder/BitID/did/params
     */
    queryParams: (params?: RequestParams) => Promise<AxiosResponse<{
        params?: object;
    }>>;
}
