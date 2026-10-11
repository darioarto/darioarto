import { Column, Heading, RevealFx, Text } from "@once-ui-system/core";
import { TypedText } from "./TypedText";

interface SectionHeaderProps {
  /** Short monospace label shown above the title, e.g. "~/projects" */
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  as?: "h1" | "h2";
  id?: string;
  marginBottom?: "0" | "24" | "32" | "40";
  /** Page-intro animation: the eyebrow types itself out and the rest fades in, like the home hero */
  animate?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  as = "h2",
  id,
  marginBottom = "32",
  animate = false,
}: SectionHeaderProps) {
  const heading = (
    <Heading as={as} id={id} variant={as === "h1" ? "display-strong-s" : "heading-strong-xl"} wrap="balance">
      {title}
    </Heading>
  );
  const text = description && (
    <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
      {description}
    </Text>
  );

  return (
    <Column fillWidth gap="8" marginBottom={marginBottom}>
      <Text family="code" variant="label-default-s" onBackground="brand-weak">
        {animate ? <TypedText text={eyebrow} /> : eyebrow}
      </Text>
      {animate ? (
        <>
          <RevealFx translateY="4" fillWidth horizontal="start">
            {heading}
          </RevealFx>
          {text && (
            <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start">
              {text}
            </RevealFx>
          )}
        </>
      ) : (
        <>
          {heading}
          {text}
        </>
      )}
    </Column>
  );
}
