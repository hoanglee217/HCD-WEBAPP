import { TranslateResources } from './translateCodes';

const translation: Partial<TranslateResources> = {
    NEXT: 'Next',
    BACK: 'Back',
    CANCEL: 'Cancel',
    CREATE: 'Create',
    SAVE: 'Save',
    DELETE: 'Delete',
    APPLY: 'Apply',
    EDIT: 'Edit',
    REVERT: 'Revert',
    CLEAR_ALL: 'Clear all filters',
  
    //#region [Tax words]
    TAX: 'Tax',
    CREATE_TAX: 'Create Tax',
    //#endregion [Tax words]

    //#region [Calendar words]
    ADD_BREAK: 'Add Break',
    BREAK: 'Break',
    ADD_TIME_OFF: 'Add time off',
    VIEW_EMPLOYEE_DETAIL: 'View employee details',
    EDIT_THIS_DAY: 'Edit this day',
    EDIT_WORKING_HOUR: 'Edit working hours',
    REVERT_EMAIL_TEMPLATE: 'Revert Email Template',
    MESSAGE_CONFIRM_REVERT_EMAIL_TEMPLATE: 'Are you sure revert this Email Template?',
    //#endregion [Calendar words]
    TABLE_EMPTY_DESCRIPTION: 'Data not available',
    TABLE_EMPTY_TITLE: 'Empty Data',
    TABLE_SEARCH_EMPTY_DESCRIPTION: 'There are currently no results matching the selected filters.',
    TABLE_SEARCH_EMPTY_TITLE: 'No results found',
    TREE_EMPTY_DATA: 'Tree has no data!!',
};

export const en = {
    translation,
};
