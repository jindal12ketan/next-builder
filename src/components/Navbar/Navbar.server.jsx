// app/components/Navbar.server.js (Server Component)
import { builder } from "@builder.io/sdk";
import NavbarClient from "./Navbar.client";

// Initialize Builder with your public API key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

export default async function NavbarServer() {
  const pages = await builder.getAll("page", {
    fields: "data.url,name",
    options: { noTargeting: true },
  });

  if (!pages || pages.length === 0) {
    return <div>No pages found...</div>;
  }

  return <NavbarClient pages={pages} />;
}
