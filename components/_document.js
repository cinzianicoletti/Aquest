import Document, {
    Html,
    Head,
    Main,
    NextScript,
} from 'next/document'
import { generateFonts } from 'fantasticon';


class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return initialProps
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="stylesheet" type="text/css" href="../public/font/icons.css" />
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700;800&family=Roboto:wght@300;400&display=swap"
                        rel="stylesheet"/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument