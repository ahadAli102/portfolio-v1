import type {NextPage} from "next";
import PdfViewer from "@/components/body/PdfViewer";

const Resume: NextPage = () => {
    return (
        <div>
            <h1>My Resume</h1>
            <PdfViewer />
        </div>
    );
};

export default Resume;
