export interface PdfConversionResult {
    file: boolean;
    success: boolean;
    fileName?: string;
    error?: string;
}

export async function convertPdfToImage(
    file: File
): Promise<PdfConversionResult> {
    try {
        // SERVER ONLY — no DOM, no canvas
        console.log("PDF received on server:", file.name);

        // Just validate file for now
        if (!file.name.toLowerCase().endsWith(".pdf")) {
            return {
                success: false,
                error: "Uploaded file is not a PDF",
            };
        }

        return {
            success: true,
            fileName: file.name,
        };
    } catch (err) {
        return {
            success: false,
            error: String(err),
        };
    }
}
