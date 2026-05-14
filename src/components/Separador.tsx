type SeparadorProps = {
    className?: string;
};

export function Separador({ className = "" }: SeparadorProps) {
    return (
        <div
            className={`absolute h-0.5 w-60 content-[''] [background:linear-gradient(to_right,_#206FBD_0%_16.666%,_#05528D_16.666%_33.333%,_#597E22_33.333%_50%,_#87BF34_50%_66.666%,_#FF89DD_66.666%_83.333%,_#F266C1_83.333%_100%)] ${className}`}
        />
    );
}
