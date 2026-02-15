'use client';

import {
  useEffect,
  useRef,
  useState,
  createElement
} from 'react';
import gsap from 'gsap';

const GRAY_300 = '#d1d5db';

const TextType = ({
  text,
  text2,
  as: Component = 'div',
  typingSpeed = 90,
  initialDelay = 0,
  className = '',
  showCursor = true,
  cursorCharacter = '',
  cursorBlinkDuration = 0.5,
  startOnVisible = false
}) => {
  /* -------------------- State -------------------- */
  const [text1Typed, setText1Typed] = useState('');
  const [text2Typed, setText2Typed] = useState('');
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [isVisible, setIsVisible] = useState(!startOnVisible);

  const cursorRef = useRef(null);
  const containerRef = useRef(null);

  /* -------------------- Visibility Observer -------------------- */
  useEffect(() => {
    if (!startOnVisible || !containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [startOnVisible]);

  /* -------------------- Cursor Blink -------------------- */
  useEffect(() => {
    if (!showCursor || !cursorRef.current) return;

    gsap.killTweensOf(cursorRef.current);
    gsap.to(cursorRef.current, {
      opacity: 0,
      duration: cursorBlinkDuration,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut'
    });
  }, [showCursor, cursorBlinkDuration]);

  /* -------------------- Type Text 1 -------------------- */
  useEffect(() => {
    if (!isVisible || index1 >= text.length) return;

    const timeout = setTimeout(() => {
      setText1Typed(prev => prev + text[index1]);
      setIndex1(prev => prev + 1);
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [isVisible, index1, text, typingSpeed]);

  /* -------------------- Type Text 2 -------------------- */
  useEffect(() => {
    if (!isVisible || index1 < text.length || !text2) return;
    if (index2 >= text2.length) return;

    const timeout = setTimeout(() => {
      setText2Typed(prev => prev + text2[index2]);
      setIndex2(prev => prev + 1);
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [isVisible, index1, index2, text, text2, typingSpeed]);

  /* -------------------- Render -------------------- */
  return createElement(
    Component,
    {
      ref: containerRef,
      className: `whitespace-pre-wrap ${className}`
    },
    <>
      <p style={{ color: GRAY_300 }}>
        {text1Typed}
      </p>

      {text2 && (
        <p style={{ color: GRAY_300 }} className="mt-3">
          {text2Typed}
          {showCursor && index2 < text2.length && (
            <span ref={cursorRef} className="ml-1">
              {cursorCharacter}
            </span>
          )}
        </p>
      )}
    </>
  );
};

export default TextType;
