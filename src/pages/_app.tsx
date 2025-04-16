import axios from 'axios';
import { AppProps } from 'next/app';
import Router from 'next/router';
import { useRemoteRefresh } from 'next-remote-refresh/hook';
import { ThemeProvider } from 'next-themes';
import nProgress from 'nprogress';
import * as React from 'react';
import { SWRConfig } from 'swr';
import Script from 'next/script';

import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import 'react-tippy/dist/tippy.css';
import '@/styles/globals.css';
import '@/styles/carbon.css';
import '@/styles/mdx.css';
import '@/styles/nprogress.css';

import { getFromLocalStorage } from '@/lib/helper.client';
import { blockDomainMeta } from '@/constants/env';

Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    if (
      window.location.host !==
        (process.env.NEXT_PUBLIC_BLOCK_DOMAIN_WHITELIST || 'shaxriyor.live') &&
      blockDomainMeta
    ) {
      if (getFromLocalStorage('incrementMetaFlag') !== 'false') {
        localStorage.setItem('incrementMetaFlag', 'false');
        window.location.reload();
      }
    }
  }, []);

  useRemoteRefresh();

  return (
    <>
      {/* Google Analytics */}
      <Script
        strategy='afterInteractive'
        src='https://www.googletagmanager.com/gtag/js?id=G-PWGNW4JGM4'
      />
      <Script
        id='gtag-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PWGNW4JGM4');
          `,
        }}
      />
      <ThemeProvider attribute='class' defaultTheme='dark' enableSystem={false}>
        <SWRConfig
          value={{
            fetcher: (url) => axios.get(url).then((res) => res.data),
          }}
        >
          <Component {...pageProps} />
        </SWRConfig>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
