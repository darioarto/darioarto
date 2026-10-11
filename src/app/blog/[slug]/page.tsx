import { notFound } from "next/navigation";
import { CustomMDX, ScrollToHash } from "@/components";
import { TypedText } from "@/components/TypedText";
import { Meta, Schema, AvatarGroup, Button, Column, Heading, HeadingNav, Icon, RevealFx, Row, Text } from "@once-ui-system/core";
import { baseURL, about, blog, person } from "@/resources";
import { formatDate } from "@/utils/formatDate";
import { getPosts } from "@/utils/utils";
import { Metadata } from 'next';

// Only the generated slugs exist; anything else is a real 404.
export const dynamicParams = false;

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getPosts("blog");
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}): Promise<Metadata> {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug) ? routeParams.slug.join('/') : routeParams.slug || '';

  const posts = getPosts("blog")
  let post = posts.find((post) => post.slug === slugPath);

  if (!post) return {};

  return Meta.generate({
    title: post.metadata.title,
    description: post.metadata.summary,
    baseURL: baseURL,
    image: post.metadata.image || `/api/og/generate?title=${post.metadata.title}`,
    path: `${blog.path}/${post.slug}`,
  });
}

export default async function Blog({
  params
}: { params: Promise<{ slug: string | string[] }> }) {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug) ? routeParams.slug.join('/') : routeParams.slug || '';

  let post = getPosts("blog").find((post) => post.slug === slugPath);

  if (!post) {
    notFound();
  }

  const avatars =
    post.metadata.team?.map((person) => ({
      src: person.avatar,
    })) || [];

  return (
    <Row fillWidth>
      <Row maxWidth={12} m={{ hide: true }}/>
      <Row fillWidth horizontal="center">
        <Column as="section" maxWidth="xs" gap="l">
          <Schema
            as="blogPosting"
            baseURL={baseURL}
            path={`${blog.path}/${post.slug}`}
            title={post.metadata.title}
            description={post.metadata.summary}
            datePublished={post.metadata.publishedAt}
            dateModified={post.metadata.publishedAt}
            image={post.metadata.image || `/api/og/generate?title=${encodeURIComponent(post.metadata.title)}`}
            author={{
              name: person.name,
              url: `${baseURL}${about.path}`,
              image: `${baseURL}${person.avatar}`,
            }}
          />
          <Button data-border="rounded" href="/blog" weight="default" variant="tertiary" size="s" prefixIcon="chevronLeft">
            Back
          </Button>
          <Text family="code" variant="label-default-s" onBackground="brand-weak">
            <TypedText text={`$ cat ~/blog/${post.slug}.mdx`} />
          </Text>
          <RevealFx translateY="4" fillWidth horizontal="start">
            <Heading variant="display-strong-s">{post.metadata.title}</Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start">
          <Row gap="12" vertical="center">
            {avatars.length > 0 && <AvatarGroup size="s" avatars={avatars} />}
            <Text family="code" variant="label-default-s" onBackground="neutral-weak">
              {post.metadata.publishedAt && formatDate(post.metadata.publishedAt)}
            </Text>
          </Row>
          </RevealFx>
          <RevealFx translateY="16" delay={0.4} fillWidth>
            <Column as="article" fillWidth>
              <CustomMDX source={post.content} />
            </Column>
          </RevealFx>
          <ScrollToHash />
        </Column>
    </Row>
    <Column maxWidth={12} paddingLeft="40" fitHeight position="sticky" top="80" gap="16" m={{ hide: true }}>
      <Row
        gap="12"
        paddingLeft="2"
        vertical="center"
        onBackground="neutral-medium"
        textVariant="label-default-s"
      >
        <Icon name="document" size="xs" />
        On this page
      </Row>
      <RevealFx delay={0.6} fillWidth>
        <HeadingNav fitHeight header={false} />
      </RevealFx>
    </Column>
    </Row>
  );
}
