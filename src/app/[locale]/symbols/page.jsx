import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../../components/builder";

// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

export default async function Page({ params }) {
  const builderModelName = "symbol";
  const locale = params.locale;
  const urlPath = params.page ? params.page.join('/') : '';

  const content = await builder
    .get(builderModelName, {
      userAttributes: {
        urlPath: `/${urlPath}`,
      },
      locale: locale,
    })
    .toPromise();

    if (!content) {
      return <div>Loading...</div>
    }  

  return (
    <>
      <RenderBuilderContent content={content} model={builderModelName}  />
    </>
  );
}