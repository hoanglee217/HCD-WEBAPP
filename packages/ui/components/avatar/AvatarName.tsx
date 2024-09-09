import React from 'react';
import { FlexBox } from '../layouts';
import { Text } from '../typo';

interface AvatarProps {
    readonly fullName: string;
    readonly size?: number;
}

function stringToColor(str: string) {
    function hashCode(str: string) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        return hash;
    }

    function intToRGB(i: number) {
        const c = (i & 0x00FFFFFF)
            .toString(16)
            .toUpperCase();
        return '#' + '00000'.substring(0, 6 - c.length) + c;
    }

    const colorCode = intToRGB(hashCode(str));
    return colorCode;
}

const defaultSize = 40;

export function AvatarName(props: AvatarProps) {
    const { fullName, size } = props;

    const nameStr = React.useMemo(() => {
        if (!fullName) return null;
        const arr = fullName.split(' ');
        if (arr.length == 1) return arr[0].charAt(0).toLocaleUpperCase() + arr[0].charAt(0).toLocaleUpperCase();

        return arr[0].charAt(0).toLocaleUpperCase() + arr[arr.length - 1].charAt(0).toLocaleUpperCase();
    }, [fullName]);

    return (
        <FlexBox
            flex='none'
            borderRadius='50%'
            backgroundColor={stringToColor(fullName)}
            width={size}
            height={size}
            justifyContent='center'
            alignItems='center'
        >
            <Text color='#fff' lineHeight={size + 'px'}>{nameStr?.toLocaleUpperCase()}</Text>
        </FlexBox>
    );
}

AvatarName.defaultProps = {
    size: defaultSize
};