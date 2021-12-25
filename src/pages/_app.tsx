import '../styles/globals.scss';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import * as React from 'react';
import Head from 'next/head';
import type {AppProps} from 'next/app';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import createEmotionCache from '../lib/createEmotionCache';
import {CacheProvider, EmotionCache} from '@emotion/react';
import {lightTheme, darkTheme} from '../styles/theme';
import {useEffect, useState} from 'react';
import {Box, Drawer, Toolbar, useMediaQuery} from '@mui/material';
import PrimaryAppBar from '../components/navigation/PrimaryAppBar';
import DrawerContent from '../components/navigation/DrawerContent';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
}

/**
 * Main Application. This component will always be rendered
 */
export default function App(props: MyAppProps) {
    /* region === dark mode? === */
    const [wantDarkModeLocalStorage, setWantDarkModeLocalStorage] = useState<null | string>(null);

    useEffect(() => { // Has to be in a useEffect because localStorage is not available on SSR. This is best practice
        setWantDarkModeLocalStorage(localStorage.getItem('dark-mode'));
    }, []);

    const [isDarkMode, setIsDarkMode] = useState(false);
    const isDarkModePreferred = useMediaQuery('(prefers-color-scheme: dark)');
    useEffect(() => { // For some reason useMediaQuery fires twice. This is why this is needed...
        console.log('prefers-color-scheme: dark:', isDarkModePreferred);
        if (wantDarkModeLocalStorage === null) {
            setIsDarkMode(isDarkModePreferred);
        } else {
            setIsDarkMode(wantDarkModeLocalStorage === '1');
        }
    }, [wantDarkModeLocalStorage, isDarkModePreferred]);
    /* endregion --- dark mode? --- */
    const drawerWidth = 240;
    const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

    const {Component, emotionCache = clientSideEmotionCache, pageProps} = props;
    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <title>karman</title>
                <meta name="viewport" content="initial-scale=1, width=device-width"/>
            </Head>
            <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
                <CssBaseline/>
                <Box sx={{display: 'flex'}}>
                    <PrimaryAppBar
                        isDarkModeState={[isDarkMode, setIsDarkMode]}
                        isMobileDrawerOpenState={[isMobileDrawerOpen, setIsMobileDrawerOpen]}
                        drawerWidth={drawerWidth}
                    />
                    <Box
                        component="nav"
                        sx={{width: {md: drawerWidth}, flexShrink: {md: 0}}}
                    >
                        <Drawer
                            variant="temporary"
                            open={isMobileDrawerOpen}
                            onClose={() => {
                                setIsMobileDrawerOpen(false);
                            }}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                            sx={{
                                display: {xs: 'block', md: 'none'},
                                '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                            }}
                        >
                            <DrawerContent/>
                        </Drawer>
                        <Drawer
                            variant="permanent"
                            sx={{
                                display: {xs: 'none', md: 'block'},
                                '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                            }}
                            open
                        >
                            <DrawerContent/>
                        </Drawer>
                    </Box>
                    <Box
                        component="main"
                        sx={{flexGrow: 1, p: 3, width: {md: `calc(100% - ${drawerWidth}px)`}}}
                    >
                        <Toolbar/>
                        <Component {...pageProps} />
                    </Box>
                </Box>
            </ThemeProvider>
        </CacheProvider>
    );
}
