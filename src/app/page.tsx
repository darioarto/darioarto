import React from "react";

import {
  Heading,
  Flex,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Row,
  Schema,
} from "@once-ui-system/core";
import { home, about, person, baseURL, routes, work, blog } from "@/resources";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";
import { Prompt, SectionHeader } from "@/components";

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth paddingY="24" gap="m">
        <Column maxWidth="s">
          <RevealFx fillWidth horizontal="start" paddingTop="16" paddingBottom="24">
            <Prompt command="whoami" />
          </RevealFx>
          <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx paddingTop="12" delay={0.4} horizontal="start">
            <Row gap="12" wrap data-border="rounded">
              <Button
                id="about"
                href={about.path}
                variant="secondary"
                size="m"
                weight="default"
                arrowIcon
              >
                <Flex gap="8" vertical="center" paddingRight="4">
                  {about.avatar.display && (
                    <Avatar
                      marginRight="8"
                      style={{ marginLeft: "-0.75rem" }}
                      src={person.avatar}
                      size="m"
                    />
                  )}
                  {about.title}
                </Flex>
              </Button>
              {routes["/work"] && (
                <Button
                  id="home-projects"
                  href={work.path}
                  prefixIcon="grid"
                  label={work.label}
                  variant="secondary"
                  size="m"
                  weight="default"
                  arrowIcon
                />
              )}
              {routes["/blog"] && (
                <Button
                  id="home-blog"
                  href={blog.path}
                  prefixIcon="book"
                  label={blog.label}
                  variant="secondary"
                  size="m"
                  weight="default"
                  arrowIcon
                />
              )}
            </Row>
          </RevealFx>
        </Column>
      </Column>
      <RevealFx translateY="16" delay={0.6}>
        <Column fillWidth>
          <SectionHeader eyebrow="$ ls ~/projects --featured" title="Featured project" />
          <Projects range={[1, 1]} />
        </Column>
      </RevealFx>
      {routes["/blog"] && (
        <Column fillWidth>
          <SectionHeader eyebrow="$ tail ~/blog" title="Latest from the blog" />
          <Posts range={[1, 2]} columns="2" />
        </Column>
      )}
    </Column>
  );
}
