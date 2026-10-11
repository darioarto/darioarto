"use client";

import { Text } from "@once-ui-system/core";
import { useTyping } from "./TypedText";

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
  const typed = useTyping(command, delay, speed);

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
