"use client";

import { useEffect, useState } from "react";
import { Text } from "@once-ui-system/core";

interface PromptProps {
  command: string;
  path?: string;
  /** ms before typing starts */
  delay?: number;
  /** ms per character */
  speed?: number;
}

// Shell-style line that types out `command` and leaves a blinking caret.
export function Prompt({ command, path = "~/dario", delay = 400, speed = 80 }: PromptProps) {
  const [typed, setTyped] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let count = 0;
    let timer: number;

    const tick = () => {
      count = reduceMotion ? command.length : count + 1;
      setTyped(count);
      if (count < command.length) timer = window.setTimeout(tick, speed);
    };

    timer = window.setTimeout(tick, reduceMotion ? 0 : delay);
    return () => window.clearTimeout(timer);
  }, [command, delay, speed]);

  return (
    <Text
      family="code"
      variant="body-default-m"
      onBackground="neutral-weak"
      aria-label={`${path} $ ${command}`}
    >
      <span aria-hidden="true">
        <span style={{ color: "var(--brand-on-background-weak)" }}>{path}</span>
        {" $ "}
        <span style={{ color: "var(--neutral-on-background-strong)" }}>
          {command.slice(0, typed)}
        </span>
        <span className="caret" />
      </span>
    </Text>
  );
}
