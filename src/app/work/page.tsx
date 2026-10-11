import { Column, RevealFx, Meta, Schema } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { Projects } from "@/components/work/Projects";
import { SectionHeader } from "@/components";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function Work() {
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <SectionHeader
        as="h1"
        eyebrow="$ ls ~/projects"
        title="Projects"
        description="Infrastructure, communities and products I have built or run."
        marginBottom="40"
        animate
      />
      <RevealFx translateY="16" delay={0.4} fillWidth>
        <Projects columns="2" />
      </RevealFx>
    </Column>
  );
}
