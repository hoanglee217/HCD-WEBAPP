
export interface CurrentUser {
    readonly id: string;
    readonly email: string;
    readonly username: string;
}

export interface ObjectInfo {
    readonly id: string;
    readonly name: string;
    readonly description?: string;
    readonly picture?: string;
}