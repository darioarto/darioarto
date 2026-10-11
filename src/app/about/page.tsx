import {
  Avatar,
  Button,
  Column,
  Flex,
  Grid,
  Heading,
  Icon,
  IconButton,
  Row,
  Tag,
  Text,
  Meta,
  Schema
} from "@once-ui-system/core";
import { baseURL, about, person, social } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import { SectionHeader } from "@/components";
import styles from "@/components/about/about.module.scss";
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

export default function About() {
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((experience) => experience.company),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => institution.name),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill) => skill.title),
    },
  ];
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          hide
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}
      <Flex fillWidth s={{ direction: "column" }} horizontal="center">
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            position="sticky"
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <Avatar src={person.avatar} size="xl" border="transparent" />
            <Flex gap="8" vertical="center">
              <Icon onBackground="accent-weak" name="globe" />
              {person.location}
            </Flex>
            {person.languages.length > 0 && (
              <Flex wrap gap="8">
                {person.languages.map((language, index) => (
                  <Tag key={language} size="l">
                    {language}
                  </Tag>
                ))}
              </Flex>
            )}
          </Column>
        )}
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            id={about.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            {about.calendar.display && (
              <Flex
                fitWidth
                border="brand-alpha-medium"
                className={styles.blockAlign}
                style={{
                  backdropFilter: "blur(var(--static-space-1))",
                }}
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                gap="8"
                marginBottom="m"
                vertical="center"
              >
                <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
                <Flex paddingX="8">Schedule a call</Flex>
                <IconButton
                  href={about.calendar.link}
                  data-border="rounded"
                  variant="secondary"
                  icon="chevronRight"
                />
              </Flex>
            )}
            <Text className={styles.textAlign} family="code" variant="label-default-s" onBackground="brand-weak" marginBottom="8">
              $ cat ~/about.md
            </Text>
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>
            {social.length > 0 && (
              <Flex className={styles.blockAlign} paddingTop="20" paddingBottom="8" gap="8" wrap horizontal="center" fitWidth data-border="rounded">
                {social.map(
                  (item) =>
                    item.link && (
                        <React.Fragment key={item.name}>
                            <Flex s={{ hide: true }}>
                                <Button
                                    href={item.link}
                                    prefixIcon={item.icon}
                                    label={item.name}
                                    size="s"
                                    weight="default"
                                    variant="secondary"
                                />
                            </Flex>
                            <Flex s={{ hide: false }}>
                                <IconButton
                                    size="l"
                                    href={item.link}
                                    icon={item.icon}
                                    variant="secondary"
                                    tooltip={item.name}
                                />
                            </Flex>
                        </React.Fragment>
                    ),
                )}
              </Flex>
            )}
          </Column>

          {about.intro.display && (
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
              {about.intro.description}
            </Column>
          )}

          {about.work.display && (
            <Column fillWidth marginBottom="40">
              <SectionHeader id={about.work.title} eyebrow="$ cat ~/experience.log" title={about.work.title} />
              <Column fillWidth>
                {about.work.experiences.map((experience, index) => (
                  <Row key={`${experience.company}-${experience.role}-${index}`} fillWidth gap="20">
                    <Column className={styles.rail} horizontal="center">
                      <span className={styles.dot} />
                      {index < about.work.experiences.length - 1 && <span className={styles.line} />}
                    </Column>
                    <Column fillWidth paddingBottom="40">
                      <Row fillWidth horizontal="between" vertical="center" gap="12" wrap marginBottom="4">
                        <Text id={experience.company} variant="heading-strong-l">
                          {experience.company}
                        </Text>
                        <Text family="code" variant="label-default-s" onBackground="neutral-weak">
                          {experience.timeframe}
                        </Text>
                      </Row>
                      <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                        {experience.role}
                      </Text>
                      <Column as="ul" gap="12" className={styles.list}>
                        {experience.achievements.map((achievement: React.JSX.Element, index: number) => (
                          <Text
                            as="li"
                            variant="body-default-m"
                            onBackground="neutral-medium"
                            key={`${experience.company}-${index}`}
                          >
                            {achievement}
                          </Text>
                        ))}
                      </Column>
                    </Column>
                  </Row>
                ))}
              </Column>
            </Column>
          )}

          {about.studies.display && (
            <Column fillWidth marginBottom="40">
              <SectionHeader id={about.studies.title} eyebrow="$ cat ~/education.txt" title={about.studies.title} />
              <Column fillWidth gap="12">
                {about.studies.institutions.map((institution, index) => (
                  <Column
                    key={`${institution.name}-${index}`}
                    fillWidth
                    gap="4"
                    padding="24"
                    radius="l"
                    border="neutral-alpha-weak"
                    background="surface"
                  >
                    <Text id={institution.name} variant="heading-strong-l">
                      {institution.name}
                    </Text>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {institution.description}
                    </Text>
                  </Column>
                ))}
              </Column>
            </Column>
          )}

          {about.technical.display && (
            <Column fillWidth>
              <SectionHeader id={about.technical.title} eyebrow="$ ls ~/skills" title={about.technical.title} />
              <Grid fillWidth columns="2" s={{ columns: 1 }} gap="12">
                {about.technical.skills.map((skill, index) => (
                  <Column
                    key={`${skill.title}-${index}`}
                    fillWidth
                    gap="12"
                    padding="24"
                    radius="l"
                    border="neutral-alpha-weak"
                    background="surface"
                  >
                    <Text id={skill.title} variant="heading-strong-m">{skill.title}</Text>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      {skill.description}
                    </Text>
                    {skill.tags?.length > 0 && (
                      <Row gap="8" wrap paddingTop="4">
                        {skill.tags.map((tag) => (
                          <Tag key={tag} size="s" variant="neutral" label={tag} />
                        ))}
                      </Row>
                    )}
                  </Column>
                ))}
              </Grid>
            </Column>
          )}
        </Column>
      </Flex>
    </Column>
  );
}


