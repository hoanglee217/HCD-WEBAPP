import React, { useLayoutEffect } from 'react';

// import { convertOpenIdResponse, useExchangeToken, useLoginState, useTokenValidate } from '@hcd/auth';
// import { env } from '@/configs';

interface InitializerProps {
    readonly children: React.ReactNode;
}

export function Initializer(props: InitializerProps) {
    const { children } = props;

    const [initialed, setInitialed] = React.useState(false);

    // const { exchangeToken, exchangeTokenPeriodically } = useExchangeToken();

    // const tokenValidate = useTokenValidate();
    // const {
    //     getData: getSavedLogin,
    //     setData: saveLogin,
    // } = useLoginStore();

    // const [, setLoginState] = useLoginState();
    // const toLoginPage = useLoginPage();

    // const restoreLoginState = React.useCallback(async () => {
    //     // const savedLogin = getSavedLogin();
    //     // if (!savedLogin) {
    //     //     return;
    //     // }

    //     // const tokenState = tokenValidate({
    //     //     token: savedLogin.token,
    //     //     expiresAt: savedLogin.expiresAt,
    //     //     refreshToken: savedLogin.refreshToken,
    //     // });

    //     // if (tokenState === true) {
    //     //     return savedLogin;
    //     // }

    //     // if (tokenState === 'invalid' || tokenState === 'expired') {
    //     //     return;
    //     // }

    //     // if (tokenState === 'need-refresh') {
    //     //     try {
    //     //         const tokenResponse = await exchangeToken(savedLogin.refreshToken!);
    //     //         return convertOpenIdResponse(tokenResponse);
    //     //     }
    //     //     catch {
    //     //         return;
    //     //     }
    //     // }
    // }, [exchangeToken, getSavedLogin, tokenValidate]);

    useLayoutEffect(
        () => {
            if (location.pathname.includes('/auth/')) {
                return void setInitialed(true);
            }

            // 1. Restore login state
            // restoreLoginState()
            //     .then((savedLoginRes) => {

            //         if (!savedLoginRes) {
            //             throw new Error('Login state is invalid');
            //         }

            //         // Save to the browser storage
            //         saveLogin(savedLoginRes);

            //         // Set the login state globally
            //         setLoginState(savedLoginRes);

            //         // Exchange token periodically
            //         exchangeTokenPeriodically({
            //             getRefreshToken: () => getSavedLogin()?.refreshToken,
            //             setTokens: (response) => {
            //                 const loginStateValue = convertOpenIdResponse(response);
            //                 saveLogin(loginStateValue);
            //                 setLoginState(loginStateValue);
            //             },
            //             interval: 1000 * 60 * 5, // 5 minutes
            //         });
            //     })
                // 2 Finish the initialization
                // .then(() => {
                //     setInitialed(true);
                // })
                // .catch(() => {
                //     console.error('Failed to initialize the application');
                //     toLoginPage({
                //         clientId: env.MANAGEMENT_CLIENT_ID,
                //         redirectUri: env.MANAGEMENT_LOGIN_CALLBACK_PAGE
                //     });
                // });
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );

    if(!initialed) {
        return null;
    }

    return children;
}