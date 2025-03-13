export interface IPagination<T> {
    items: T[];
    meta: IPaginationMeta;
}

export interface IPaginationMeta {
    search?: string;
    filter?: string;
    totalItems?: number;
    pageCount?: number;
    page?: number;
    pageSize?: number;
}