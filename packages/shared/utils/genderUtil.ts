export enum GENDER {
	OTHER,
	MALE,
	FEMALE,
}

export const genderUtil = (value?: number) => {
    switch (value) {
    case GENDER.OTHER:
        return 'Other';
    case GENDER.MALE:
        return 'Male';
    case GENDER.FEMALE:
        return 'Female';
    default:
        return null;
    }
};
