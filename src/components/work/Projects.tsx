import { getPosts } from "@/utils/utils";
import { Grid } from "@once-ui-system/core";
import { ProjectCard } from "@/components";

interface ProjectsProps {
  range?: [number, number?];
  columns?: "1" | "2";
}

export function Projects({ range, columns = "1" }: ProjectsProps) {
  let allProjects = getPosts("work");

  const sortedProjects = allProjects.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <Grid fillWidth columns={columns} s={{ columns: 1 }} gap="16">
      {displayedProjects.map((post, index) => (
        <ProjectCard
          priority={index < 2}
          key={post.slug}
          href={`/work/${post.slug}`}
          images={post.metadata.images}
          title={post.metadata.title}
          description={post.metadata.summary}
          content={post.content}
          avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
          link={post.metadata.link || ""}
          role={post.metadata.role}
          period={post.metadata.period}
          status={post.metadata.status}
          logo={post.metadata.logo}
          logoTile={post.metadata.logoTile}
        />
      ))}
    </Grid>
  );
}
