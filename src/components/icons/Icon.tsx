import type { ImgHTMLAttributes } from "react";

type IconProps = ImgHTMLAttributes<HTMLImageElement> & {
  name: string;
  alt: string;
};

const DEFAULT_SIZE = 20;

export function Icon({ name, alt, width, height, ...props }: IconProps) {
  return (
    <img
      src={`/icons/${name}.svg`}
      alt={alt}
      width={width ?? DEFAULT_SIZE}
      height={height ?? DEFAULT_SIZE}
      {...props}
    />
  );
}
