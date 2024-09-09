import React from 'react';
import { ConfigProvider , ThemeConfig } from 'antd';

export const defaultTheme: ThemeConfig = {
    cssVar: true,
    token: {
        fontFamily: 'Lato, sans-serif',
        colorText: '#344054',
        colorPrimary: '#0C6FF3',
        fontSize: 14,
    },
    components: {
        Layout: {
            headerHeight: 72,
            headerPadding: '12px 24px',
        },
        Input: {
            controlHeight: 44,
            borderRadius: 12,
            borderRadiusLG: 12,
            colorErrorText: '#344054',
        },
        InputNumber: {
            controlHeight: 44,
            borderRadius: 12,
        },
        Form: {
            itemMarginBottom: 0,
        },
        Button: {
            controlHeight: 40,
            borderRadius: 12,
        },
        Spin: {
            dotSizeLG: 48,
        },
        Steps: {
            iconFontSize: 16,
            controlItemBgActive: '#1677ff',
            fontSize: 12,
        },
        Table: {
            headerBg: '#E7F1FE',
            cellPaddingBlock: 18,
            stickyScrollBarBg: 'none',
        },
        Avatar: {
            colorTextLightSolid: '#475467',
        },
        DatePicker: {
            controlHeight: 44,
            borderRadius: 12,
        },
        Select: {
            controlHeight: 44,
            borderRadius: 12,
        },
        Segmented: {
            itemSelectedBg: '#E7F1FE',
            trackPadding: 6,
            borderRadius: 12,
            itemSelectedColor: '#084CA5',
            trackBg: '#FFF',
        },
        Collapse: {
            headerBg: 'transparent',
            contentBg: '#FFF',
            colorBorder: 'transparent'
        },
        Tag: {
            borderRadiusSM: 12,
        },
        Slider: {
            trackBg: '#0C6FF3',
            handleColor: '#0C6FF3',
            trackHoverBg: '#0C6FF3',
            handleSize: 12,
            handleSizeHover: 15
        },
        Badge: {
            statusSize: 12,
        }, 
        Card: {
            colorBorderSecondary: '#d9d9d9',
        }
    },
};

export function ThemeProvider(props: React.PropsWithChildren<unknown>) {
    return (
        <ConfigProvider theme={defaultTheme}>{props.children}</ConfigProvider>
    );
}
