import React from 'react';

const PdfViewer: React.FC = () => {
    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <iframe
                src="./assets/docs/resume.pdf"
                style={{ width: '100%', height: '100%' }}
                title="Resume PDF"
            />
        </div>
    );
};

export default PdfViewer;
