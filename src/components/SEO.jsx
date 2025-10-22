import { Helmet } from "react-helmet-async";
import siteMeta from "../data/siteMeta";

export default function SEO({ title, description, ogImage, url }) {
  const metaTitle = title
    ? `${title} – ${siteMeta.siteName}`
    : siteMeta.defaultTitle;
  const metaDesc = description || siteMeta.description;
  const image = ogImage || siteMeta.ogImage;
  const pageUrl = url || siteMeta.siteUrl;

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDesc} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}
