import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <title>Aquest - Cinzia Nicoletti</title>
                <meta property="og:title" content="Aquest - Cinzia Nicoletti" key="title"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700;800&family=Roboto:wght@300;400&display=swap"
                    rel="stylesheet"/>
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}