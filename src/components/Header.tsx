"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Fade, Flex, Line, Text, ToggleButton } from "@once-ui-system/core";

import { routes, display, person, about, blog, work } from "@/resources";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.scss";

type TimeDisplayProps = {
  timeZone: string;
  locale?: string; // Optionally allow locale, defaulting to 'en-GB'
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone, locale = "en-GB" }) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const timeString = new Intl.DateTimeFormat(locale, options).format(now);
      setCurrentTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [timeZone, locale]);

  return <>{currentTime}</>;
};

export default TimeDisplay;

type NavItemProps = {
  icon: string;
  href: string;
  label: string;
  selected: boolean;
};

// Labelled button on desktop, icon-only on mobile. The wrappers carry the responsive
// visibility so the button's own display styles can't override it.
const NavItem = ({ icon, href, label, selected }: NavItemProps) => (
  <>
    <Flex s={{ hide: true }}>
      <ToggleButton prefixIcon={icon} href={href} label={label} selected={selected} />
    </Flex>
    <Flex s={{ hide: false }}>
      <ToggleButton prefixIcon={icon} href={href} selected={selected} aria-label={label} />
    </Flex>
  </>
);

export const Header = () => {
  const pathname = usePathname() ?? "";

  return (
    <>
      <Fade s={{ hide: true }} fillWidth position="fixed" height="80" zIndex={9} />
      <Fade s={{ hide: false }} fillWidth position="fixed" bottom="0" to="top" height="80" zIndex={9} />
      <Flex
        fitHeight
        position="unset"
        className={styles.position}
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
        data-border="rounded"
      >
        <Flex paddingLeft="12" fillWidth vertical="center" textVariant="body-default-s">
          {display.location && <Flex s={{ hide: true }}>{person.location}</Flex>}
        </Flex>
        <Flex fillWidth horizontal="center">
          <Flex
            background="page"
            border="neutral-alpha-weak"
            radius="m-4"
            shadow="l"
            padding="4"
            horizontal="center"
            zIndex={1}
          >
            <Flex gap="4" vertical="center" textVariant="body-default-s" suppressHydrationWarning>
              {routes["/"] && (
                <ToggleButton prefixIcon="home" href="/" selected={pathname === "/"} />
              )}
              <Line background="neutral-alpha-medium" vert maxHeight="24" />
              {routes["/about"] && (
                <NavItem icon="person" href="/about" label={about.label} selected={pathname === "/about"} />
              )}
              {routes["/work"] && (
                <NavItem icon="grid" href="/work" label={work.label} selected={pathname.startsWith("/work")} />
              )}
              {routes["/blog"] && (
                <NavItem icon="book" href="/blog" label={blog.label} selected={pathname.startsWith("/blog")} />
              )}
              {display.themeSwitcher && (
                <>
                  <Line background="neutral-alpha-medium" vert maxHeight="24" />
                  <ThemeToggle />
                </>
              )}
            </Flex>
          </Flex>
        </Flex>
        <Flex fillWidth horizontal="end" vertical="center">
          <Flex
            paddingRight="12"
            horizontal="end"
            vertical="center"
            gap="20"
          >
            {display.time && (
              <Flex s={{ hide: true }} gap="8">
                <Text family="code" variant="label-default-s" onBackground="neutral-weak">
                  {person.location.split("/").pop()}
                </Text>
                <Text family="code" variant="label-default-s" onBackground="neutral-strong">
                  <TimeDisplay timeZone={person.location} />
                </Text>
              </Flex>
            )}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
