import { ObjectInfo } from '@hcd/shared';
import { atom } from 'recoil';
export interface IdentityUserProfile {
    readonly id: string;
    readonly username: string;
    readonly email: string;
    readonly role: string;
    readonly organizations: ObjectInfo[];
}

export interface ManagementUserProfile {
    readonly id: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly avatar: string;
    readonly phoneNumber: string;
    readonly createdAt: string;
    readonly loginMethods: string[];
    readonly organization: {
        readonly id: string;
        readonly name: string;
        readonly phoneNumber?: string;
    };
    readonly branchActive?: string;
    readonly branch: {
        readonly id: string;
        readonly name: string;
        readonly logo?: string;
        readonly countryCode?: string;
        readonly phoneNumber?: string;
        readonly currency?: string;
        readonly tax?: string;
        readonly dateTimeFormat?: string;
        readonly timezone?: string;
        readonly languages?: string;
        readonly address: string;
        readonly city: string;
        readonly state: string;
        readonly postalCode: string;
        readonly country: string;
        readonly organizationId?: string;
    }
}

export const managementProfileState = atom<ManagementUserProfile | null>({
    key: 'MANAGEMENT_PROFILES',
    default: null
});

export const identityProfileState = atom<IdentityUserProfile | null>({
    key: 'IDENTITY_PROFILES',
    default: null
});
