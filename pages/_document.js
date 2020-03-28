import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <html lang='en'>
                <Head>
                    <meta charSet='utf-8' />
                    <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
                    <meta
                        name='viewport'
                        content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no'
                    />
                    <style>{'body { background-color: orange; color: #ffae19; font-size: 98px}'}</style>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}
