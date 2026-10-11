import Image from "next/image";
import classNames from "classnames";
import styles from "./ProjectLogo.module.scss";

interface ProjectLogoProps {
  src: string;
  alt: string;
  /** Rounded app-style tile, for logos that come with their own background */
  tile?: boolean;
  size?: "m" | "l";
}

const pixels = { m: 40, l: 56 };

// Small logo shown next to a project's name, always in the same fixed square.
export function ProjectLogo({ src, alt, tile = false, size = "m" }: ProjectLogoProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={pixels[size]}
      height={pixels[size]}
      className={classNames(styles.logo, styles[size], tile && styles.tile)}
    />
  );
}
