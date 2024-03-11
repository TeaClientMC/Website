<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/"
                xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <title><xsl:value-of select="/rss/channel/title"/> Web Feed</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
        <script src="https://cdn.tailwindcss.com"/>
      </head>
      <body class="bg-neutral-900 h-screen w-screen flex flex-col items-center">
        <nav class="container-md px-3 py-2 mt-2 mt-md-5 mb-5 w-full">
          <p class="bg-gradient-to-r from-violet-700 via-purple-700 to-pink-700 text-white ml-n1 px-1 py-1 mb-1 text-center">
            <strong>This is a web feed,</strong> also known as an RSS feed. <strong>Subscribe</strong> by copying the URL from the address bar into your newsreader.
          </p>
        </nav>
        <div class="container-md px-3 py-3 markdown-body text-white text-center w-[40%]">
          <header class="py-5 text-xl">
            <h1 class="text-4xl"><xsl:value-of select="/rss/channel/title"/></h1>
            <p class="text-xl"><xsl:value-of select="/rss/channel/description"/></p>
          </header>
          <h1 class="text-2xl">Recent Items:</h1>
          <xsl:for-each select="/rss/channel/item">
            <div class="mt-5 text-xl">
              <h3 class="mb-0">
                <ul class="list-disc list-inside">
                <li class="mb-2">
                <a class="underline text-indigo-500" target="_blank">
                  <xsl:attribute name="href">
                    <xsl:value-of select="link"/>
                  </xsl:attribute>
                  <xsl:value-of select="title"/>
                  <xsl:text> | </xsl:text>
                  <xsl:value-of select="pubDate" />
                </a>
                </li>
              </ul>
              </h3>
              <br/>
              <a class="text-indigo-400" target="_blank">
                <xsl:attribute name="href">
                  <xsl:value-of select="/rss/channel/link"/>
                </xsl:attribute>
                Visit Website for more detials &#x2192;
              </a>
            </div>
          </xsl:for-each>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
