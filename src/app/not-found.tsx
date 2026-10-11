import { Column, Heading, Text } from "@once-ui-system/core";

export default function NotFound() {
  return (
    <Column as="section" fill center paddingBottom="160" gap="12">
      <Text family="code" variant="label-default-s" onBackground="neutral-weak">
        <span style={{ color: "var(--brand-on-background-weak)" }}>~/dario</span> $ cd ./this-page
      </Text>
      <Text family="code" variant="label-default-s" onBackground="neutral-weak" marginBottom="l">
        bash: cd: no such file or directory
      </Text>
      <Text variant="display-strong-xl">404</Text>
      <Heading marginBottom="m" variant="display-default-xs">
        Page not found
      </Heading>
      <Text onBackground="neutral-weak">
        The page you are looking for does not exist or has been removed.
      </Text>
    </Column>
  );
}
