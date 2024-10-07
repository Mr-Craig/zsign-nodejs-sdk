export class RequestType {
    constructor(response: any);
    getResponseValueFromKey(json: any, key: any): any;
    request_type_id: any;
    request_type_name: any;
    request_type_description: any;
    getRequestTypeId(): any;
    getRequestTypeName(): any;
    getRequestTypeDescription(): any;
    setRequestTypeId(request_type_id: any): void;
    setRequestTypeName(request_type_name: any): void;
    setRequestTypeDescription(request_type_description: any): void;
    constructJson(): {
        request_types: {};
    };
}
//# sourceMappingURL=RequestType.d.ts.map