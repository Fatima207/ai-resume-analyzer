import { convertPdfToImage } from "~/lib/pdf2img";

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const file = formData.get("file") as File | null;

        if (!file) {
            return new Response(
                JSON.stringify({ error: "No file received" }),
                { status: 400 }
            );
        }

        const result = await convertPdfToImage(file);

        return new Response(JSON.stringify(result), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        return new Response(
            JSON.stringify({ error: String(error) }),
            { status: 500 }
        );
    }
}
