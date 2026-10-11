"use client";

import {
  AvatarGroup,
  Carousel,
  Column,
  Heading,
  Row,
  SmartLink,
  StatusIndicator,
  Text,
} from "@once-ui-system/core";
import styles from "./ProjectCard.module.scss";
import { ProjectLogo } from "./ProjectLogo";

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
  logo?: string;
  logoTile?: boolean;
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
  logo,
  logoTile,
}) => {
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
        {(period || status) && (
          <Row fillWidth horizontal="between" vertical="center" gap="12" wrap>
            <Text family="code" variant="label-default-s" onBackground="neutral-weak">
              {period}
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
        <Row gap="16" vertical="center">
          {logo && <ProjectLogo src={logo} alt={`${title} logo`} tile={logoTile} />}
          <Column gap="2">
            <Heading as="h2" wrap="balance" variant="heading-strong-xl">
              {title}
            </Heading>
            {role && (
              <Text variant="body-default-s" onBackground="brand-weak">
                {role}
              </Text>
            )}
          </Column>
        </Row>
        {avatars?.length > 0 && <AvatarGroup avatars={avatars} size="m" reverse />}
        {description?.trim() && (
          <Text wrap="balance" variant="body-default-m" onBackground="neutral-weak">
            {description}
          </Text>
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
