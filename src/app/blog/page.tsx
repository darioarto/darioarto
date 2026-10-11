import { Column, RevealFx, Meta, Schema } from "@once-ui-system/core";
import { Posts } from "@/components/blog/Posts";
import { SectionHeader } from "@/components";
import { baseURL, blog, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: blog.title,
    description: blog.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(blog.title)}`,
    path: blog.path,
  });
}

export default function Blog() {
  return (
    <Column maxWidth="m">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        title={blog.title}
        description={blog.description}
        path={blog.path}
        image={`/api/og/generate?title=${encodeURIComponent(blog.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/blog`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <SectionHeader
        as="h1"
        eyebrow="$ ls ~/blog"
        title={blog.title}
        description="Guides and notes on Minecraft servers, infrastructure and the tools I use."
        marginBottom="40"
        animate
      />
      <RevealFx translateY="16" delay={0.4} fillWidth>
        <Posts columns="2" />
      </RevealFx>
    </Column>
  );
}
