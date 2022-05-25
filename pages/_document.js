import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <title>Laurynas Portfolio</title>
        <Head>
          <meta
            name="description"
            content="Here is where Laurynas displays his online work."
          />

          <meta property="og:url" content="https://www.playmode.vercel.com/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Laurynas Portfolio" />
          <meta
            property="og:description"
            content="Here is where Laurynas displays his online work."
          />
          <meta
            property="og:image"
            content="https://i.imgur.com/KXpbToB.jpeg"
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="" />
          <meta
            property="twitter:url"
            content="https://www.playmode.vercel.com/"
          />
          <meta name="twitter:title" content="Laurynas Portfolio" />
          <meta
            name="twitter:description"
            content="Here is where Laurynas displays his online work."
          />
          <meta
            name="twitter:image"
            content="https://i.imgur.com/KXpbToB.jpeg"
          />

          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&family=Poppins:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="overflow-x-hidden font-body">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
