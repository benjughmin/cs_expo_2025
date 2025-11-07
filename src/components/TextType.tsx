'use client';

import {
    ElementType,
    useEffect,
    useRef,
    useState,
    createElement,
    useMemo,
    useCallback,
} from 'react';
import { gsap } from 'gsap';
import { useTextSync } from '@/hooks/useTextSync';

interface TextTypeProps {
    className?: string;
    showCursor?: boolean;
    hideCursorWhileTyping?: boolean;
    cursorCharacter?: string | React.ReactNode;
    cursorBlinkDuration?: number;
    cursorClassName?: string;
    text: string | string[];
    as?: ElementType;
    typingSpeed?: number;
    initialDelay?: number;
    pauseDuration?: number;
    deletingSpeed?: number;
    loop?: boolean;
    textColors?: string[];
    variableSpeed?: { min: number; max: number };
    onSentenceComplete?: (sentence: string, index: number) => void;
    startOnVisible?: boolean;
    reverseMode?: boolean;
    // optional prop that shouldn't pass to DOM
    textdirection?: 'vertical' | 'horizontal' | 'diagonal-right' | 'diagonal-left';
}

const TextType = ({
    text,
    as: Component = 'div',
    typingSpeed = 50,
    initialDelay = 0,
    pauseDuration = 2000,
    deletingSpeed = 30,
    loop = true,
    className = '',
    showCursor = true,
    hideCursorWhileTyping = false,
    cursorCharacter = '|',
    cursorClassName = '',
    cursorBlinkDuration = 0.5,
    textColors = [],
    variableSpeed,
    onSentenceComplete,
    startOnVisible = false,
    reverseMode = false,
    textdirection, // intentionally pulled out so it won't be forwarded
    ...props
}: TextTypeProps & React.HTMLAttributes<HTMLElement>) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(!startOnVisible);
    const cursorRef = useRef<HTMLSpanElement>(null);
    const containerRef = useRef<HTMLElement>(null);
    const { phase } = useTextSync();

    // Create props safe to spread to DOM (exclude textDirection)
    const safeProps = useMemo(() => {
        // props may include any HTML attributes; ensure textDirection isn't passed through
        const { textDirection: _td, ...rest } = props as any;
        return rest as React.HTMLAttributes<HTMLElement>;
    }, [props]);

    // ✅ Safe text array fallback
    const textArray = useMemo(() => {
        if (!text) return [''];
        return Array.isArray(text) ? text : [text];
    }, [text]);

    const getRandomSpeed = useCallback(() => {
        if (!variableSpeed) return typingSpeed;
        const { min, max } = variableSpeed;
        return Math.random() * (max - min) + min;
    }, [variableSpeed, typingSpeed]);

    const getCurrentTextColor = () => {
        if (textColors.length === 0) return 'inherit';
        return textColors[currentTextIndex % textColors.length];
    };

    // Intersection observer (optional)
    useEffect(() => {
        if (!startOnVisible || !containerRef.current) return;

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) setIsVisible(true);
                });
            },
            { threshold: 0.1 }
        );

        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, [startOnVisible]);

    // Cursor blink animation
    useEffect(() => {
        if (showCursor && cursorRef.current) {
            gsap.set(cursorRef.current, { opacity: 1 });
            gsap.to(cursorRef.current, {
                opacity: 0,
                duration: cursorBlinkDuration,
                repeat: -1,
                yoyo: true,
                ease: 'power2.inOut',
            });
        }
    }, [showCursor, cursorBlinkDuration]);

    // Typing + deleting logic synced with global phase
    useEffect(() => {
        if (!isVisible || !textArray.length) return;

        let timeout: NodeJS.Timeout;
        const currentText = textArray[currentTextIndex] || '';
        const processedText = reverseMode
            ? currentText.split('').reverse().join('')
            : currentText;

        const typeNext = () => {
            if (currentCharIndex < processedText.length) {
                setDisplayedText(prev => prev + processedText[currentCharIndex]);
                setCurrentCharIndex(prev => prev + 1);
            }
        };

        const deleteNext = () => {
            if (displayedText.length > 0) {
                setDisplayedText(prev => prev.slice(0, -1));
            }
        };

        if (phase === 'typing') {
            if (currentCharIndex < processedText.length) {
                timeout = setTimeout(typeNext, variableSpeed ? getRandomSpeed() : typingSpeed);
            }
        } else if (phase === 'deleting') {
            if (displayedText.length > 0) {
                timeout = setTimeout(deleteNext, deletingSpeed);
            } else {
                // done deleting, move to next text
                if (onSentenceComplete)
                    onSentenceComplete(textArray[currentTextIndex], currentTextIndex);
                if (loop) {
                    setCurrentTextIndex(prev => (prev + 1) % textArray.length);
                    setCurrentCharIndex(0);
                }
            }
        }

        return () => clearTimeout(timeout);
    }, [
        isVisible,
        textArray,
        currentTextIndex,
        currentCharIndex,
        displayedText,
        typingSpeed,
        deletingSpeed,
        variableSpeed,
        getRandomSpeed,
        phase,
        reverseMode,
        onSentenceComplete,
        loop,
    ]);

    // Hide cursor while typing/deleting if needed
    const shouldHideCursor =
        hideCursorWhileTyping &&
        (phase === 'typing' || phase === 'deleting');

    return createElement(
        Component,
        {
            ref: containerRef,
            className: `inline-block whitespace-pre-wrap tracking-tight ${className}`,
            ...safeProps, // safe to spread to DOM; textDirection is excluded
        },
        <span
            className="inline"
            style={{ color: getCurrentTextColor() }}
        >
            {displayedText}
        </span>,
        showCursor && (
            <span
                ref={cursorRef}
                className={`ml-1 inline-block opacity-100 ${
                    shouldHideCursor ? 'hidden' : ''
                } ${cursorClassName}`}
            >
                {cursorCharacter}
            </span>
        )
    );
};

export default TextType;
