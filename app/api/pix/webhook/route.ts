export async function POST() {
  return new Response(
    JSON.stringify({ message: "PIX webhook endpoint (em construção)" }),
    { status: 200 }
  );
}
