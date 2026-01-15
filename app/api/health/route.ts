export async function GET() {
  return new Response(
    JSON.stringify({
      status: "ok",
      service: "klose-payments",
      timestamp: new Date().toISOString()
    }),
    { status: 200 }
  );
}
