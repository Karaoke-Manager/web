import '../styles/globals.scss';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Head from 'next/head';
import type {AppProps} from 'next/app';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import createEmotionCache from '../lib/createEmotionCache';
import {CacheProvider, EmotionCache} from '@emotion/react';
import {lightTheme, darkTheme} from '../styles/theme';
import {useEffect, useState} from 'react';
import {useMediaQuery} from '@mui/material';
import DarkModeSwitch from '../components/DarkModeSwitch';
import ExampleEmotionButton from '../components/ExampleEmotionButton';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
}

const App = (props: MyAppProps) => {
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

    const {Component, emotionCache = clientSideEmotionCache, pageProps} = props;
    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <title>karman</title>
                <meta name="viewport" content="initial-scale=1, width=device-width"/>
            </Head>
            <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline/>
                <DarkModeSwitch checked={isDarkMode} onChange={(event, checked) => {
                    setIsDarkMode(checked);
                    localStorage.setItem('dark-mode', checked ? '1' : '0');
                }}/>
                <ExampleEmotionButton />
                <Component {...pageProps} />
            </ThemeProvider>
        </CacheProvider>
    );
};

export default App;
