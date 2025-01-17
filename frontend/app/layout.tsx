import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/styles/theme';
import { ApolloProvider } from '@/providers/apollo.provider';
import { ReduxProvider } from '@/providers/redux.provider';
import SessionsProvider from '@/providers/session.provider';
import Navbar from '@/components/dashboard/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app'
};

export default function RootLayout(props: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <ApolloProvider>
                <SessionsProvider>
                    {/* to make sure the server component work as server components */}
                    <ReduxProvider>
                        <>
                            <body
                                className={inter.className}
                                style={{ margin: 0 }}
                            >
                                <Navbar></Navbar>
                                <AppRouterCacheProvider
                                    options={{
                                        key: 'css',
                                        enableCssLayer: true
                                    }}
                                >
                                    <ThemeProvider theme={theme}>
                                        {props.children}
                                    </ThemeProvider>
                                </AppRouterCacheProvider>
                            </body>
                        </>
                    </ReduxProvider>
                </SessionsProvider>
            </ApolloProvider>
        </html>
    );
}
