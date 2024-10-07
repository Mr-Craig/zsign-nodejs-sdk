export class Fields {
    constructor(response: any);
    date_fields: any[];
    dropdown_fields: any[];
    file_fields: any[];
    text_fields: any[];
    image_fields: any[];
    check_boxes: any[];
    radio_groups: any[];
    document_form_data: any[];
    getDateFields(): any[];
    getDropdownFields(): any[];
    getFileFields(): any[];
    getTextFields(): any[];
    getImageFields(): any[];
    getCheckBoxes(): any[];
    getRadioGroups(): any[];
    getDocumentFormData(): any[];
    getDocumentFormDataByFieldLabel(field_label: any): any;
    addDateField(date_field: any): void;
    addDropdownField(dropdown_field: any): void;
    addFileField(file_field: any): void;
    addTextField(text_field: any): void;
    addImageField(image_field: any): void;
    addCheckBox(check_box: any): void;
    addRadioGroup(radio_group: any): void;
    setDateFields(date_fields: any): void;
    setDropdownFields(dropdown_fields: any): void;
    setFileFields(file_fields: any): void;
    setTextFields(text_fields: any): void;
    setImageFields(image_fields: any): void;
    setCheckBoxes(check_boxes: any): void;
    setRadioGroups(radio_groups: any): void;
    constructJson(): {};
}
//# sourceMappingURL=Fields.d.ts.map