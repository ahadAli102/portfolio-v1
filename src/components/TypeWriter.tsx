'use client'
import { useState, useEffect } from 'react';

interface TypeWriterProps {
    texts: string[];
    delay: number;
}

const TypeWriter: React.FC<TypeWriterProps> = ({ texts, delay }) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            const currentString = texts[currentTextIndex];
            
            if (!isDeleting) {
                setCurrentText(currentString.substring(0, currentText.length + 1));
                
                if (currentText === currentString) {
                    setIsDeleting(true);
                    setTimeout(() => {}, 1000);
                }
            } else {
                setCurrentText(currentString.substring(0, currentText.length - 1));
                
                if (currentText === '') {
                    setIsDeleting(false);
                    setCurrentTextIndex((currentTextIndex + 1) % texts.length);
                }
            }
        }, isDeleting ? delay / 2 : delay);

        return () => clearTimeout(timeout);
    }, [currentText, currentTextIndex, isDeleting, texts, delay]);

    return (
        <p className="text-lg font-semibold text-left">
            {currentText}
            <span className="animate-blink">|</span>
        </p>
    );
};

export default TypeWriter; 