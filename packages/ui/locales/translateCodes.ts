export const translateCodes = {
    //#region [Common words]
    BACK: 'BACK',
    OK: 'OK',
    NEXT: 'NEXT',
    CANCEL: 'CANCEL',
    DELETE: 'DELETE',
    SAVE: 'SAVE',
    EDIT: 'EDIT',
    REVERT: 'REVERT',
    VIEW: 'VIEW',
    CREATE: 'CREATE',
    APPLY: 'APPLY',
    CLEAR_ALL: 'CLEAR_ALL',
    //#endregion [Common words]

    //#region [Tax words]
    TAX: 'TAX',
    CREATE_TAX: 'CREATE_TAX',
    //#endregion [Tax words]

    //#region [Calendar words]
    ADD_BREAK: 'ADD_BREAK',
    BREAK: 'BREAK',
    ADD_TIME_OFF: 'ADD_TIME_OFF',
    VIEW_EMPLOYEE_DETAIL: 'VIEW_EMPLOYEE_DETAIL',
    EDIT_THIS_DAY: 'EDIT_THIS_DAY',
    EDIT_WORKING_HOUR: 'EDIT_WORKING_HOUR',
    REVERT_EMAIL_TEMPLATE: 'REVERT_EMAIL_TEMPLATE',
    MESSAGE_CONFIRM_REVERT_EMAIL_TEMPLATE: 'MESSAGE_CONFIRM_REVERT_EMAIL_TEMPLATE',
    //#endregion [Calendar words]

    //Table
    TABLE_EMPTY_DESCRIPTION: 'TABLE_EMPTY_DESCRIPTION',
    TABLE_EMPTY_TITLE: 'TABLE_EMPTY_TITLE',
    TABLE_SEARCH_EMPTY_DESCRIPTION: 'TABLE_SEARCH_EMPTY_DESCRIPTION',
    TABLE_SEARCH_EMPTY_TITLE: 'TABLE_SEARCH_EMPTY_TITLE',
    TREE_EMPTY_DATA: 'TREE_EMPTY_DATA',
};

export type TranslateResources = Record<keyof typeof translateCodes, string>;
