export async function GET() {
  return Response.json({
    name: "Cultura Colombiana",
    short_name: "Cultuura",
    description: "Aplicación interactiva de preguntas y respuestas sobre la cultura, historia y geografía de Colombia.",
    start_url: "/",
    display: "standalone",
    background_color: "#FCD116",
    theme_color: "#003893",
    icons: [
      {
        src: "https://cdn-icons-png.flaticon.com/512/330/330541.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any"
      },
      {
        src: "https://cdn-icons-png.flaticon.com/512/330/330541.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable"
      }
    ]
  });
}