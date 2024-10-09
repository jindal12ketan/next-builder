"use client";
import { builder } from "@builder.io/sdk";
import Link from "next/link";
import styles from "./style.module.css";
import { useEffect } from "react";

// Initialize Builder with your public API key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

export default async function Navbar() {
  useEffect(() => {
    // const prefetchRoutes = async () => {
    //   const routesWeights = await fetchAnalyticsWeights(currentPath);
    // };
  }, []);
  // Fetch all pages from Builder.io
  const pages = await builder.getAll("page", {
    fields: "data.url,name",
    options: { noTargeting: true },
  });

  if (!pages || pages.length === 0) {
    return <div>No pages found...</div>;
  }

  return (
    <div>
      <nav className={styles.nav}>
        {pages.map((page) => (
          <Link href={`/en-US${page.data.url}`}>
            {page.name || "Unnamed Page"}
          </Link>
        ))}
      </nav>
    </div>
  );
}
