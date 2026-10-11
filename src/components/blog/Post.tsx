"use client";

import { Column, Heading, Media, Row, SmartLink, Tag, Text } from '@once-ui-system/core';
import styles from './Posts.module.scss';
import { formatDate } from '@/utils/formatDate';

interface PostProps {
    post: any;
    thumbnail: boolean;
}

export default function Post({ post, thumbnail }: PostProps) {
    return (
        <SmartLink
            fillWidth
            unstyled
            style={{ borderRadius: 'var(--radius-l)' }}
            key={post.slug}
            href={`/blog/${post.slug}`}>
            <Column
                fillWidth
                fillHeight
                radius="l"
                border="neutral-alpha-weak"
                background="surface"
                overflow="hidden"
                className={styles.card}>
                {post.metadata.image && thumbnail && (
                    <Media
                        priority
                        sizes="(max-width: 768px) 100vw, 640px"
                        src={post.metadata.image}
                        alt={'Thumbnail of ' + post.metadata.title}
                        aspectRatio="16 / 9"
                    />
                )}
                <Column fillWidth gap="12" padding="24">
                    <Row fillWidth horizontal="between" vertical="center" gap="8" wrap>
                        <Text family="code" variant="label-default-s" onBackground="neutral-weak">
                            {formatDate(post.metadata.publishedAt, false)}
                        </Text>
                        {post.metadata.tag && (
                            <Tag size="s" label={post.metadata.tag} variant="neutral" />
                        )}
                    </Row>
                    <Heading as="h3" variant="heading-strong-l" wrap="balance">
                        {post.metadata.title}
                    </Heading>
                    {post.metadata.summary && (
                        <Text variant="body-default-s" onBackground="neutral-weak" wrap="balance">
                            {post.metadata.summary}
                        </Text>
                    )}
                </Column>
            </Column>
        </SmartLink>
    );
}
