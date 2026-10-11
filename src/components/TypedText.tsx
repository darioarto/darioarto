"use client";

import { useEffect, useState } from "react";

/** Number of characters of `text` revealed so far, typing one every `speed` ms after `delay`. */
export function useTyping(text: string, delay = 400, speed = 80) {
  const [typed, setTyped] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let count = 0;
    let timer: number;

    const tick = () => {
      count = reduceMotion ? text.length : count + 1;
      setTyped(count);
      if (count < text.length) timer = window.setTimeout(tick, speed);
    };

    timer = window.setTimeout(tick, reduceMotion ? 0 : delay);
    return () => window.clearTimeout(timer);
  }, [text, delay, speed]);

  return typed;
}

const visuallyHidden: React.CSSProperties = {
  position: "absolute",
  width: 1,
  height: 1,
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  whiteSpace: "nowrap",
};

interface TypedTextProps {
  text: string;
  delay?: number;
  speed?: number;
  caret?: boolean;
}

// Types `text` out character by character, terminal style. Screen readers get the full text at once.
export function TypedText({ text, delay = 400, speed = 60, caret = true }: TypedTextProps) {
  const typed = useTyping(text, delay, speed);

  return (
    <>
      <span aria-hidden="true">
        {text.slice(0, typed)}
        {caret && <span className="caret" />}
      </span>
      <span style={visuallyHidden}>{text}</span>
    </>
  );
}
