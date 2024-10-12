export class ZohoSign {
    static getRequest(requestId: any, currentUser: any): Promise<requestObject.RequestObject>;
    static draftRequest(requestObject: any, files: any, currentUser: any): Promise<any>;
    static addFilesToRequest(request_id: any, files: any, currentUser: any): Promise<{}>;
    static updateRequest(requestObject: any, currentUser: any, files?: any): Promise<any>;
    static submitForSignature(requestObject: any, currentUser: any): Promise<any>;
    static selfSignRequest(requestObject: any, currentUser: any): Promise<boolean>;
    static getRequestList(category: any, start_index: any, row_count: any, sort_order: string, sort_column: string, currentUser: any): Promise<{}>;
    static generateEmbeddedSigningLink(request_id: any, action_id: any, host: any, currentUser: any): Promise<any>;
    static getFieldDataFromCompletedDocument(request_id: any, currentUser: any): Promise<any>;
    static downloadRequest(request_id: any, currentUser: any, with_coc: any, is_merged: any): Promise<any>;
    static downloadDocument(request_id: any, document_id: any, currentUser: any): Promise<any>;
    static downloadCompletionCertificate(request_id: any, currentUser: any): Promise<any>;
    static recallRequest(request_id: any, currentUser: any): Promise<any>;
    static remindRequest(request_id: any, currentUser: any): Promise<any>;
    static deleteRequest(request_id: any, currentUser: any, inProgress?: boolean, reason?: any): Promise<any>;
    static deleteDocument(document_id: any, currentUser: any): Promise<any>;
    static createNewFolder(folderName: any, currentUser: any): Promise<any>;
    static getFieldTypes(currentUser: any): Promise<any>;
    static getRequestTypes(currentUser: any): Promise<any>;
    static getFolderList(currentUser: any): Promise<any>;
    static createNewRequestType(requestTypeObj: any, currentUser: any): Promise<any>;
    static createTemplate(templateObj: any, files: any, currentUser: any): Promise<any>;
    static updateTemplate(templateObj: any, currentUser: any, files?: any): Promise<any>;
    static addFilesToTemplate(template_id: any, files: any, currentUser: any): Promise<{}>;
    static getTemplate(template_id: any, currentUser: any): Promise<any>;
    static sendTemplate(templateObj: any, currentUser: any, quick_send?: boolean): Promise<any>;
    static getTemplatesList(start_index: number, row_count: number, sort_order: string, sort_column: string, currentUser: any): Promise<any>;
    static deleteTemplate(template_id: any, currentUser: any): Promise<any>;
    static extendDocumentValidity(currentUser: any, request_id: any, extendedDate: any): Promise<any>;
    static emailDocument(currentUser: any, request_id: any, emails: any): Promise<any>;
    static getReminderSettings(currentUser: any, request_id: any): Promise<any>;
    static setReminderSettings(currentUser: any, request_id: any, reminder_period: any, email_reminders?: boolean): Promise<any>;
}
import requestObject = require("./api/RequestObject");
//# sourceMappingURL=ZohoSign.d.ts.map