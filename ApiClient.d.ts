export function ApiClient(): {
    callSignAPI: (currentUser: any, api: any, method: any, queryparams?: any, postData?: any, file_path?: any, authorizedCall?: boolean, download?: boolean) => Promise<any>;
    constructErrorMessageFromAPIResponse: (response: any) => any;
};
export class ApiClient {
    DC: any;
}
//# sourceMappingURL=ApiClient.d.ts.map