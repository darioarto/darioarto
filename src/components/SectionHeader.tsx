import { Column, Heading, Text } from "@once-ui-system/core";

interface SectionHeaderProps {
  /** Short monospace label shown above the title, e.g. "~/projects" */
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  as?: "h1" | "h2";
  id?: string;
  marginBottom?: "0" | "24" | "32" | "40";
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  as = "h2",
  id,
  marginBottom = "32",
}: SectionHeaderProps) {
  return (
    <Column fillWidth gap="8" marginBottom={marginBottom}>
      <Text family="code" variant="label-default-s" onBackground="brand-weak">
        {eyebrow}
      </Text>
      <Heading as={as} id={id} variant={as === "h1" ? "display-strong-s" : "heading-strong-xl"} wrap="balance">
        {title}
      </Heading>
      {description && (
        <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
          {description}
        </Text>
      )}
    </Column>
  );
}
