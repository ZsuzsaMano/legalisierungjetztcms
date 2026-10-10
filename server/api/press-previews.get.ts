import { serverQueryContent } from "#content/server";

function getMetaContent(html: string, keys: string[]) {
  const metaTags = html.match(/<meta\b[^>]*>/gi) || [];

  for (const tag of metaTags) {
    const key = tag
      .match(/\b(?:property|name)\s*=\s*(["'])(.*?)\1/i)?.[2]
      ?.toLowerCase();
    if (!key || !keys.includes(key)) continue;

    const content = tag.match(/\bcontent\s*=\s*(["'])(.*?)\1/i)?.[2];
    if (content) {
      return content
        .replace(/&amp;/g, "&")
        .replace(/&quot;/g, '"')
        .replace(/&#39;|&apos;/g, "'")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">");
    }
  }
}

export default defineEventHandler(async (event) => {
  const articles = await serverQueryContent(event)
    .where({ _path: /^\/press\//, _extension: "md", featured: true })
    .sort({ date: -1 })
    .find();

  return Promise.all(
    articles.map(async (article) => {
      const preview = {
        ...article,
        publisher: new URL(article.link).hostname.replace(/^www\./, ""),
      };

      try {
        const url = new URL(article.link);
        if (url.protocol !== "https:") return preview;

        const response = await fetch(url, {
          signal: AbortSignal.timeout(5000),
        });
        if (!response.ok) return preview;

        const html = await response.text();
        const image = getMetaContent(html, [
          "og:image:secure_url",
          "og:image",
          "twitter:image",
        ]);

        return {
          ...preview,
          previewTitle:
            getMetaContent(html, ["og:title", "twitter:title"]) ||
            article.title,
          previewDescription: getMetaContent(html, [
            "og:description",
            "twitter:description",
            "description",
          ]),
          previewImage: image ? new URL(image, url).href : undefined,
          previewImageAlt: getMetaContent(html, [
            "og:image:alt",
            "twitter:image:alt",
          ]),
        };
      } catch {
        return preview;
      }
    }),
  );
});
