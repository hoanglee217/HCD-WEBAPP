interface FilterNode {
    readonly property: string;
    readonly operator: 'eq' | 'ne' | 'gt' | 'lt' | 'ge' | 'le' | 'in' | 'nin';
    readonly value: string | number | boolean | string[] | number[] | boolean[];
    readonly hasValue: boolean;
}

export const queryFilterUtil = {
    parse: (node: FilterNode[]): string => {
        return node.map((n) => {
            if (!n.hasValue) {
                return '';
            }

            return `${n.property} ${n.operator} ${n.value}`;
        }).join(' and ');
    }
};