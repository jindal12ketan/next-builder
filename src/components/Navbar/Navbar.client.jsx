"use client";

import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import styles from "./style.module.css";
import * as gtag from "../../lib/gTags";
import { fetchAnalyticsWeights } from "../../utils/fetchAnalytics";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { routeStore } from "../../redux/slices/routeSlice";
export default function NavbarClient({ pages }) {
  const currentPath = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();
  const storedRoute = useSelector((state) => state.RouteSlice.storedRoute);
  console.log("Stored Routes:", storedRoute);
  useEffect(() => {
    const prefetchRoutes = async () => {
      const routesWeights = await fetchAnalyticsWeights(currentPath);
      if (routesWeights) {
        const sortedRoutes = Object.entries(routesWeights)
          .sort(([, weightA], [, weightB]) => weightB - weightA)
          .map(([route]) => route)
          .slice(0, 2);

        const newRoutes = sortedRoutes.filter(
          (route) => !storedRoute.includes(route)
        );

        if (newRoutes.length > 0) {
          const updatedRoutes = [...new Set([...storedRoute, ...newRoutes])];
          dispatch(routeStore({ storedRoute: updatedRoutes }));
          newRoutes.forEach((route) => {
            console.log(`Prefetching route: ${route}`);
            router.prefetch(route); // Ensure this is executed
          });
        }
      } else {
        console.error(`No weights found for current path: ${currentPath}`);
      }
    };

    prefetchRoutes();
  }, [currentPath, storedRoute, dispatch, router]);

  const handleClick = (nextUrl) => {
    const currentUrl = currentPath;
    gtag.logNavigationEvent(currentUrl, nextUrl);
  };

  return (
    <nav className={styles.nav}>
      {pages.map((page) => (
        <Link
          key={page.data.url}
          href={`/en-US${page.data.url}`}
          onClick={() => handleClick(`/en-US${page.data.url}`)}
          prefetch={false}
        >
          {page.name || "Unnamed Page"}
        </Link>
      ))}
    </nav>
  );
}
