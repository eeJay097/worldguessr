import Head from "next/head";
import Script from "next/script";
// import { useTranslation } from "react-i18next";

export default function HeadContent({text}) {

  return (
          <Head>
      <title>
        {text("tabTitle")}
        </title>
    <meta property="og:title" content={text("fullTitle")}/>

    <meta name="description"
    content={text("shortDescMeta")}
    />
    <meta property="og:description"
    content={text("fullDescMeta")}
    />

    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0"/>

    <link rel="icon" type="image/x-icon" href="/icon.ico" />
<meta name="google-site-verification" content="7s9wNJJCXTQqp6yr1GiQxREhloXKjtlbOIPTHZhtY04" />
<meta name="yandex-verification" content="3a7622d10295cc01" />

{/* <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/> */}
<link href="https://fonts.googleapis.com/css2?family=Jockey+One&display=swap" rel="stylesheet"/>

<script
      src="https://maps.googleapis.com/maps/api/js?callback=initialize&v=weekly"
      defer
    ></script>

  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3340825671684972"
      crossorigin="anonymous">
</script>

    <meta property="og:image" content="/icon_144x144.png" />
    <meta property="og:url" content="https://worldguessr.com" />
    <meta property="og:type" content="website" />
	  <script async src="https://api.adinplay.com/libs/aiptag/pub/SWT/worldguessr.com/tag.min.js"></script>
</Head>
  )
}
