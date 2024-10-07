export class DropdownField extends fieldSettersAndGetters.FieldSettersAndGetters {
    constructor(response: any);
    getResponseValueFromKey(json: any, key: any): any;
    dropdown_values: any[];
    getDropdownValues(): any[];
    addDropdownValues(dropdown_values: any): void;
    setDropdownValues(dropdown_values: any): void;
    constructJson(): {
        text_property: any;
        dropdown_values: any[];
    };
}
import fieldSettersAndGetters = require("zsign-nodejs-sdk/src/api/FieldSettersAndGetters");
//# sourceMappingURL=DropdownField.d.ts.map