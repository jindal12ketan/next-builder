import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../../components/builder";

// Initialize Builder with your public API key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

export default async function LocalizedPage({ params }) {
  const builderModelName = "page";
  const locale = params.locale;
  const urlPath = "/" + (params.page?.join("/") || "");

  const content = await builder
    .get(builderModelName, {
      userAttributes: {
        urlPath: urlPath,
      },
      locale: locale,
    })
    .toPromise();

  if (!content) {
    return <div>Page not found.....</div>;
  }

  return <RenderBuilderContent content={content} model={builderModelName} />;
}

export async function generateStaticParams() {
  const pages = await builder.getAll("page", {
    fields: "data.url,name",
    options: { noTargeting: true },
  });

  const locales = ["en-US", "fr-CA"]; // Supported locales

  return locales.flatMap((locale) =>
    pages
      .filter((page) => typeof page.data?.url === "string") // Ensure valid URLs
      .map((page) => ({
        locale,
        page: page.data?.url?.split("/").filter(Boolean) || [], // Handle valid URLs
      }))
  );
}
