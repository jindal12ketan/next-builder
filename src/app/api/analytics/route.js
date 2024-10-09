import { getAnalyticsReport } from "../../../lib/googleAnalytics";

export async function GET(req) {
  try {
    const data = await getAnalyticsReport();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching analytics data:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch analytics data" }),
      { status: 500 }
    );
  }
}
