export async function POST() {
  return new Response(
    JSON.stringify({ message: "PIX status endpoint (em construção)" }),
    { status: 200 }
  );
}
