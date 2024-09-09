import { LayoutSize } from '../Types';

export const screenUtil = {
    getScreenSize: (windowWidth: number) => {

        let size: LayoutSize['size'] = 'sm';

        if (windowWidth > 1200) {
            size = 'lg';
        }
        else if (windowWidth > 820) {
            size = 'md';
        }

        return size;
    },
};