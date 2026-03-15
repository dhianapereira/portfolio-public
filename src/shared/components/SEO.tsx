import seoContent from "@/data/seo.json";
import type { SEOContent } from "@/shared/types/seo";
import { Helmet } from "react-helmet-async";

interface SEOProps {
    title?: string;
    description?: string;
    url?: string;
    image?: string;
}

export function SEO({
    title,
    description,
    url,
    image,
}: SEOProps) {
    const seo = seoContent as SEOContent;
    const resolvedUrl = url ?? (typeof window !== "undefined" ? window.location.origin : "");
    const resolvedImage = image ?? new URL(seo.image, resolvedUrl || "http://localhost").toString();
    const resolvedTitle = title ?? seo.title;
    const resolvedDescription = description ?? seo.description;

    return (
        <Helmet htmlAttributes={{ lang: "pt-BR" }}>
            <title>{resolvedTitle}</title>

            <meta name="description" content={resolvedDescription} />
            <meta name="keywords" content={seo.keywords} />

            <meta name="author" content={seo.author} />
            <meta name="robots" content="index, follow" />
            <meta name="theme-color" content="#000000" />

            <link rel="canonical" href={resolvedUrl} />

            <meta property="og:title" content={resolvedTitle} />
            <meta property="og:description" content={resolvedDescription} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={resolvedUrl} />
            <meta property="og:site_name" content={seo.siteName} />
            <meta property="og:image" content={resolvedImage} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={resolvedTitle} />
            <meta name="twitter:description" content={resolvedDescription} />
            <meta name="twitter:image" content={resolvedImage} />
        </Helmet>
    );
}
