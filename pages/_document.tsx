import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicons  */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/static/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/static/favicons/safari-pinned-tab.svg"
          color="#004ab3"
        />
        <link rel="shortcut icon" href="/static/favicons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#004ab3" />
        <meta
          name="msapplication-config"
          content="/static/favicons/browserconfig.xml"
        />
        <meta name="theme-color" content="#ffffff" />
        {/* <!-- Primary Meta Tags --> */}
        <meta
          name="title"
          content="refactorEdu - Making the journey through education easier"
        />
        <meta
          name="description"
          content="Community-created comprehensive roadmaps to guide people in their pursuit of education and growth across all (STEAM) fields"
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://refactoredu.co" />
        <meta
          property="og:title"
          content="refactorEdu - Making the journey through education easier"
        />
        <meta
          property="og:description"
          content="Community-created comprehensive roadmaps to guide people in their pursuit of education and growth across all (STEAM) fields"
        />
        <meta
          property="og:image"
          content="https://refactoredu.co/static/images/banner.png"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://refactoredu.co" />
        <meta
          property="twitter:title"
          content="refactorEdu - Making the journey through education easier"
        />
        <meta
          property="twitter:description"
          content="Community-created comprehensive roadmaps to guide people in their pursuit of education and growth across all (STEAM) fields"
        />
        <meta
          property="twitter:image"
          content="https://refactoredu.co/static/images/banner.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
