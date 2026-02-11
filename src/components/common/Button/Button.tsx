import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import styles from "./Button.module.css";

export type ButtonVariant = "primary" | "secondary" | "text";

type BaseProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  disabled?: boolean;
};

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    href?: never;
  };

type ButtonAsLink = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

function isLink(props: ButtonProps): props is ButtonAsLink {
  return "href" in props && props.href != null;
}

export function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    className = "",
    disabled = false,
    ...rest
  } = props;

  const classNames = [styles.button, styles[variant], className].filter(Boolean).join(" ");

  if (isLink(props)) {
    const { href, ...linkProps } = props;
    return (
      <a href={href} className={classNames} aria-disabled={disabled} {...linkProps}>
        {children}
      </a>
    );
  }

  const { type: _type, ...buttonRest } = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type="button" className={classNames} disabled={disabled} {...buttonRest}>
      {children}
    </button>
  );
}
