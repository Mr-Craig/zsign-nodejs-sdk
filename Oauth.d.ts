export class OAuth {
    constructor(arr: any);
    getResponseValueFromKey(json: any, key: any): any;
    client_id: any;
    client_secret: any;
    DC: any;
    access_token: any;
    refresh_token: any;
    getDC(): any;
    getBaseURL(): string;
    getAccessToken(): Promise<any>;
    getRefreshToken(): any;
    setRefreshToken(refresh_token: any): void;
    validateParams(currentUser: any): boolean;
    generateAccessTokenUsingRefreshToken(): false | Promise<any>;
}
export const DC_type: string[];
//# sourceMappingURL=Oauth.d.ts.map