export class RadioGroup extends fieldSettersAndGetters.FieldSettersAndGetters {
    constructor(response: any);
    getResponseValueFromKey(json: any, key: any): any;
    sub_fields: any[];
    getSubFields(): any[];
    addSubField(sub_field: any): void;
    setSubFields(sub_fields: any): void;
    constructJson(): {
        sub_fields: {};
    };
}
import fieldSettersAndGetters = require("zsign-nodejs-sdk/src/api/FieldSettersAndGetters");
//# sourceMappingURL=RadioGroup.d.ts.map