import { TranslateResources } from './translateCodes';

const translation: Partial<TranslateResources> = {
    //#region [Common]
    SAVE: 'Save',
    UPDATE: 'Update',
    CREATE: 'Create',
    NAME: 'Name',
    CANCEL: 'Cancel',
    EXPLORE: 'Explore',
    //#endregion [Common]
    
    //#region [Layout]
    PLATFORM_FOR_SALON_SUCCESS: 'Platform for Salon Success',
    INTELLIGENT_EFFICIENT_EFFORTLESS: 'Intelligent - Efficient - Effortless',
    //#endregion [Layout]

    //#region [Social]
    CONTINUE_WITH_GOOGLE: 'Continue with Google',
    CONTINUE_WITH_FACEBOOK: 'Continue with Facebook',
    //#endregion [Social]

    //#region [Login Page]
    LOGIN_HEADER: 'Log in to IziSalon',
    LOGIN_BUTTON: 'Log in',
    LOGIN_LINK: 'Log in',
    LOGIN_FORM_REMEMBER_ME: 'Remember me',
    USER_ALREADY_EXISTS: 'User already exists',
    EMAIL_ALREADY_EXISTS: 'The email already exists',
    //#endregion [Login Page]

    //#region [Register Page]
    SIGN_UP_LINK: 'Sign up',
    SIGN_UP_BUTTON: 'Sign up',
    DO_NOT_HAVE_ACCOUNT: 'Don\'t have an account?',
    FORGOT_PASSWORD: 'Forgot password?',
    SIGN_UP_HEADER: 'Sign up to IziSalon',
    GENERAL_TERMS: 'General Terms',
    PRIVACY_POLICY: 'Privacy Policy.',
    HAVE_AN_ACCOUNT_QUESTION: 'Already have an account?',
    BY_SIGNING_UP: 'By clicking “Get Started", you are agreeing to the',
    GET_STARTED: 'Get Started',
    //#endregion [Register Page]

    //#region [Verify Email Page]
    CHECK_YOUR_EMAIL: 'Check your email',
    SENT_VERIFY_RESET_PASS: 'We sent a password reset link to',
    SENT_VERIFY_CONFIRM_CODE_TO: 'We sent a verify link to',
    DIDNT_RECEIVE_THE_EMAIL: 'Didn’t receive the email?',
    SIGN_UP_SUCCESS: 'Sign up successfully!',
    CLICK_TO_RESEND: 'Click to resend',
    VERIFY_EMAIL: 'Verify email',
    //#endregion [Verify Email Page]

    //#region [Register Form]
    EMAIL: 'Email',
    EMAIL_PLACEHOLDER: 'Enter your email',
    EMAIL_PLACEHOLDER_SHORT: 'Enter email',
    EMAIL_REQUIRED: 'Email is required',
    EMAIL_INVALID: 'Invalid email entered. Please try again.',
    PASSWORD_INVALID:'Invalid password entered. Please try again.',
    PASSWORD: 'Password',
    PASSWORD_PLACEHOLDER: 'Enter your password',
    INCORRECT_USERNAME_PASSWORD: 'Incorrect email or password.',
    PASSWORD_PLACEHOLDER_SHORT: 'Enter password',
    PASSWORD_REQUIRED: 'Password is required',
    PASSWORD_MIN_LENGTH: 'Password must be at least 6 characters',
    PASSWORD_MAX_LENGTH: 'The password is not over 20 characters.',
    PASSWORD_CONFIRM_MAX_LENGTH: 'The confirm password is not over 20 characters.',
    MAX_LENGTH_EMAIL: 'The email is not over 255 characters.',
    LAST_NAME: 'Last name',
    LAST_NAME_PLACEHOLDER: 'Enter last name',
    LAST_NAME_REQUIRED: 'Last name is required',
    FIRST_NAME: 'First name',
    FIRST_NAME_PLACEHOLDER: 'Enter first name',
    FIRST_NAME_REQUIRED: 'First name is required',
    FIRST_NAME_MAX_LENGTH: 'The first name is not over 100 characters.',
    LAST_NAME_MAX_LENGTH: 'The last name is not over 100 characters.',
    LAST_NAME_MIN_LENGTH: 'Last Name must be more than 1 character.',
    FIRST_NAME_MIN_LENGTH: 'First Name must be more than 1 character.',
    //#endregion [Register Form]

    //#region [Check Mail Page]
    SEND_RESET_INSTRUCTIONS: 'No worries, we’ll send you reset instructions.',
    OPEN_EMAIL_APP: 'Open email app',
    BACK_TO_LOG_IN: 'Back to log in',
    //#endregion [Check Mail Page]

    //#region [Reset password Page]
    RESET_PASSWORD: 'Reset password',
    SET_NEW_PASSWORD: 'Set new password',
    NEW_PW_MUST_DIFF_OLD_PW:
        'Your new password must be different to previously used passwords.',
    PASSWORD_RESET: 'Password reset',
    CHANGE_PASSWORD_SUCCESS:
        'Your password has been successfully reset. Click below to log in magically.',
    CONFIRM_PASSWORD: 'Confirm password',
    PASSWORD_NOT_MATCH: 'Password and confirmations do not match. Please try again.',
    //#endregion [Reset password Page]
    
    //#region [Setup layout]
    NEXT: 'Next',
    BACK: 'Back',
    SALON_INFO: 'Salon basic information',
    BRANCH_SETUP: 'Branch setup',
    MAIN_BUSINESS_CATEGORY: 'Main business category',
    SERVICE_SETUP: 'Service setup',
    SERVICE_SETUP_TITLE: 'Add your services',
    SERVICE_SETUP_DESCRIPTION: 'Start by adding a service. More services, detailed edits, and categorization can be easily done later.',
    EMPLOYEE_SETUP: 'Employee setup',
    EMPLOYEE_SETUP_TITLE: 'Add employee members',
    EMPLOYEE_SETUP_DESCRIPTION: 'Add basic information about your team. You\'ll be able to complete their profiles, assign services, and adjust working hours later on',
    INTRODUCE_TITLE_1: 'View client\'s appointments with intuitive interface',
    INTRODUCE_TITLE_2: 'Appointment creation for individual and group',
    INTRODUCE_TITLE_3: 'Swift transactions, happy clients',
    INTRODUCE_TITLE_4: 'Personalized client connections',
    INTRODUCE_TITLE_5: 'Insightful sales analytics',
    INTRODUCE_DESC_1: 'Focus on simplicity and efficiency, our scheduler offers dedicated views for employee, providing you with a comprehensive tool to manage appointments effectively.',
    INTRODUCE_DESC_2: 'Visualize bookings, avoid conflicts, and maximize the utilization of your facilities with ease.',
    INTRODUCE_DESC_3: 'From adding bills to managing lists and facilitating check-outs, our system makes financial management effortless and efficient.',
    INTRODUCE_DESC_4: 'Build lasting relationships with your clients using EasySalon\'s Simple CRM. Effortlessly manage customer details, preferences, and appointments.',
    INTRODUCE_DESC_5: 'Uncover valuable insights into your salon\'s performance with the Sales Analyzer. Data-driven decisions for a thriving business.',
    //#endregion [Setup layout]

    //#region [Setup Salon page]
    BUSINESS_NAME: 'Business name',
    PHONE_NUMBER: 'Phone number',
    WELCOME_TO_ES: 'Welcome to IziSalon!',
    SETUP_YOUR_SALON: 'Let\'s set up your salon for success.',
    BUSINESS_NAME_PLACEHOLDER: 'Enter business name',
    PHONE_PLACEHOLDER: 'Enter your phone number',
    BUSINESS_IS_REQUIRED: 'The business name is required.',
    PHONE_NUMBER_IS_INVALID: 'The phone number is invalid, Please try again.',
    ERROR: 'Error',
    SUCCESS: 'Success',
    LOGIN_FAIL: 'Login fail!!!',
    LOGIN_SUCCESS: 'Login successfully!',
    RESEND_EMAIL_RESET_PASSWORD: 'Resend email for reset password success!!!',
    CHECK_YOUR_EMAIL_NOW: 'Please check your email now.',
    RESEND_EMAIL_VERIFY_SUCCESS: 'Resend email verify success!!!',
    INCORRECT_PASSWORD: 'Incorrect password. Please try again.',
    INVALID_EMAIL: 'Invalid email!',
    INVALID_EMAIL_ENTERED: 'Invalid email entered. Please try again.',
    RESET_PASSWORD_SUCCESS: 'Reset password successfully!',
    VALIDATE_PASSWORD: 'Create a password with a mix of letters, numbers and symbols',
    VALIDATE_CONFIRM_PASSWORD: 'Create a confirm password with a mix of letters, numbers and symbols',
    //#endregion [Setup Salon page]

    //#region [Setup Salon page]
    ADD_FIRST_BRANCH: 'Add your first branch',
    FINISH: 'Finish',
    BUSINESS_CATEGORY_DESC:'Choose up to 3 service types',
    BRANCH_SETUP_DESC:
        'Start by adding your first branch. More branches, detailed edits can be easily done later.',
    BRANCH_NAME: 'Branch name',
    BRANCH_NAME_PLACEHOLDER: 'Enter branch name',
    BRANCH_ADDRESS: 'Branch address',
    BRANCH_ADDRESS_PLACEHOLDER: 'Enter brand address',
    CITY: 'City',
    CITY_PLACEHOLDER: 'Select city',
    STATE: 'State',
    STATE_PLACEHOLDER: 'Select state',
    POSTCODE: 'Postcode',
    POSTCODE_PLACEHOLDER: 'Select postcode',
    COUNTRY: 'Country',
    COUNTRY_PLACEHOLDER: 'Select country',
    BRANCH_NAME_IS_REQUIRED: 'The branch name is required.',
    BRANCH_ADDRESS_IS_REQUIRED: 'The branch address is required.',
    STATE_IS_REQUIRED: 'The state is required.',
    CITY_IS_REQUIRED: 'The city is required.',
    POSTCODE_IS_REQUIRED: 'The postcode is required.',
    COUNTRY_IS_REQUIRED: 'The country is required.',
    BRANCH_SETTING_NAME: 'Branch',
    BRANCH_LOGO: 'Logo',
    BRANCH_PHONE: 'Phone Number',
    BRANCH_PHONE_PLACEHOLDER: 'Enter phone number',
    BRANCH_CITY: 'City/District',
    BRANCH_CITY_PLACEHOLDER: 'Chose branch city/district',
    BRANCH_CITY_IS_REQUIRED: 'Branch city is required!!',
    BRANCH_STATE: 'State',
    BRANCH_STATE_PLACEHOLDER: 'Chose branch state',
    BRANCH_STATE_IS_REQUIRED: 'Branch state is required!!',
    BRANCH_POSTCODE: 'Postcode',
    BRANCH_POSTCODE_PLACEHOLDER: 'Enter branch postcode',
    BRANCH_POSTCODE_IS_REQUIRED: 'Branch postcode is required!!',
    BRANCH_COUNTRY: 'Country',
    BRANCH_COUNTRY_PLACEHOLDER: 'Enter branch country',
    BRANCH_COUNTRY_IS_REQUIRED: 'Branch country is required!!',
    BRANCH_CURRENCY: 'Currency',
    BRANCH_CURRENCY_PLACEHOLDER: 'Chose branch currency',
    BRANCH_TAX: 'Tax',
    BRANCH_TAX_PLACEHOLDER: 'Enter branch default tax',
    BRANCH_LANGUAGES: 'Languages',
    BRANCH_LANGUAGES_PLACEHOLDER: 'Select branch language',
    BRANCH_TIMEZONE: 'Timezone',
    BRANCH_TIMEZONE_PLACEHOLDER: 'Select branch timezone',
    BRANCH_TIMEZONE_IS_REQUIRED: 'Branch Timezone is required!!',
    BRANCH_DATE_TIME_FORMAT: 'Date and time formats',
    BRANCH_DATE_TIME_FORMAT_PLACEHOLDER: 'Enter date and time formats',
    BRANCH_INFORMATION: 'Branch Information',
    BRANCH_WORKING_TIME: 'Working Time',
    BRANCH_UPDATE_TITLE: 'Edit branch',
    BRANCH_UPDATE_SUCCESS: 'Update Branch Successful',
    BRANCH_UPDATE_FAILURE: 'Update Branch failure',
    BRANCH_UPDATE_DESCRIPTION: 'Branch information has been updated successfully',
    BRANCH_CREATE_SUCCESS: 'Create Branch Successful',
    BRANCH_CREATE_FAILURE: 'Create Branch failure',
    BRANCH_CREATE_DESCRIPTION: 'New branch has been Created',
    BRANCH_CHANGE_SUCCESS: 'Change Branch Successful',
    BRANCH_CHANGE_FAILURE: 'BRANCH_CREATE_FAILURE',
    //#endregion [Setup Salon page]

    //#region [Setup BusinessHour page]
    BUSINESS_HOUR_NAME: 'Set up your branch business hours',
    //#endregion [Setup BusinessHour page]

    //#region [Setup service page]
    USE_SAMPLE: 'Use sample data',
    CREATE_CATEGORY: 'Create category',
    CREATE_SERVICE: 'Create service',
    NO_SERVICE: 'No Services',
    CREATE_CATEGORY_TITLE: 'Add service category',
    UPDATE_CATEGORY_TITLE: 'Edit service category',
    CREATE_SERVICE_TITLE: 'Add service',
    UPDATE_SERVICE_TITLE: 'Edit service',
    DELETE_SERVICE_TITLE: 'Delete service',
    DELETE_SERVICE_CONFIRM_MESSAGE: 'Are you sure you want to delete this service',
    CREATE_SERVICE_SUCCESS: 'The service was created successfully!',
    UPDATE_SERVICE_SUCCESS: 'The service was updated successfully!',
    DELETE_SERVICE_SUCCESS: 'The service was deleted successfully!',
    CATEGORY_NAME_REQUIRED: 'Category name is required',
    MAX_LENGTH_NAME: 'The name is not over {{number}} characters',
    CATEGORY: 'Category',
    SERVICE_CATEGORY_REQUIRED: 'Category is required',
    SERVICE_CATEGORY_PLACEHOLDER: 'Select category',
    CREATE_CATEGORY_SUCCESS: 'The category was created successfully',
    UPDATE_CATEGORY_SUCCESS: 'The category was updated successfully!',
    DELETE_CATEGORY_SUCCESS: 'The category was deleted successfully!',
    DURATION_MINUTE: 'Duration',
    SERVICE_DURATION_REQUIRED: 'Duration minute is required',
    ENTER_DURATION: 'Enter duration',
    SERVICE_DURATION_INVALID: 'Service duration is invalid',
    PRICE: 'Price',
    ENTER_PRICE: 'Enter price',
    PRICE_REQUIRED: 'Service price is required',
    PRICE_SERVICE_INVALID: 'Service price is invalid',
    TAX: 'Tax',
    SELECT_TAX: 'Enter tax',
    DESCRIPTION: 'Description',
    ENTER_DESCRIPTION: 'Enter a description for this service',
    MAX_LENGTH_DESCRIPTION: 'The description is not over {{number}} characters',
    //#endregion [Setup service page]

    //#region [Setup employee page]
    NO_EMPLOYEE: 'No Employee members',
    GENERAL_INFO: 'General information',
    CREATE_EMPLOYEE: 'Add employee member',
    MAX_LENGTH_ADDRESS: 'MAX_LENGTH_ADDRESS',
    UPLOAD_PHOTO: 'Upload photo',
    JOB_INFO: 'Job Info',
    JOB_TYPE: 'Job type',
    CREATE_JOB_TYPE: 'Create job type',
    SELECT_JOB_TYPE: 'Select job type',
    START_DATE: 'Start date',
    START_DATE_PLACEHOLDER: 'Select start date',
    STATUS: 'Status',
    STATUS_PLACEHOLDER: 'Select status',
    UPDATE_EMPLOYEE_TITLE: 'Edit employee member',
    CREATE_EMPLOYEE_TITLE: 'Add employee member',
    DELETE_EMPLOYEE_TITLE: 'Delete employee member',
    DELETE_EMPLOYEE_CONFIRM_MESSAGE: 'Are you sure you want to delete this employee',
    CREATE_EMPLOYEE_SUCCESS: 'The employee was created successfully!',
    UPDATE_EMPLOYEE_SUCCESS: 'The employee was updated successfully!',
    DELETE_EMPLOYEE_SUCCESS: 'The employee was deleted successfully!',
    BRANCH_CREATE_SUCCESS_ALERT: 'Congratulations! Your salon is ready to go.',
    BRANCH_CREATE_DESCRIPTION_ALERT: 'Now, let the magic begin. Explore your salon home, manage appointments, and watch your salon thrive! If you ever need assistance, we\'re just a click away. Happy salon managing!',
    //#endregion [Setup employee page]

    //#region [Message ID]
    NM_AU_01: 'Login successfully!',
    NM_AU_02: 'Sign up successfully!',
    //#endregion [Message ID]

    //#region [Validation Messages]
    VAL_AU_01: 'Incorrect username or password.',
    VAL_AU_02: 'The email is required.',
    VAL_AU_03: 'The password is required.',
    VAL_AU_04: 'Passwords and confirmations do not match. Please try again.',
    VAL_AU_05: 'Invalid code entered. Please retry or request a new code.',
    VAL_AU_06: 'The business name is required.',
    VAL_AU_07: 'The phone number is invalid, Please try again.',
    VAL_AU_08: 'The branch name is required.',
    VAL_AU_09: 'The branch address is required.',
    VAL_AU_10: 'Invalid email entered. Please try again.',
    VAL_AU_11: 'The confirmed password is required.',
    VAL_AU_12: 'Invalid password entered. Please try again.',
    VAL_AU_13: 'Reset password successfully!',
    VAL_AU_14: 'The invalid address was entered. Please try again.',
    VAL_AU_15: 'Invalid branch name entered. Please try again.',
    VAL_AU_16: 'The state is required.',
    VAL_AU_17: 'The city is required.',
    VAL_AU_18: 'The postcode is required.',
    //#endregion [Validation Messages]
};

export const en = {
    translation,
};