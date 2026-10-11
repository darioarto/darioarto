"use client";

import {
  AvatarGroup,
  Carousel,
  Column,
  Heading,
  Row,
  SmartLink,
  StatusIndicator,
  Tag,
  Text,
} from "@once-ui-system/core";
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
  role?: string;
  period?: string;
  status?: string;
  stack?: string[];
}

const statusColor = (status: string) =>
  status.toLowerCase() === "active" ? "green" : "yellow";

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
  role,
  period,
  status,
  stack = [],
}) => {
  const meta = [period, role].filter(Boolean).join(" · ");

  return (
    <Column
      as="article"
      fillWidth
      fillHeight
      radius="l"
      border="neutral-alpha-weak"
      background="surface"
      overflow="hidden"
      className={styles.card}
    >
      {images.length > 0 && (
        <Carousel
          sizes="(max-width: 960px) 100vw, 960px"
          items={images.map((image) => ({
            slide: image,
            alt: title,
          }))}
        />
      )}
      <Column fillWidth flex={1} padding="24" gap="16">
        {(meta || status) && (
          <Row fillWidth horizontal="between" vertical="center" gap="12" wrap>
            <Text family="code" variant="label-default-s" onBackground="neutral-weak">
              {meta}
            </Text>
            {status && (
              <Row gap="8" vertical="center">
                <StatusIndicator size="s" color={statusColor(status)} ariaLabel={status} />
                <Text family="code" variant="label-default-s" onBackground="neutral-medium">
                  {status}
                </Text>
              </Row>
            )}
          </Row>
        )}
        <Heading as="h2" wrap="balance" variant="heading-strong-xl">
          {title}
        </Heading>
        {avatars?.length > 0 && <AvatarGroup avatars={avatars} size="m" reverse />}
        {description?.trim() && (
          <Text wrap="balance" variant="body-default-m" onBackground="neutral-weak">
            {description}
          </Text>
        )}
        {stack.length > 0 && (
          <Row gap="8" wrap>
            {stack.map((item) => (
              <Tag key={item} size="s" variant="neutral" label={item} />
            ))}
          </Row>
        )}
        <Row gap="24" wrap paddingTop="8" style={{ marginTop: "auto" }}>
          {content?.trim() && (
            <SmartLink suffixIcon="arrowRight" style={{ margin: "0", width: "fit-content" }} href={href}>
              <Text variant="body-default-s">Read more</Text>
            </SmartLink>
          )}
          {link && (
            <SmartLink
              suffixIcon="arrowUpRightFromSquare"
              style={{ margin: "0", width: "fit-content" }}
              href={link}
            >
              <Text variant="body-default-s">View project</Text>
            </SmartLink>
          )}
        </Row>
      </Column>
    </Column>
  );
};
