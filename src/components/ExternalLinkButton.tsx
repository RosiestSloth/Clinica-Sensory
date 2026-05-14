import type { ReactNode } from "react";

type ExternalLinkButtonProps = {
    href: string;
    children: ReactNode;
    className: string;
    iconSrc?: string;
    iconAlt?: string;
    iconClassName?: string;
};

export function ExternalLinkButton({
    href,
    children,
    className,
    iconSrc,
    iconAlt,
    iconClassName
}: ExternalLinkButtonProps) {
    return (
        <a href={href} target="_blank" rel="noreferrer" className={className}>
            {iconSrc ? <img src={iconSrc} alt={iconAlt ?? ""} className={iconClassName} /> : null}
            {children}
        </a>
    );
}
