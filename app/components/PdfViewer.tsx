import { Document, Page, pdfjs } from "react-pdf";
import { useEffect, useState } from "react";

// IMPORTANT: worker setup
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.js",
    import.meta.url
).toString();

type PdfViewerProps = {
    file: string;
};

const PdfViewer = ({ file }: PdfViewerProps) => {
    const [numPages, setNumPages] = useState<number | null>(null);

    return (
        <div className="w-full h-full">
            <Document
                file={file}
                onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            >
                <Page pageNumber={1} width={300} />
            </Document>
        </div>
    );
};

export default PdfViewer;
